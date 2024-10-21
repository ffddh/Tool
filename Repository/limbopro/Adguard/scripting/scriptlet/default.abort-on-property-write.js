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
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["daCheckManager"],["backgroundBanner"],["displayCache"],["Script_Manager"],["DoodPop"],["app_advert"],["_pop"],["AdBDetected"],["detectAdblock"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["showADBOverlay"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["spycock.com",4],["ausfile.com",[4,50]],["xrivonet.info",4],["sawlive.tv",4],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["mp4upload.com",6],["mitly.us",[6,23]],["shrt10.com",6],["diasfem.com",6],["embedsito.com",6],["mavlecteur.com",6],["playfinder.xyz",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["freemiumaccounts.net",6],["ytanime.tv",6],["videowood.tv",6],["glotorrents.fr-proxy.com",[6,66]],["blackspigot.com",7],["xiaopan.co",7],["parents.at",7],["rmdown.com",8],["xopenload.me",8],["xtapes.to",8],["at.wetter.com",9],["powerthesaurus.org",10],["1qwebplay.xyz",11],["dlhd.so",11],["flstv.online",11],["mmastreams.me",11],["mylivestream.pro",11],["streambtw.com",11],["tennisonline.me",11],["voodc.com",11],["gogoanime.co.in",11],["icelz.to",11],["streamtp1.com",11],["closedjelly.net",11],["compensationcoincide.net",11],["hitsports.pro",11],["sportsonline.so",11],["onloop.pro",11],["anarchy-stream.com",11],["olalivehdplay.ru",11],["pawastreams.info",11],["vidlink.pro",11],["imgadult.com",[12,13]],["imgdrive.net",[12,13]],["imgtaxi.com",[12,13]],["imgwallet.com",[12,13]],["javstream.com",14],["nozomi.la",14],["nudostar.com",14],["slutmesh.net",14],["azel.info",14],["clip-sex.biz",14],["justpicsplease.com",14],["lucagrassetti.com",14],["mangarow.org",14],["mihand.ir",14],["nudecelebsimages.com",14],["overwatchporn.xxx",14],["pornium.net",14],["syosetu.me",14],["xnxxw.net",14],["xxxymovies.com",14],["yurineko.net",14],["tokyomotion.com",14],["hdpornt.com",16],["4tube.com",17],["pornerbros.com",17],["uflash.tv",17],["mp3cut.net",18],["mcfucker.com",19],["taroot-rangi.com",20],["mangoporn.net",21],["realgfporn.com",22],["linkrex.net",22],["alotporn.com",22],["payskip.org",23],["imgdawgknuttz.com",23],["shorterall.com",23],["supergoku.com",23],["descarga.xyz",[23,39]],["ukrainesmodels.com",23],["sexuhot.com",23],["messitv.net",23],["moviewatchonline.com.pk",23],["moviewatch.com.pk",23],["ytms.one",23],["pornstash.in",23],["empflix.com",24],["freeviewmovies.com",25],["badjojo.com",25],["boysfood.com",25],["pornhost.com",25],["sextingforum.net",26],["legionpeliculas.org",[28,39]],["legionprogramas.org",[28,39]],["befap.com",29],["pictoa.com",29],["erome.com",29],["cumlouder.com",30],["chyoa.com",30],["asianxxxvideo.net",30],["holavid.com",31],["tasma.ru",31],["calidadcine.net",32],["leaknud.com",32],["dlhd.sx",33],["crackstreamshd.click",33],["freelivetvon.com",33],["tvpclive.com",33],["worldstreams.click",33],["cnnamador.com",[34,35]],["arlinadzgn.com",36],["idntheme.com",36],["problogbooster.com",36],["pronpic.org",37],["op.gg",38],["televisionlibre.net",39],["pastepvp.org",39],["programasvirtualespc.net",39],["megawarez.org",39],["awdescargas.com",39],["eporner.com",40],["theralphretort.com",41],["seselah.com",41],["bollywoodshaadis.com",41],["practicequiz.com",41],["wapkiz.com",41],["pianokafe.com",41],["apritos.com",41],["bsierad.com",41],["diminimalis.com",41],["eksporimpor.com",41],["jadijuara.com",41],["kicaunews.com",41],["palapanews.com",41],["ridvanmau.com",41],["yeutienganh.com",41],["aalah.me",41],["academiadelmotor.es",41],["aiailah.com",41],["almursi.com",41],["altebwsneno.blogspot.com",41],["ambonkita.com",41],["androidspill.com",41],["aplus.my.id",41],["arrisalah-jakarta.com",41],["babyjimaditya.com",41],["bbyhaber.com",41],["beritabangka.com",41],["beritasulteng.com",41],["bestsellerforaday.com",41],["bintangplus.com",41],["bitco.world",41],["br.nacaodamusica.com",41],["bracontece.com.br",41],["dicariguru.com",41],["fairforexbrokers.com",41],["foguinhogames.net",41],["formasyonhaber.net",41],["fullvoyeur.com",41],["healbot.dpm15.net",41],["igli4.com",41],["indofirmware.site",41],["hagalil.com",41],["javjack.com",41],["latribunadelpaisvasco.com",41],["line-stickers.com",41],["luxurydreamhomes.net",41],["m5g.it",41],["miltonfriedmancores.org",41],["minutolivre.com",41],["oportaln10.com.br",41],["pedroinnecco.com",41],["philippinenmagazin.de",41],["piazzagallura.org",41],["pornflixhd.com",41],["safehomefarm.com",41],["synoniemboek.com",41],["techacrobat.com",41],["elizabeth-mitchell.org",41],["mongri.net",41],["svapo.it",41],["papalah.com",41],["starcoins.ws",41],["pipocamoderna.com.br",41],["space.tribuntekno.com",41],["lampungway.com",41],["coinhub.pw",41],["notiziemusica.it",41],["tecnotutoshd.net",41],["peliculasmx.net",42],["geo.fr",43],["cbc.ca",44],["igg-games.com",46],["studopedia.org",47],["zigforums.com",49],["medeberiyas.com",49],["hotpornfile.org",51],["donnaglamour.it",52],["pelisplus.online",53],["pornvideospass.com",[55,56]],["xnxx-sexfilme.com",57],["svipvids.com",58],["jnovels.com",58],["chd4.com",59],["forum.cstalking.tv",59],["namemc.com",60],["hawtcelebs.com",61],["canadianunderwriter.ca",62],["creativebusybee.com",63],["varmatin.com",63],["syracusefan.com",64],["ohorse.com",65],["freepornhdonlinegay.com",66],["gsm1x.xyz",67],["softwarecrackguru.com",67],["hotgameplus.com",67],["mrdeepfakes.com",[68,69]],["donk69.com",69],["hotdreamsxxx.com",69],["puzzlefry.com",70],["theglobeandmail.com",71],["mtlblog.com",72],["narcity.com",72],["thepiratebay10.org",73],["jizzbunker.com",73],["xxxdan.com",73],["gazetedamga.com.tr",74],["moonquill.com",76],["macrotrends.net",77],["investmentwatchblog.com",77],["myfreeblack.com",78],["mysostech.com",80],["medihelp.life",80],["camchickscaps.com",80],["msguides.com",80],["filesharing.io",81],["dreamdth.com",82],["acefile.co",83],["beautypackaging.com",84],["puhutv.com",85],["oranhightech.com",86],["mad4wheels.com",87],["allporncomic.com",88],["m.viptube.com",89],["kingsofteens.com",90],["godmods.com",91],["mexa.sh",92],["eg-akw.com",92],["khsm.io",92],["xn--mgba7fjn.cc",92],["winit.heatworld.com",94],["checkz.net",95],["shop123.com.tw",96],["boyfriendtv.com",97],["tubev.sex",98],["hentaihaven.xxx",99],["hanime.xxx",99],["doods.pro",100],["ds2play.com",100],["anime7.download",101],["kusonime.com",101],["pak-mcqs.net",102],["techyember.com",103],["remixbass.com",103],["techipop.com",103],["quickimageconverter.com",103],["mastharyana.com",103],["tmail.io",104],["fitdynamos.com",104],["bitzite.com",105],["aiimgvlog.fun",106],["laweducationinfo.com",107],["savemoneyinfo.com",107],["worldaffairinfo.com",107],["godstoryinfo.com",107],["successstoryinfo.com",107],["cxissuegk.com",107],["learnmarketinfo.com",107],["bhugolinfo.com",107],["armypowerinfo.com",107],["rsadnetworkinfo.com",107],["rsinsuranceinfo.com",107],["rsfinanceinfo.com",107],["rsgamer.app",107],["rssoftwareinfo.com",107],["rshostinginfo.com",107],["rseducationinfo.com",107],["phonereviewinfo.com",107],["makeincomeinfo.com",107],["gknutshell.com",107],["vichitrainfo.com",107],["workproductivityinfo.com",107],["hentaifreak.org",109],["animeplanet.cc",110],["th-cam.com",111],["jocooks.com",111],["conservativeus.com",112],["wristreview.com",113],["mc-hacks.net",113],["ubuntudde.com",116],["depvailon.com",117],["gload.to",118],["agrarwetter.net",119],["archpaper.com",120],["welovemanga.one",121],["moviesonlinefree.net",122],["pornkai.com",123],["tubesafari.com",123],["megaflash.xyz",124],["coins-town.com",125],["zedporn.com",126],["diendancauduong.com",[127,128]],["thetimes.co.uk",129],["newscon.org",130],["true-gaming.net",131],["batchkun.com",132],["yify-subtitles.org",133],["tchatche.com",134],["cryptoearns.com",135],["pureleaks.net",136],["wolfstream.tv",137],["starzunion.com",138],["satdl.com",139],["osuskinner.com",140],["osuskins.net",140],["tekkenmods.com",141],["chickenkarts.io",142],["kiddyearner.com",143],["frogogo.ru",144]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,6,145]],["streamp1ay",[4,5,6]],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,5,6]],["povvideo",[4,5,6]],["povvldeo",4],["povw1deo",[4,5,6]],["povwideo",[4,5,6]],["powv1deo",[4,5,6]],["powvibeo",[4,5,6]],["powvideo",[4,5,6]],["powvldeo",[4,5,6]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,28,39]],["pnd",4],["imgrock",4],["hdvid",[4,23,39]],["onvid",[4,39]],["ovid",[4,39]],["vidhd",[4,39]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["file-upload",4],["racaty",4],["movie123",4],["putlocker",[6,8]],["pelisplus",[6,28,39]],["pelisplushd",6],["pelix",[6,28,39]],["atomixhq",6],["pctfenix",6],["pctnew",6],["fembed",6],["mavplay",6],["videobb",6],["shorttey",6],["elitetorrent",6],["estrenosflix",6],["estrenosflux",6],["estrenosgo",6],["tormalayalam",6],["cine-calidad",6],["extratorrents",6],["yts",11],["x1337x",11],["sxyprn",14],["streamhub",14],["klmanga",14],["manga1001",14],["mangaraw",14],["mangarawjp",14],["tube8",15],["perfectgirls",17],["perfektdamen",17],["adcorto",23],["bitporno",23],["rojadirecta",[27,28]],["tarjetarojatvonline",[27,28]],["rojadirectatv",28],["aquipelis",[28,39]],["newpelis",[28,39]],["pelisplay",[28,39]],["1movies",31],["foumovies",31],["downloadming",31],["daddylive",32],["extratorrent",32],["torrentstatus",32],["yts2",32],["y2mate",32],["livetvon",33],["daddylivehd",33],["ciberdvd",39],["pelisgratis",39],["peliculas24",39],["voirfilms",39],["cinetux",39],["thevidhd",39],["allcalidad",39],["yoututosjeff",41],["androidaba",41],["vidcloud",41],["descarga-animex",41],["telecharger-igli4",41],["mexa",[41,93]],["cuevana3",45],["vinaurl",48],["elixx",54],["myegy",66],["thepiratebay",73],["mtsproducoes",75],["notebookcheck",79],["akwam",92],["dood",100],["dooood",100],["movies4u",101],["tomshardware",108],["animepahe",110],["hotscopes",114],["kat",115],["katbay",115],["kickass",115],["kickasshydra",115],["kickasskat",115],["kickass2",115],["kickasstorrents",115],["kat2",115],["kattracker",115],["thekat",115],["thekickass",115],["kickassz",115],["kickasstorrents2",115],["topkickass",115],["kickassgo",115],["kkickass",115],["kkat",115],["kickasst",115],["kick4ss",115],["weloma",121],["manga1000",121],["hdmoviesflix",122],["writedroid",124]]);

const exceptionsMap = new Map([["pingit.com",[4]],["pingit.me",[4]]]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-write', prop);
    const exceptionToken = getExceptionToken();
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            safe.uboLog(logPrefix, 'Aborted');
            throw new ReferenceError(exceptionToken);
        }
    });
}

function getExceptionToken() {
    const token = getRandomToken();
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
    try { abortOnPropertyWrite(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_abortOnPropertyWrite();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyWrite = cloneInto([
            [ '(', uBOL_abortOnPropertyWrite.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyWrite);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_abortOnPropertyWrite;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
