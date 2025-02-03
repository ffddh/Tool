/*
脚本名称：京东 WSKEY
更新时间：2024/07/27
使用方法：划掉后台重新打开 京东APP 即可自动抓取 WSKEY。抓完 WSKEY 不能在京东 app 点退出登录（会导致 WSKEY 失效），切换账号的正确姿势是先断网（飞行模式）再点击退出登录，划掉后台重新打开 APP 再登录新的账号。
注意事项：脚本抓取的 WSKEY 默认自动提交到服务器（自动上车），可通过 BoxJs 设置关闭自动提交功能。
重写订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/rewrite/get_jd_wskey.sgmodule
BoxJs订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/boxjs/fokit.boxjs.json

------------------ Surge 配置 ------------------

[Script]
京东 WSKEY = type=http-request,pattern=https:\/\/blackhole\.m\.jd\.com\/getinfo,requires-body=0,max-size=0,binary-body-mode=0,timeout=30,script-path=https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js,script-update-interval=0

京东 PIN = type=http-request,pattern=https:\/\/perf\.m\.jd\.com\/app_monitor\/\w{1,}\/getRule,requires-body=0,max-size=0,binary-body-mode=0,timeout=30,script-path=https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js,script-update-interval=0

[MITM]
hostname = %APPEND% blackhole.m.jd.com, perf.m.jd.com

------------------- Loon 配置 -------------------

[MITM]
hostname = blackhole.m.jd.com, perf.m.jd.com

[Script]
http-request https:\/\/blackhole\.m\.jd\.com\/getinfo tag=京东 WSKEY,script-path=https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js,requires-body=0

http-request https:\/\/perf\.m\.jd\.com\/app_monitor\/\w{1,}\/getRule tag=京东 PIN,script-path=https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js,requires-body=0

--------------- Quantumult X 配置 ---------------

[MITM]
hostname = blackhole.m.jd.com, perf.m.jd.com

[rewrite_local]

https:\/\/blackhole\.m\.jd\.com\/getinfo url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js

https:\/\/perf\.m\.jd\.com\/app_monitor\/\w{1,}\/getRule url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Fokit/scripts/get_jd_wskey.js

------------------------------------------------
 */

const $ = new Env('京东 WSKEY');
$.jd_tempKey = 'jd_temp', $.wskeyKey = 'wskeyList';  // 缓存键名
$.is_debug = $.getdata('is_debug') || 'false';  // 调试模式
$.chat_id = $.getdata('WSKEY_TG_USER_ID') || '';  // TG CHAT ID
$.bot_token = $.getdata('WSKEY_TG_BOT_TOKEN') || '';  // TG Robot Token
$.autoSubmit = $.getdata('WSKEY_AUTO_UPLOAD') || 'true';  // 是否自动提交
$.Messages = [], $.cookie = '';  // 初始化数据

// 脚本执行入口
!(async () => {
  if (typeof $request !== `undefined`) {
    await GetCookie();
    if ($.cookie && $.autoSubmit != 'false') {
      await SubmitCK();
    } else if ($.cookie) {
      $.Messages.push(`🎉 WSKEY 获取成功\n${$.cookie}`);
      $.setjson($.wskeyList, $.wskeyKey);  // 写入数据持久化
    }
  }
})()
  .catch((e) => $.Messages.push(e.message || e) && $.logErr(e))
  .finally(async () => {
    await sendMsg($.Messages.join('\n').trimStart().trimEnd());  // 推送通知
    $.done();
  })

// 获取用户数据
async function GetCookie() {
  try {
    debug($request.headers);
    const headers = ObjectKeys2LowerCase($request.headers);
    const [, wskey] = headers?.cookie.match(/wskey=([^=;]+?);/) || '';
    const [, pin] = headers?.cookie.match(/pin=([^=;]+?);/) || '';

    // 延迟读取缓存
    if ($request.url.includes('/getRule')) await $.wait(3e3);

    // 读取缓存数据
    $.jd_temp = $.getjson($.jd_tempKey) || {};  // 临时缓存
    $.wskeyList = $.getjson($.wskeyKey) || [];  // WSKEY 缓存

    // 清理过期缓存数据
    if ($.jd_temp?.['ts'] && Date.now() - $.jd_temp['ts'] >= 15e3) {
      $.log(`🆑 清理过期缓存数据`);
      $.jd_temp = {};
    }

    // 写入缓存
    if (wskey) {
      $.log(`wskey: ${wskey}`);
      $.jd_temp['wskey'] = wskey;
      $.jd_temp['ts'] = Date.now();
      $.setjson($.jd_temp, $.jd_tempKey); // 写入新的 wskey
    } else if (pin) {
      $.log(`pin: ${pin}`);
      $.jd_temp['pin'] = pin;
      $.jd_temp['ts'] = Date.now();
      $.setjson($.jd_temp, $.jd_tempKey); // 写入新的 pin
    }

    // 拼接 wskey
    if ($.jd_temp?.['wskey'] && $.jd_temp?.['pin']) {
      $.cookie = `wskey=${$.jd_temp['wskey']}; pin=${$.jd_temp['pin']};`;

      // 使用 find() 方法找到与 pin 匹配的对象，以新增或更新用户 WSKEY
      const user = $.wskeyList.find(user => user.userName === $.jd_temp['pin']);
      if (user) {
        if (user.cookie == $.cookie) {
          $.log(`⚠️ 当前 WSKEY 与缓存一致, 结束运行。`);
          $.done();  // WSKEY 无变化结束运行
        }
        $.log(`♻️ 更新用户 WSKEY: ${$.cookie}`);
        user.cookie = $.cookie;
      } else {
        $.log(`🆕 新增用户 WSKEY: ${$.cookie}`);
        $.wskeyList.push({ "userName": $.jd_temp?.['pin'], "cookie": $.cookie });
      }
    }
  } catch (e) {
    $.log("❌ 用户数据获取失败"), $.log(e);
  }
}

// 提交 WSKEY
async function SubmitCK() {
  let msg = '';
  // 构造请求
  let options = {
    url: "https://api.fokit.cn/submit",
    body: `text=${$.cookie}`
  };
  if ($.bot_token && $.chat_id) {
    options['url'] += '?' + $.queryStr({
      bot_token: $.bot_token,
      chat_id: $.chat_id,
    });
  }

  // 发起请求
  var result = await Request(options);
  if (result?.ok) {
    msg += `🎉 WSKEY 提交成功。\n${$.cookie}`;
    $.setjson($.wskeyList, $.wskeyKey);  // 写入数据持久化
  } else if (result?.error_code === 400) {
    msg += `⚠️ Telegram bot 无发送消息权限。\n${$.cookie}`;
  } else if (result?.error_code === 401) {
    msg += `⚠️ Telegram bot token 填写错误。\n${$.cookie}`;
  } else {
    msg += `❌ WSKEY 提交失败, 请稍后重试。\n${$.cookie}`;
    $.log($.toStr(result));
  }

  $.Messages.push(msg), $.log(msg);
}

/**
 * 对象属性转小写
 * @param {object} obj - 传入 $request.headers
 * @returns {object} 返回转换后的对象
 */
function ObjectKeys2LowerCase(obj) {
  const _lower = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]))
  return new Proxy(_lower, {
    get: function (target, propKey, receiver) {
      return Reflect.get(target, propKey.toLowerCase(), receiver)
    },
    set: function (target, propKey, value, receiver) {
      return Reflect.set(target, propKey.toLowerCase(), value, receiver)
    }
  })
}

/**
 * 请求函数二次封装
 * @param {(object|string)} options - 构造请求内容，可传入对象或 Url
 * @returns {(object|string)} - 根据 options['respType'] 传入的 {status|headers|rawBody} 返回对象或字符串，默认为 body
 */
async function Request(options) {
  try {
    options = options.url ? options : { url: options };
    const _method = options?._method || ('body' in options ? 'post' : 'get');
    const _respType = options?._respType || 'body';
    const _timeout = options?._timeout || 15e3;
    const _http = [
      new Promise((_, reject) => setTimeout(() => reject(`❌ 请求超时： ${options['url']}`), _timeout)),
      new Promise((resolve, reject) => {
        debug(options, '[Request]');
        $[_method.toLowerCase()](options, (error, response, data) => {
          debug(response, '[response]');
          error && $.log($.toStr(error));
          if (_respType !== 'all') {
            resolve($.toObj(response?.[_respType], response?.[_respType]));
          } else {
            resolve(response);
          }
        })
      })
    ];
    return await Promise.race(_http);
  } catch (err) {
    $.logErr(err);
  }
}

// 发送消息
async function sendMsg(message) {
  if (!message) return;
  try {
    if ($.isNode()) {
      try {
        var notify = require('./sendNotify');
      } catch (e) {
        var notify = require('./utils/sendNotify');
      }
      await notify.sendNotify($.name, message);
    } else {
      $.msg($.name, '', message);
    }
  } catch (e) {
    $.log(`\n\n----- ${$.name} -----\n${message}`);
  }
}

/**
 * DEBUG
 * @param {*} content - 传入内容
 * @param {*} title - 标题
 */
function debug(content, title = "debug") {
  let start = `\n----- ${title} -----\n`;
  let end = `\n----- ${$.time('HH:mm:ss')} -----\n`;
  if ($.is_debug === 'true') {
    if (typeof content == "string") {
      $.log(start + content + end);
    } else if (typeof content == "object") {
      $.log(start + $.toStr(content) + end);
    }
  }
}

// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, o) => { s.call(this, t, (t, s, r) => { t ? o(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; const o = this.getdata(t); if (o) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, o) => e(o)) }) } runScript(t, e) { return new Promise(s => { let o = this.getdata("@chavy_boxjs_userCfgs.httpapi"); o = o ? o.replace(/\n/g, "").trim() : o; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [i, a] = o.split("@"), n = { url: `http://${a}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": i, Accept: "*/*" }, timeout: r }; this.post(n, (t, e, o) => s(o)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), o = !s && this.fs.existsSync(e); if (!s && !o) return {}; { const o = s ? t : e; try { return JSON.parse(this.fs.readFileSync(o)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), o = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : o ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const o = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of o) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, o) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[o + 1]) >> 0 == +e[o + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, o] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, o, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, o, r] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(o), a = o ? "null" === i ? null : i || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), o) } catch (e) { const i = {}; this.lodash_set(i, r, t), s = this.setval(JSON.stringify(i), o) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, o) => { !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, o) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: o, headers: r, body: i, bodyBytes: a } = t; e(null, { status: s, statusCode: o, headers: r, body: i, bodyBytes: a }, i, a) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: o, statusCode: r, headers: i, rawBody: a } = t, n = s.decode(a, this.encoding); e(null, { status: o, statusCode: r, headers: i, rawBody: a, body: n }, n) }, t => { const { message: o, response: r } = t; e(o, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, o) => { !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, o) }); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: o, headers: r, body: i, bodyBytes: a } = t; e(null, { status: s, statusCode: o, headers: r, body: i, bodyBytes: a }, i, a) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let o = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...i } = t; this.got[s](r, i).then(t => { const { statusCode: s, statusCode: r, headers: i, rawBody: a } = t, n = o.decode(a, this.encoding); e(null, { status: s, statusCode: r, headers: i, rawBody: a, body: n }, n) }, t => { const { message: s, response: r } = t; e(s, r, r && o.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let o = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in o) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[e] : ("00" + o[e]).substr(("" + o[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let o = t[s]; null != o && "" !== o && ("object" == typeof o && (o = JSON.stringify(o)), e += `${s}=${o}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", o = "", r) { const i = t => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } case "Loon": { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } case "Quantumult X": { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, o = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": o } } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, o, i(r)); break; case "Quantumult X": $notify(e, s, o, i(r)); break; case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), o && t.push(o), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.join(this.logSeparator)}`)) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.join(this.logSeparator)}`)) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.join(this.logSeparator)}`)) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.join(this.logSeparator)}`)) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, e, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack) } } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
