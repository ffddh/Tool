// ==UserScript==
// @name        Twitter/X(网页版)视频/图片/gif一键下载.[limbopro]
// @name:ja     Twitter/X (Web 版) のビデオ/写真/GIF をワンクリックでダウンロード。[limbopro]
// @name:zh-cn  Twitter/X(网页版)视频/图片/gif一键下载.[limbopro]
// @name:zh-tw  Twitter/X(網頁版)影片/圖片/gif一鍵下載.[limbopro]
// @name:en     Twitter/X(web version)videos/pictures/gif download.[limbopro]
// @name:ko     Twitter/X(웹버전) 동영상/사진/gif 원클릭 다운로드.[limbopro]
// @name:ru     Twitter/X (веб-версия) — загрузка видео/изображений/гифок в один клик.[limbopro]
// @namespace    https://limbopro.com/
// @version      0.1.3.16
// @description Twitter/X(网页版)视频/图片/gif一键下载.[limbopro] / 一键下载推文图片并按用户名进行保存 
// @description:zh-cn  Twitter/X(网页版)视频/图片/gif一键下载.[limbopro] / 一键下载推文图片并按用户名进行保存 
// @description:ja Twitter/X (Web 版) のビデオ/写真/GIF をワンクリックでダウンロード。[limbopro] / ワンクリックでツイート画像をダウンロードし、ユーザー名で保存します
// @description:zh-tw Twitter/X(網頁版)影片/圖片/gif一鍵下載.[limbopro] / 一鍵下載推文圖片並按使用者名稱儲存
// @description:en Twitter/X(web version)videos/pictures/gif download.[limbopro] / Download tweet images with one click and save by username
// @description:ru Twitter/X (веб-версия) — загрузка видео/изображений/гифок в один клик.[limbopro] / Загрузите изображения твитов одним щелчком мыши и сохраните их по имени пользователя.
// @description:ko Twitter/X(웹버전) 동영상/사진/gif 원클릭 다운로드.[limbopro] / 한 번의 클릭으로 트윗 이미지를 다운로드하고 사용자 이름으로 저장
// @author       limbopro
// @license MIT
// @match        https://twitter.com/*
// @match        https://x.com/*
// @match        https://twittervideodownloader.com/*
// @match        https://twittervid.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==
 
/*
@ author: limbopro
@ website: http://limbopro.com/
@ Gmail: service.limbopro.com@gmail.com
@ Github: https://github.com/limbopro
@ X: https://x.com/limboprossr
*/
 
/* (function () { 
'use strict';
*/
 
// 引入全局 CSS
var twdlcss = "span[id^=\"ezoic-pub-ad-placeholder-\"], .ez-sidebar-wall, span[data-ez-ph-id], .ez-sidebar-wall-ad,.ez-sidebar-wall {display:none !important} button.twdl.download_pics:hover {background-color: #f038ff；-webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);-moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);;transition: 0.7s;} .atx {display:none;} .house {z-index:114154 !important; max-width:340px; display:flex; flex-direction:row; flex-wrap:wrap; margin-top:5px;}.help{top:80px !important;/*background:teal;*/} .twdl { z-index:114154 !important; line-height:normal; /*font-size:xx-small;*/ font-size:inherit; text-decoration:none; position:sticky; top:5px; /*text-transform:uppercase;*/ padding:6px 12px; color:white; z-index:114154;} .twittervideodownloader { background:linear-gradient(to bottom, #42a5f5 0%, #1e88e5 100%); box-shadow:inset 0 2px 2px #1976d2;} .twittervid {background:linear-gradient(to bottom, #66BB6A 0%, #43A047 100%); box-shadow:inset 0 2px 2px #388E3C;} .download_pics { /*border-radius:5px 0px 0px 5px; */ border:0px;} .greasyfork {cursor:help; right:295px;background:linear-gradient(rgb(62 53 53) 0%, rgb(31 29 29) 100%);box-shadow:rgb(0 0 0) 0px 2px 2px inset;}"
var newstyle = document.createElement('style')
newstyle.id = 'twdlcss'
newstyle.innerHTML = twdlcss
document.querySelector('head').parentNode.insertBefore(newstyle, document.querySelector('head')) // 载入
 
 
var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
function twdl_div(article, downloaderURL, className, textContent) { // article = article[i]
    let a = document.createElement('a')
    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            //// console.log(x.href);
            a.href = downloaderURL + "#" + x.href;
            //// console.log(a.href)
        }
    })
 
    a.className = className;
    a.target = '_blank';
    a.zIndex = '114154';
    a.textContent = textContent;
    return a;
}
 
function twdl_url(article) {
    var twdl_Kurl = '';
    var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            twdl_Kurl = x.href
        }
    })
    //// console.log('当前推文链接🔗...' + ' ' + twdl_Kurl)
    return twdl_Kurl;
}
 
function iftwnopics_innerText() {
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "该推文内容不存在图片!";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "該推文內容不存在圖片!";
            return textContent;
            break;
        /*
    case 'ja':
        textContent = "このツイートには画像がありません！";
        return textContent;
        break;
        */
        case 'en':
            textContent = "There is no image in this tweet!";
            return textContent;
            break;
        /*
    case 'ru':
        textContent = "В этом твите нет изображения!";
        return textContent;
        break;
        */
        default:
            textContent = "There is no image in this tweet!";
            return textContent;
            break;
    }
}
 
 
function downloader_innerText(x) { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
 
    if (x == '[VID]') {
 
        switch (language) { //
            case 'zh':
                textContent = "通过" + x + "下载视频/动图";
                return textContent;
                break;
            case 'zh-Hant':
                textContent = "透過" + x + "下載影片/動圖";
                return textContent;
                break;
            /*
        case 'ja':
            textContent = "これらのビデオ/写真/アニメーションを" + x + "経由でダウンロードしてください";
            return textContent;
            break;
            */
            case 'en':
                textContent = "Download video/img/gif via " + x;
                return textContent;
                break;
            /*
        case 'ru':
            textContent = "Загрузите эти видео/изображения/анимацию через " + x;
            return textContent;
            break;
            */
            default:
                textContent = "Download video/img/gif via " + x;
                return textContent;
                break;
        }
 
    } else if (x == '[LOADER]') {
 
        switch (language) { //
            case 'zh':
                textContent = "通过" + x + "下载视频";
                return textContent;
                break;
            case 'zh-Hant':
                textContent = "透過" + x + "下載影片";
                return textContent;
                break;
            /*
        case 'ja':
            textContent = x + "経由でビデオをダウンロード";
            return textContent;
            break;
            */
            case 'en':
                textContent = "Download video via " + x;
                return textContent;
                break;
            /*
        case 'ru':
            textContent = "Скачать видео через " + x;
            return textContent;
            break;
            */
            default:
                textContent = "Download video via " + x;
                return textContent;
                break;
        }
    }
 
}
 
function dlpics_innerText() { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "下载图片";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "下載圖片";
            return textContent;
            break;
        /*
    case 'ja':
        textContent = "写真をダウンロードする";
        return textContent;
        break;
        */
        case 'en':
            textContent = 'Download img';
            return textContent;
            break;
        /*
    case 'ru':
        textContent = "Скачать картинки";
        return textContent;
        break;
        */
        default:
            textContent = 'Download img';
            return textContent;
            break;
    }
}
 
 
function promp_innerText() { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "手机端用户：当浏览器提示保存/下载图片时，请尽可能快的点击确认按钮!（在本次会话中，本信息只会出现两次，累计会出现五次，以便你可以很好的了解如何操作下载图片）";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "手機端用戶：當瀏覽器提示儲存/下載圖片時，請盡可能快的點擊確認按鈕!（在本次會話中，本資訊只會出現兩次，累計會出現五次，以便你可以很好的了解如何操作下載圖片）";
            return textContent;
            break;
        case 'en':
            textContent = 'Mobile users: When the browser prompts you to save/download the image, please click the confirmation button as quickly as possible! (In this session, this message will only appear twice, and it will appear five times in total, so that you can Learn how to download images)';
            return textContent;
            break;
        default:
            textContent = 'Mobile users: When the browser prompts you to save/download the image, please click the confirmation button as quickly as possible! (In this session, this message will only appear twice, and it will appear five times in total, so that you can Learn how to download images)';
            return textContent;
            break;
    }
}
 
 
if (localStorage.getItem('clickcount') == '' || localStorage.getItem('clickcount') == null) {
    var twdl_clickCount = 0;
    console.log("twdl_clickCount 设置 为 " + '0')
} else {
    var twdl_clickCount = localStorage.getItem('clickcount');
    console.log("twdl_clickCount 设置 为 " + localStorage.getItem('clickcount'))
}
 
function dlpicsfromURL(imgsrcURL, userName) {
    if (imgsrcURL.length == 0) {
        alert(iftwnopics_innerText())
    } else {
 
        if (navigator.userAgent.toString().toLowerCase().search(/android|iphone|mobile/) !== -1) {
            sessionStorage.setItem('clickcount', twdl_clickCount += 1) // 点击下载图片按钮次数统计
            localStorage.setItem('clickcount', twdl_clickCount) // 点击下载图片按钮次数统计
            if (sessionStorage.getItem('clickcount') < 3 && localStorage.getItem('clickcount') < 5) { // 如果已经提示了两次则之后不会在在本次session提示
                alert(promp_innerText())
            }
        }
 
        // Part of the code is modified from CodeingShare 
        // https://ww4k.com/CodeingShare/donwload_image_difference_domain.html
        // 解决跨域 Canvas 污染问题
 
        var timeloop = 0;
 
        imgsrcURL.forEach((x, index) => {
 
            if (navigator.userAgent.toString().toLowerCase().search(/android|iphone|mobile/) !== -1) { //  如果当前浏览器代理为手机代理
                timeloop = index * 1500 // 则 循环得慢一些
                console.log('Mobile')
            } else {
                timeloop = index * 500
                console.log('Not Mobile')
            }
 
            setTimeout(() => {
                var image = new Image();
                image.setAttribute("crossOrigin", "anonymous");
                image.onload = function () {
                    var canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext("2d");
                    context.drawImage(image, 0, 0, image.width, image.height);
                    var url = canvas.toDataURL("image/png");
                    var a = document.createElement("a");
                    a.download = userName || "photo";
                    a.href = url;
                    if (document.all) {
                        a.click();
                        // console.log('Firefox')
                    } else {
                        var event = new MouseEvent("click");
                        event.initEvent('click', true, true);
                        a.dispatchEvent(event);
                        // console.log('Other browser')
                    }
                };
                image.src = x;
            }, timeloop)
        })
 
    }
}
 
 
function get_imgsURL(article, userName) {
    var url = [];
    article.querySelectorAll('a[class=' + userName + ']').forEach((x) => {
        url.push(x)
    })
    return url;
}
 
function userName(article) {
    var fileName = '';
    var regex_name = new RegExp(/\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
    var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
 
    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            fileName = x.href.replaceAll('https://x.com/', '').replaceAll(regex_name, '')
        }
    })
 
    return fileName;
}
 
/*
const newArr = []; // 创建一个空数组 用来去重
*/
 
function twdl() {
    if (document.querySelectorAll('[data-testid="cellInnerDiv"]')) {
        var article = document.querySelectorAll('[data-testid="cellInnerDiv"]')
        for (let i = 0; i < article.length; i++) { // twittervid
 
            /*
            if (newArr.indexOf(twdl_url(article[i])) === -1) {
                newArr.push(twdl_url(article[i]))
                // console.log(newArr.length)
            } // 往空数组填充每次获取的值
             */
 
            if (article[i].querySelector('.house') == null && (article[i].querySelector('[data-testid="videoPlayer"]') || article[i].querySelectorAll("img[src*='name=']").length >= 1)) { // 如果 article[i] 不包含 .house ，但 article[i] 包含图片或视频，那么创建 .house
                var house = document.createElement('div')
                house.className = 'house'
 
                var vid = twdl_div(article[i], 'https://twittervid.com/', 'twdl twittervid', downloader_innerText('[VID]'))
                var loader_ = twdl_div(article[i], 'https://twittervideodownloader.com/', 'twdl twittervideodownloader', downloader_innerText('[LOADER]'))
                var help = twdl_div(article[i], 'https://greasyfork.org/zh-CN/scripts/478651-twitter-%E7%BD%91%E9%A1%B5%E7%89%88%E5%A4%9A%E8%A7%86%E9%A2%91-gif%E4%B8%8B%E8%BD%BD-limbopro', 'twdl help', 'Need Help?')
 
                var downloader = document.createElement('button')
                downloader.className = 'twdl download_pics'
                downloader.innerText = dlpics_innerText()
 
                article[i].querySelectorAll("img[src*='name=']").forEach((x) => {
                    var a = document.createElement('a')
                    a.href = x.src
                    a.className = "twdl_" + userName(article[i])
                    house.appendChild(a)
                })
 
                var array = [downloader, vid, loader_, help]
 
                array.forEach((x) => {
                    house.appendChild(x)
                })
 
 
                if (article[i].querySelectorAll("div.css-175oi2r.r-12kyg2d")[0] && article[i].querySelector('[data-testid="videoPlayer"]')) { // 推文存在文字图片且有视频的情况下
                    article[i].querySelectorAll("div.css-175oi2r.r-12kyg2d")[0].appendChild(house);
 
                } else if (article[i].querySelectorAll('[dir=auto][lang]')[0] && article[i].querySelector('[data-testid="videoPlayer"]')) {
                    article[i].querySelectorAll('[dir=auto][lang]')[0].appendChild(house);
 
                } else if (article[i].querySelector('[data-testid="videoPlayer"]')) { // 推文没有文字图片仅有视频的情况下
                    article[i].querySelector("[data-testid='videoComponent']").appendChild(house)
 
                } else if (article[i].querySelectorAll('[dir=auto][lang]')[0] && article[i].querySelectorAll("img[src*='name=']").length >= 1) {
                    article[i].querySelectorAll('[dir=auto][lang]')[0].appendChild(house);
 
                } else if (article[i].querySelectorAll("img[src*='name=']").length >= 1 && article[i].querySelectorAll("img")[1] !== null) {
                    article[i].querySelectorAll("div[aria-labelledby]")[0].parentNode.insertBefore(house, article[i].querySelectorAll("div[aria-labelledby]")[0])
                }
 
 
                downloader.addEventListener('click', () => {
                    dlpicsfromURL(get_imgsURL(article[i], "twdl_" + userName(article[i])), userName(article[i]))
                })
 
            } else {
                // console.log(userName(article[i]) + " " + twdl_url(article[i]) + " 啥也没有...")
            }
        }
 
    }
}
 
setInterval(() => {
    twdl()
}, 4000)
 
/* })(); */
 
 
function inDownloaderPage() { // 获取当前网页 url -> 给 input 赋值 -> 点击下载按钮
 
    if (window.location.href.match(/(twittervid\.com)/gi)) {
 
        if (document.querySelector('#tweetUrl') !== null && document.querySelector('#loadVideos') !== null) {
            document.querySelector('#tweetUrl').value = window.location.href.replace('https://twittervid.com/#', '')
            if (document.querySelector('#tweetUrl').value == 'https://twittervid.com/') {
            } else if (document.querySelector('#tweetUrl').value.match(twURL_regex)) {
                document.querySelector('#loadVideos').click()
            }
        }
    }
 
    if (window.location.href.match(/(twittervideodownloader\.com)/gi)) {
        if (document.querySelector('#tweetURL') !== null && document.querySelector('#submitBtn') !== null) {
            document.querySelector('#tweetURL').value = window.location.href.replace('https://twittervideodownloader.com/#', '')
            if (document.querySelector('#tweetURL').value == 'https://twittervideodownloader.com/') {
            } else if (document.querySelector('#tweetUrl').value.match(twURL_regex)) {
                document.querySelector('#submitBtn').click()
            }
        }
    }
 
}
 
if (window.location.href.match(/(twittervid\.com|twittervideodownloader)/gi) !== null) {
    inDownloaderPage()
}