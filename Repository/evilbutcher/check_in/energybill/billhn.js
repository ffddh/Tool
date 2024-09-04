/*
【国网电费-湖南】@evilbutcher

【仓库地址】https://github.com/evilbutcher/QuantumultX/tree/master（欢迎star🌟）

【BoxJs】https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/evilbutcher.boxjs.json

【致谢】
感谢Peng-YM的OpenAPI.js！

⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。


【使用说明】
登录微信公众号查询电量、电费，获取Cookie即可使用。

【Surge】
-----------------
[Script]
国网电费-湖南获取Cookie = type=http-request, pattern = https:\/\/wxgzpt.hn.sgcc.com.cn\/wxapp\_dlsh\/wx, script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, requires-body=false
国网电费-湖南获取余额Cookie = type=http-request, pattern = https:\/\/wxgzpt.hn.sgcc.com.cn\/hndlGateway\/payment\/payment\/balance, script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, requires-body=false
国网电费-湖南 = type=cron,cronexp=5 0 * * *,script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js

【Loon】
-----------------
[Script]
http-request https:\/\/wxgzpt.hn.sgcc.com.cn\/wxapp\_dlsh\/wx tag=国网电费-湖南获取Cookie, script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, requires-body=false
https:\/\/wxgzpt.hn.sgcc.com.cn\/hndlGateway\/payment\/payment\/balance tag=国网电费-湖南余额Cookie, script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, requires-body=false
cron "5 0 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, tag=国网电费-湖南

【Quantumult X】
-----------------
[rewrite_local]
https:\/\/wxgzpt.hn.sgcc.com.cn\/wxapp\_dlsh\/wx url script-request-header https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js
https:\/\/wxgzpt.hn.sgcc.com.cn\/hndlGateway\/payment\/payment\/balance url script-request-header https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js

[task_local]
5 0 * * * https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/check_in/energybill/billhn.js, tag=国网电费-湖南

【All App MitM】
hostname = wxgzpt.hn.sgcc.com.cn

【Icon】
透明：https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/picture/bill_tran.png
彩色：https://raw.githubusercontent.com/evilbutcher/QuantumultX/master/picture/bill.png
*/

const $ = new API("billhn", true);
const ERR = MYERR();
$.feecookie = $.read("evil_billhnfeeCookie");
$.feeurl = $.read("evil_billhnfeeUrl");
$.detailcookie = $.read("evil_billhndetailCookie");
$.detailurl = $.read("evil_billhndetailUrl");
$.balancecookie = $.read("evil_billhnbalanceCookie");
$.balanceurl = $.read("evil_billhnbalanceUrl");
$.detailmonth = ""
$.detailyesterday = ""
$.detail = ""
$.balance = ""
var date = new Date();
var month = parseInt(date.getMonth()) + 1

!(async () => {
    if (typeof $request != "undefined") {
        getCookie();
        return;
    }
    if ($.feecookie != undefined && $.feeurl != undefined && $.detailcookie != undefined && $.detailurl != undefined && $.feecookie != "" && $.feeurl != "" && $.detailcookie != "" && $.detailurl != "") {
        //await checkfee();
        //await checkdetail();
        //await checkbalance();
        //$.notify("国网电费-湖南⚡️", "", $.detailyesterday + $.detailmonth + $.balance);
        $.notify("国网电费-湖南⚡️", "", "Cookie失效太快，已停更");
    } else {
        $.notify("国网电费-湖南", "", "❌ 请先获取Cookie");
    }
})()
    .catch((err) => {
        if (err instanceof ERR.ParseError) {
            $.notify("国网电费-湖南", "❌ 解析数据出现错误", err.message);
        } else if (err instanceof ERR.EventError) {
            $.notify("国网电费-湖南", "❌ 请尝试重新获取Cookie", err.message);
        } else {
            $.notify(
                "国网电费-湖南",
                "❌ 出现错误",
                JSON.stringify(err, Object.getOwnPropertyNames(err))
            );
        }
    })
    .finally(() => $.done());

function checkdetail() {
    const url = $.detailurl;
    const headers = {
        'Accept': `*/*`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Origin': `https://wxgzpt.hn.sgcc.com.cn`,
        'Cookie': $.detailcookie,
        'Connection': `keep-alive`,
        'Host': `wxgzpt.hn.sgcc.com.cn`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.30(0x18001e30) NetType/WIFI Language/zh_CN`,
        'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
        'X-Requested-With': `XMLHttpRequest`
    };
    const myRequest = {
        url: url,
        headers: headers,
    };
    return $.http.post(myRequest).then((response) => {
        var statusCode = response.statusCode
        if (statusCode == 200) {
            var data = JSON.parse(response.body)
            var thismonth = 0
            for (i = 0; i < data.length; i++) {
                var mon = data[i].date.slice(0, 2)
                if (parseInt(mon) == month && data[i].spower != "-") {
                    thismonth = thismonth + parseInt(data[i].spower)
                }
            }
            $.detailmonth = "本月用电：" + thismonth + "度\n"
            var yesterday = data[0].spower
            if (yesterday != "-") {
                $.detailyesterday = "昨日用电：" + yesterday + "度\n"
            } else {
                $.detailyesterday = "昨日用电：0度\n"
            }
        } else {
            $.error(JSON.stringify(response));
            throw new ERR.ParseError("请检查日志，稍后再试");
        }
    });
}


function checkbalance() {
    const url = $.balanceurl;
    const headers = {
        'Cookie': $.balancecookie,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `wxgzpt.hn.sgcc.com.cn`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.30(0x18001e30) NetType/WIFI Language/zh_CN`,
        'Accept-Language': `zh-CN,zh-Hans;q=0.9`
    };
    const myRequest = {
        url: url,
        headers: headers,
    };
    return $.http.get(myRequest).then((response) => {
        var statusCode = response.statusCode
        if (statusCode == 200) {
            var data = JSON.parse(response.body).data
            var balance = data.electricFee
            $.balance = "当前结余：" + balance + "元"
        } else {
            $.error(JSON.stringify(response));
            throw new ERR.ParseError("请检查日志，稍后再试");
        }
    });
}

function checkfee() {
    const url = $.feeurl;
    const headers = {
        'Accept': `*/*`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Origin': `https://wxgzpt.hn.sgcc.com.cn`,
        'Cookie': $.feecookie,
        'Connection': `keep-alive`,
        'Host': `wxgzpt.hn.sgcc.com.cn`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.30(0x18001e30) NetType/WIFI Language/zh_CN`,
        'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
        'X-Requested-With': `XMLHttpRequest`
    };
    const myRequest = {
        url: url,
        headers: headers,
    };
    return $.http.post(myRequest).then((response) => {
        var statusCode = response.statusCode
        if (statusCode == 200) {
            var data = JSON.parse(response.body).powerBillList[0]
            var total = data.totalMoney
            //var yearmonth = data.feeYearMonth
            var power = data.powerSum
            $.detail = "上月用电：" + power + "度/" + total + "元\n"
        } else {
            $.error(JSON.stringify(response));
            throw new ERR.ParseError("请检查日志，稍后再试");
        }
    });
}

function MYERR() {
    class ParseError extends Error {
        constructor(message) {
            super(message);
            this.name = "ParseError";
        }
    }
    class EventError extends Error {
        constructor(message) {
            super(message);
            this.name = "EventError";
        }
    }
    return {
        ParseError,
        EventError,
    };
}

function getCookie() {
    if (
        $request &&
        $request.method != "OPTIONS" &&
        $request.url.match(/ajaxGetDfcxList/)
    ) {
        const cookie = $request.headers["Cookie"];
        $.log(cookie);
        $.write(cookie, "evil_billhnfeeCookie");
        const url = $request.url;
        $.log(url);
        $.write(url, "evil_billhnfeeUrl");
        $.notify("国网电费-湖南", "", "获取费用Cookie成功🎉");
    }
    if (
        $request &&
        $request.method != "OPTIONS" &&
        $request.url.match(/ajaxGetcxssdl/)
    ) {
        const cookie = $request.headers["Cookie"];
        $.log(cookie);
        $.write(cookie, "evil_billhndetailCookie");
        const url = $request.url;
        $.log(url);
        $.write(url, "evil_billhndetailUrl");
        $.notify("国网电费-湖南", "", "获取详情Cookie成功🎉");
    }
    if (
        $request &&
        $request.method != "OPTIONS" &&
        $request.url.match(/hndlGateway\/payment\/payment\/balance/)
    ) {
        const cookie = $request.headers["Cookie"];
        $.log(cookie);
        $.write(cookie, "evil_billhnbalanceCookie");
        const url = $request.url;
        $.log(url);
        $.write(url, "evil_billhnbalanceUrl");
        $.notify("国网电费-湖南", "", "获取余额Cookie成功🎉");
    }
}

/**
 * OpenAPI
 * @author: Peng-YM
 * https://github.com/Peng-YM/QuanX/blob/master/Tools/OpenAPI/README.md
 */
function ENV() {
    const isQX = typeof $task !== "undefined";
    const isLoon = typeof $loon !== "undefined";
    const isSurge = typeof $httpClient !== "undefined" && !isLoon;
    const isJSBox = typeof require == "function" && typeof $jsbox != "undefined";
    const isNode = typeof require == "function" && !isJSBox;
    const isRequest = typeof $request !== "undefined";
    const isScriptable = typeof importModule !== "undefined";
    return {
        isQX,
        isLoon,
        isSurge,
        isNode,
        isJSBox,
        isRequest,
        isScriptable,
    };
}

function HTTP(
    defaultOptions = {
        baseURL: "",
    }
) {
    const { isQX, isLoon, isSurge, isScriptable, isNode } = ENV();
    const methods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"];
    const URL_REGEX =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    function send(method, options) {
        options =
            typeof options === "string"
                ? {
                    url: options,
                }
                : options;
        const baseURL = defaultOptions.baseURL;
        if (baseURL && !URL_REGEX.test(options.url || "")) {
            options.url = baseURL ? baseURL + options.url : options.url;
        }
        if (options.body && options.headers && !options.headers["Content-Type"]) {
            options.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        options = {
            ...defaultOptions,
            ...options,
        };
        const timeout = options.timeout;
        const events = {
            ...{
                onRequest: () => { },
                onResponse: (resp) => resp,
                onTimeout: () => { },
            },
            ...options.events,
        };

        events.onRequest(method, options);

        let worker;
        if (isQX) {
            worker = $task.fetch({
                method,
                ...options,
            });
        } else if (isLoon || isSurge || isNode) {
            worker = new Promise((resolve, reject) => {
                const request = isNode ? require("request") : $httpClient;
                request[method.toLowerCase()](options, (err, response, body) => {
                    if (err) reject(err);
                    else
                        resolve({
                            statusCode: response.status || response.statusCode,
                            headers: response.headers,
                            body,
                        });
                });
            });
        } else if (isScriptable) {
            const request = new Request(options.url);
            request.method = method;
            request.headers = options.headers;
            request.body = options.body;
            worker = new Promise((resolve, reject) => {
                request
                    .loadString()
                    .then((body) => {
                        resolve({
                            statusCode: request.response.statusCode,
                            headers: request.response.headers,
                            body,
                        });
                    })
                    .catch((err) => reject(err));
            });
        }

        let timeoutid;
        const timer = timeout
            ? new Promise((_, reject) => {
                timeoutid = setTimeout(() => {
                    events.onTimeout();
                    return reject(
                        `${method} URL: ${options.url} exceeds the timeout ${timeout} ms`
                    );
                }, timeout);
            })
            : null;

        return (
            timer
                ? Promise.race([timer, worker]).then((res) => {
                    clearTimeout(timeoutid);
                    return res;
                })
                : worker
        ).then((resp) => events.onResponse(resp));
    }

    const http = {};
    methods.forEach(
        (method) =>
            (http[method.toLowerCase()] = (options) => send(method, options))
    );
    return http;
}

function API(name = "untitled", debug = false) {
    const { isQX, isLoon, isSurge, isNode, isJSBox, isScriptable } = ENV();
    return new (class {
        constructor(name, debug) {
            this.name = name;
            this.debug = debug;

            this.http = HTTP();
            this.env = ENV();

            this.node = (() => {
                if (isNode) {
                    const fs = require("fs");

                    return {
                        fs,
                    };
                } else {
                    return null;
                }
            })();
            this.initCache();

            const delay = (t, v) =>
                new Promise(function (resolve) {
                    setTimeout(resolve.bind(null, v), t);
                });

            Promise.prototype.delay = function (t) {
                return this.then(function (v) {
                    return delay(t, v);
                });
            };
        }

        // persistence
        // initialize cache
        initCache() {
            if (isQX) this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}");
            if (isLoon || isSurge)
                this.cache = JSON.parse($persistentStore.read(this.name) || "{}");

            if (isNode) {
                // create a json for root cache
                let fpath = "root.json";
                if (!this.node.fs.existsSync(fpath)) {
                    this.node.fs.writeFileSync(
                        fpath,
                        JSON.stringify({}),
                        {
                            flag: "wx",
                        },
                        (err) => console.log(err)
                    );
                }
                this.root = {};

                // create a json file with the given name if not exists
                fpath = `${this.name}.json`;
                if (!this.node.fs.existsSync(fpath)) {
                    this.node.fs.writeFileSync(
                        fpath,
                        JSON.stringify({}),
                        {
                            flag: "wx",
                        },
                        (err) => console.log(err)
                    );
                    this.cache = {};
                } else {
                    this.cache = JSON.parse(
                        this.node.fs.readFileSync(`${this.name}.json`)
                    );
                }
            }
        }

        // store cache
        persistCache() {
            const data = JSON.stringify(this.cache, null, 2);
            if (isQX) $prefs.setValueForKey(data, this.name);
            if (isLoon || isSurge) $persistentStore.write(data, this.name);
            if (isNode) {
                this.node.fs.writeFileSync(
                    `${this.name}.json`,
                    data,
                    {
                        flag: "w",
                    },
                    (err) => console.log(err)
                );
                this.node.fs.writeFileSync(
                    "root.json",
                    JSON.stringify(this.root, null, 2),
                    {
                        flag: "w",
                    },
                    (err) => console.log(err)
                );
            }
        }

        write(data, key) {
            this.log(`SET ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.write(data, key);
                }
                if (isQX) {
                    return $prefs.setValueForKey(data, key);
                }
                if (isNode) {
                    this.root[key] = data;
                }
            } else {
                this.cache[key] = data;
            }
            this.persistCache();
        }

        read(key) {
            this.log(`READ ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.read(key);
                }
                if (isQX) {
                    return $prefs.valueForKey(key);
                }
                if (isNode) {
                    return this.root[key];
                }
            } else {
                return this.cache[key];
            }
        }

        delete(key) {
            this.log(`DELETE ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.write(null, key);
                }
                if (isQX) {
                    return $prefs.removeValueForKey(key);
                }
                if (isNode) {
                    delete this.root[key];
                }
            } else {
                delete this.cache[key];
            }
            this.persistCache();
        }

        // notification
        notify(title, subtitle = "", content = "", options = {}) {
            const openURL = options["open-url"];
            const mediaURL = options["media-url"];

            if (isQX) $notify(title, subtitle, content, options);
            if (isSurge) {
                $notification.post(
                    title,
                    subtitle,
                    content + `${mediaURL ? "\n多媒体:" + mediaURL : ""}`,
                    {
                        url: openURL,
                    }
                );
            }
            if (isLoon) {
                let opts = {};
                if (openURL) opts["openUrl"] = openURL;
                if (mediaURL) opts["mediaUrl"] = mediaURL;
                if (JSON.stringify(opts) === "{}") {
                    $notification.post(title, subtitle, content);
                } else {
                    $notification.post(title, subtitle, content, opts);
                }
            }
            if (isNode || isScriptable) {
                const content_ =
                    content +
                    (openURL ? `\n点击跳转: ${openURL}` : "") +
                    (mediaURL ? `\n多媒体: ${mediaURL}` : "");
                if (isJSBox) {
                    const push = require("push");
                    push.schedule({
                        title: title,
                        body: (subtitle ? subtitle + "\n" : "") + content_,
                    });
                } else {
                    console.log(`${title}\n${subtitle}\n${content_}\n\n`);
                }
            }
        }

        // other helper functions
        log(msg) {
            if (this.debug) console.log(`[${this.name}] LOG: ${this.stringify(msg)}`);
        }

        info(msg) {
            console.log(`[${this.name}] INFO: ${this.stringify(msg)}`);
        }

        error(msg) {
            console.log(`[${this.name}] ERROR: ${this.stringify(msg)}`);
        }

        wait(millisec) {
            return new Promise((resolve) => setTimeout(resolve, millisec));
        }

        done(value = {}) {
            if (isQX || isLoon || isSurge) {
                $done(value);
            } else if (isNode && !isJSBox) {
                if (typeof $context !== "undefined") {
                    $context.headers = value.headers;
                    $context.statusCode = value.statusCode;
                    $context.body = value.body;
                }
            }
        }

        stringify(obj_or_str) {
            if (typeof obj_or_str === "string" || obj_or_str instanceof String)
                return obj_or_str;
            else
                try {
                    return JSON.stringify(obj_or_str, null, 2);
                } catch (err) {
                    return "[object Object]";
                }
        }
    })(name, debug);
}
