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

/* jshint esversion:11 */

'use strict';

// ruleset: fra-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"#mywraptest\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".publicite.text-ad.adsbox\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\".AdBox.Ligatus.pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.no-scroll\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\".adsbox.ad-banner:not([style=\\\"height: 5px; width: 5px; position: absolute; top: 0;\\\"]):not(.blocker-tester + .ad-banner)\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads.ad.adsbox.ad-placement.carbon-ads\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body > iframe:not([src])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".site_content\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".sticky-wrapper\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"html > body.hasHabillage\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#advert-bg-top\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\".topad\",\"action\":[\"style\",\"min-height: 0 !important; height: 0 !important; padding: 0 !important;\"]}"],["{\"selector\":\"html.async-hide\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".is-remaining-chicken\",\"action\":[\"style\",\"position: absolute !important; left: -9999px !important;\"]}"],["{\"selector\":\".nb\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"header\",\"action\":[\"style\",\"top: 0 !important;\"]}"],["{\"selector\":\"body .container-ads + *:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"body .container-ads + .header-ariane:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"body .container-ads + .tranche:not(#style_important)\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}","{\"selector\":\"body .container-ads ~ .tranche.section-article:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"html > body:not(#style_important)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".header-space\",\"action\":[\"style\",\"height: 10px !important;\"]}"],["{\"selector\":\".main\",\"action\":[\"style\",\"margin-top: 10px!important;\"]}"],["{\"selector\":\"#wrapper-publicite\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#page-body div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".three-col tr > td > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".inner > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#main-content > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#jSidebarSticky\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"body > #main[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 10px !important;\"]}"],["{\"selector\":\"body.td-ad-background-link\",\"action\":[\"style\",\"cursor: auto!important;\"]}"],["{\"selector\":\"a[href^=\\\"magnet:?\\\"]\",\"action\":[\"style\",\"width: 100%!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px!important; visibility:hidden!important;\"]}"],["{\"selector\":\".preview-tabs-controls li\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"#motherboard\",\"action\":[\"style\",\"top: 30px!important;\"]}"]];

const hostnamesMap = new Map([["marieclaire.fr",0],["lemanip.com",0],["empire-streamz.fr",[0,10]],["empire-stream.net",[0,10]],["ebookdz.com",1],["abcbourse.com",2],["varmatin.com",3],["9docu.org",4],["lesacdechips.com",5],["sante.journaldesfemmes.fr",6],["linternaute.com",6],["lesinrocks.com",7],["qub.ca",8],["tf1.fr",9],["tf1info.fr",9],["empire-anime.com",10],["deco.fr",11],["fourchette-et-bikini.fr",11],["caminteresse.fr",12],["systemed.fr",13],["ooparc.com",14],["letemps.ch",15],["iadfrance.fr",16],["numerama.com",17],["amomama.fr",18],["funradio.fr",19],["rtl2.fr",19],["rtl.fr",19],["parlons-basket.com",20],["europe1.fr",21],["ouest-france.fr",22],["cnews.fr",23],["forumgaming.fr",24],["forumactif.com",24],["forum-airguns.com",25],["neogeo-system.com",26],["ddaynormandy.forumgaming.fr",27],["journaldunet.com",28],["monpetitforfait.com",29],["actu17.fr",30],["torrents9.cc",31],["malekal.com",32],["cityplug.be",33],["igen.fr",34]]);

const entitiesMap = new Map([["empire-streaming",[0,10]]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
