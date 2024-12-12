/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* eslint-disable indent */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventSetInterval = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["debug"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["/^/"],["adsbygoogle"],["innerHTML"],["/0x|sandCheck/"],["a0b"],["daadb"],["/_0x|dtaf/"],["pop"],["detector"],["ads"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["document.getElementById","10000"],["!display"],["afStorage"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["nolive.me",3],["thedigitalfix.com",3],["shemalez.com",5],["tubepornclassic.com",[5,17]],["frprn.com",6],["xsanime.com",7],["javfull.net",7],["f2movies.to",7],["ipacrack.com",7],["king-shoot.io",7],["hulkshare.com",8],["faucetcrypto.com",9],["giveawayoftheday.com",10],["uploadbox.io",11],["megafile.io",11],["myjest.com",12],["4shared.com",13],["programasvirtualespc.net",14],["kimochi.info",14],["sombex.com",14],["forex-trnd.com",14],["vidlii.com",14],["watchtvseries.video",14],["cheatsquad.gg",14],["verteleseriesonline.com",14],["akbardwi.my.id",14],["arabnaar.com",14],["sukidesuost.info",14],["ricettafitness.com",14],["freenote.biz",14],["womenreality.com",14],["portable4pc.com",14],["localizaagencia.com",14],["themes-dl.com",14],["anomize.xyz",14],["casos-aislados.com",14],["freeomovie.to",14],["myviptuto.com",14],["novelasligera.com",14],["hightqualityshop.com",14],["rahim-soft.com",14],["dayoftheweek.org",14],["text2voice.org",14],["lookimg.com",14],["graphicdesignresources.net",14],["veryfiles.com",14],["aemenstore.com",14],["byboe.com",14],["cazzette.com",14],["dataf.pro",14],["hookeaudio.com",14],["jncojeans.com",14],["kiemlua.com",14],["kingsleynyc.com",14],["lucidcam.com",14],["marharo.com",14],["medcpu.com",14],["nguyenvanbao.com",14],["nousdecor.com",14],["pennbookcenter.com",14],["restorbio.com",14],["staaker.com",14],["thegoneapp.com",14],["uebnews.online",14],["necksdesign.com",14],["larvelfaucet.com",14],["quicasting.it",14],["ihaxk.com",14],["iptunnels.com",14],["appsfullversion.com",14],["davidgalaxia.com",14],["anonymous-links.com",14],["planet-streaming1.com",14],["unionmanga.xyz",14],["vviruslove.com",14],["unity3diy.blogspot.com",14],["hakie.net",14],["checkfiletype.com",14],["santoinferninho.com",14],["sociadrive.com",14],["angeloyeo.github.io",14],["csgo-ranks.com",14],["royalkom.com",14],["super-ethanol.com",14],["surf-trx.com",14],["samapkstore.com",14],["shortenbuddy.com",14],["adeth.cc",14],["submitclimb.com",14],["swift4claim.com",14],["best-shopme.com",14],["tw-hkt.blogspot.com",14],["hugo3c.tw",14],["androidtunado.com.br",14],["midiextreme.com",14],["tellygossips.net",14],["newsiqra.com",14],["dota2freaks.com",14],["how2pc.com",14],["weviral.org",14],["alltechnerd.com",14],["shoppinglys.blogspot.com",14],["komiktap.in",14],["adobezii.com",14],["8tm.net",14],["afasiaarchzine.com",14],["getpczone.com",14],["secretsdeepweb.blogspot.com",14],["kiwiexploits.com",14],["freemiumaccounts.net",14],["jaysndees.com",14],["mailocal2.xyz",14],["tqanime.com",14],["devcourseweb.com",14],["anime-saikou.com",14],["donghuanosekai.com",14],["jagoanssh.com",14],["pcso-lottoresults.com",14],["todoseriales1.blogspot.com",14],["cryptslice.com",14],["omgexploits.com",14],["nusantaraproject.my.id",14],["crazyblog.in",14],["short-zero.com",14],["gifans.com",14],["fluttercampus.com",14],["xanimehub.com",14],["goldenmanga.top",14],["bshopme.site",14],["watchdoge.xyz",14],["clk.asia",14],["imperialstudy.com",14],["skincarie.com",14],["fztvseries.mobi",14],["khsm.io",14],["crunchyroll.com",15],["extremereportbot.com",16],["multiup.io",18],["multiup.org",18],["multiup.eu",18],["mangalist.org",19],["javcl.com",19],["gats.io",19],["embedsb.com",19],["freereceivesms.com",19],["plhqtvhay.xyz",19],["live.dragaoconnect.net",19],["techmuzz.com",20],["lecourrier-du-soir.com",22],["zhlednito.cz",23],["girlsofdesire.org",23],["thgss.com",24],["soninow.com",24],["moviemakeronline.com",24],["premid.app",25],["work.ink",27],["007stockchat.com",28],["stockhideout.com",28],["radio.zone",28],["openculture.com",28],["clapway.com",28],["kawarthanow.com",28],["rollstroll.com",28],["dragontea.ink",29],["javsek.net",30],["mavenarts.in",30],["ticketmaster.sg",31],["animedb.in",32],["erofound.com",32],["newscon.org",32],["vrcmods.com",33],["advertisertape.com",34],["gettapeads.com",34],["streamnoads.com",34],["tapeadsenjoyer.com",34],["tapeadvertisement.com",34],["tapeantiads.com",34],["tapeblocker.com",34],["tapelovesads.org",34],["tapenoads.com",34],["tapewithadblock.org",34],["watchadsontape.com",34],["beverfood.com",34],["gamezop.com",35],["laptrinhx.com",36],["sunhope.it",37],["1cloudfile.com",38],["luckydice.net",39],["fastconverter.net",40],["canale.live",41],["molotov.tv",42],["igay69.com",43],["davescomputertips.com",43],["ios.codevn.net",44],["wheelofgold.com",46],["shortlinks.tech",47],["chat.nrj.fr",48],["chat.tchatche.com",49],["dvm360.com",50],["freshplaza.com",51],["hortidaily.com",51],["knowyourmeme.com",52],["businessinsider.com",53]]);

const entitiesMap = new Map([["mylink",4],["my1ink",4],["myl1nk",4],["myli3k",4],["gogoanimetv",7],["streameast",14],["thestreameast",14],["getfreecourses",14],["bg-gledai",14],["link1s",14],["shortzzy",14],["fzm",14],["fzmovies",14],["akwam",14],["videovard",19],["rmcmv",21],["vidsrc",26],["sushiscan",28],["adblockeronstape",34],["adblockplustape",34],["adblockstreamtape",34],["adblockstrtape",34],["adblockstrtech",34],["adblocktape",34],["antiadtape",34],["noblocktape",34],["stapadblockuser",34],["stape",34],["strcloud",34],["streamadblocker",34],["streamadblockplus",34],["streamta",34],["streamtape",34],["streamtapeadblockuser",34],["strtape",34],["strtapeadblock",34],["strtapeadblocker",34],["strtpe",34],["oxy",45]]);

const exceptionsMap = new Map([["oxy.edu",[45]]]);

/******************************************************************************/

function preventSetInterval(
    needleRaw = '',
    delayRaw = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setInterval', needleRaw, delayRaw);
    const needleNot = needleRaw.charAt(0) === '!';
    const reNeedle = safe.patternToRegex(needleNot ? needleRaw.slice(1) : needleRaw);
    const range = new RangeParser(delayRaw);
    proxyApplyFn('setInterval', function(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needleRaw === '' && range.unbound() ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        if ( reNeedle.test(a) !== needleNot && range.test(b) ) {
            callArgs[0] = function(){};
            safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
        }
        return context.reflect();
    });
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

class RangeParser {
    constructor(s) {
        this.not = s.charAt(0) === '!';
        if ( this.not ) { s = s.slice(1); }
        if ( s === '' ) { return; }
        const pos = s.indexOf('-');
        if ( pos !== 0 ) {
            this.min = this.max = parseInt(s, 10) || 0;
        }
        if ( pos !== -1 ) {
            this.max = parseInt(s.slice(1), 10) || Number.MAX_SAFE_INTEGER;
        }
    }
    unbound() {
        return this.min === undefined && this.max === undefined;
    }
    test(v) {
        const n = Math.min(Math.max(Number(v) || 0, 0), Number.MAX_SAFE_INTEGER);
        if ( this.min === this.max ) {
            return (this.min === undefined || n === this.min) !== this.not;
        }
        if ( this.min === undefined ) {
            return (n <= this.max) !== this.not;
        }
        if ( this.max === undefined ) {
            return (n >= this.min) !== this.not;
        }
        return (n >= this.min && n <= this.max) !== this.not;
    }
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { preventSetInterval(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventSetInterval();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
