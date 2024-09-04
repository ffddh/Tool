/****************************
支持将QX重写解析至Surge Shadowrocket Loon Stash
说明
原脚本作者@小白脸 脚本修改@chengkongyiban
感谢@xream 提供的replace-Header.js
               echo-response.js
感谢@mieqq 提供的replace-body.js
插件图标用的 @Keikinn 的 StickerOnScreen项目 以及 @Toperlock 的图标库项目，感谢，感谢
宝可梦插件图标游戏 由ChatGPT @chengkongyiban @Toperlock 共同完成 再次感谢@xream佬
***************************/
const isEgern = 'object' == typeof egern;
const isLanceX = 'undefined' !== typeof $native;
if (isEgern || isLanceX){
	$environment = {"language":"zh-Hans","system":"iOS","surge-build":"2806","surge-version":"5.20.0"}
};
const isStashiOS = 'undefined' !== typeof $environment && $environment['stash-version'];
const isSurgeiOS = 'undefined' !== typeof $environment && $environment['surge-version'];
const isShadowrocket = 'undefined' !== typeof $rocket;
const isLooniOS = 'undefined' != typeof $loon;
const iconStatus = $persistentStore.read("启用插件随机图标") ?? "启用";
const iconReplace = $persistentStore.read("替换原始插件图标");
const iconLibrary1 = $persistentStore.read("插件随机图标合集") ?? "Doraemon(100P)";
const iconLibrary2 = iconLibrary1.split("(")[0];
const iconFormat = iconLibrary2.search(/gif/i) == -1 ? ".png" : ".gif";

var pluginPokemonIcon
var pluginPokemonAuthor
var pluginPokemonHomepage

//宝可梦插件图标game
if (isLooniOS && iconLibrary2 == "Pokemon" && iconStatus == "启用"){
var pokemonJsVersion = "1.02";
var pokemonVersion = $persistentStore.read("Pokemon_version") ?? 1.00;
    //初阶宝可梦
var beginnerPokemon = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1199, 1200, 1201, 1202, 1203, 1204];
var cloudPcp = [1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1596,1597,1598,1599,1600,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716];
// 创建宝可梦资料
const pokemonList = [{"name": "波克比","number": "0175","icon": 1001},{"name": "穿山鼠","number": "0027","icon": 1002},{"name": "穿山鼠-阿罗拉的样子","number": "0027_1","icon": 1003},{"name": "六尾","number": "0037","icon": 1004},{"name": "六尾-阿罗拉的样子","number": "0037_1","icon": 1005},{"name": "胖丁","number": "0039","icon": 1006},{"name": "超音蝠","number": "0041","icon": 1007},{"name": "毛球","number": "0048","icon": 1008},{"name": "喵喵","number": "0052","icon": 1009},{"name": "可达鸭","number": "0054","icon": 1010},{"name": "小火马","number": "0077","icon": 1011},{"name": "小火马-伽勒尔的样子","number": "0077_1","icon": 1012},{"name": "呆呆兽","number": "0079","icon": 1013},{"name": "鲤鱼王","number": "0129","icon": 1014},{"name": "臭泥","number": "0088","icon": 1015},{"name": "大岩蛇","number": "0095","icon": 1016},{"name": "卡拉卡拉","number": "0104","icon": 1017},{"name": "瓦斯弹","number": "0109","icon": 1018},{"name": "角金鱼","number": "0118","icon": 1019},{"name": "海星星","number": "0120","icon": 1020},{"name": "飞天螳螂","number": "0123","icon": 1021},{"name": "小果然","number": "0360","icon": 1022},{"name": "伊布","number": "0133","icon": 1100},{"name": "妙蛙种子","number": "0001","icon": 1101},{"name": "杰尼龟","number": "0007","icon": 1102},{"name": "皮丘","number": "0172","icon": 1103},{"name": "菊草叶","number": "0152","icon": 1104},{"name": "独角虫","number": "0013","icon": 1105},{"name": "波波","number": "0016","icon": 1106},{"name": "凯西","number": "0063","icon": 1107},{"name": "喇叭芽","number": "0069","icon": 1108},{"name": "鬼斯","number": "0092","icon": 1109},{"name": "拉鲁拉丝","number": "0280","icon": 1110},{"name": "绿毛虫","number": "0010","icon": 1199},{"name": "小火龙","number": "0004","icon": 1200},{"name": "拉普拉斯","number": "0131","icon": 1201},{"name": "大葱鸭","number": "0083","icon": 1202},{"name": "负电拍拍","number": "0312","icon": 1203},{"name": "正电拍拍","number": "0311","icon": 1204},{"name": "波克基古","number": "0176","icon": 1301},{"name": "穿山王","number": "0028","icon": 1302},{"name": "穿山王-阿罗拉的样子","number": "0028_1","icon": 1303},{"name": "九尾","number": "0038","icon": 1304},{"name": "九尾-阿罗拉的样子","number": "0038_1","icon": 1305},{"name": "胖可丁","number": "0040","icon": 1306},{"name": "大嘴蝠","number": "0042","icon": 1307},{"name": "摩鲁蛾","number": "0049","icon": 1308},{"name": "猫老大","number": "0053","icon": 1309},{"name": "哥达鸭","number": "0055","icon": 1310},{"name": "烈焰马","number": "0078","icon": 1311},{"name": "烈焰马-伽勒尔的样子","number": "0078_1","icon": 1312},{"name": "呆壳兽","number": "0080","icon": 1313},{"name": "暴鲤龙","number": "0130","icon": 1314},{"name": "臭臭泥","number": "0089","icon": 1315},{"name": "大钢蛇","number": "0208","icon": 1316},{"name": "嘎啦嘎啦","number": "0105","icon": 1317},{"name": "双弹瓦斯","number": "0110","icon": 1318},{"name": "金鱼王","number": "0119","icon": 1319},{"name": "宝石海星","number": "0121","icon": 1320},{"name": "巨钳螳螂","number": "0212","icon": 1321},{"name": "果然翁","number": "0202","icon": 1322},{"name": "水伊布","number": "0134","icon": 1393},{"name": "雷伊布","number": "0135","icon": 1394},{"name": "火伊布","number": "0136","icon": 1395},{"name": "太阳伊布","number": "0196","icon": 1396},{"name": "月亮伊布","number": "0197","icon": 1397},{"name": "叶伊布","number": "0470","icon": 1398},{"name": "冰伊布","number": "0471","icon": 1399},{"name": "仙子伊布","number": "0700","icon": 1400},{"name": "妙蛙草","number": "0002","icon": 1401},{"name": "卡咪龟","number": "0008","icon": 1402},{"name": "皮卡丘","number": "0025","icon": 1403},{"name": "月桂叶","number": "0153","icon": 1404},{"name": "铁壳蛹","number": "0014","icon": 1405},{"name": "比比鸟","number": "0017","icon": 1406},{"name": "勇基拉","number": "0064","icon": 1407},{"name": "口呆花","number": "0070","icon": 1408},{"name": "鬼斯通","number": "0093","icon": 1409},{"name": "奇鲁莉安","number": "0281","icon": 1410},{"name": "铁甲蛹","number": "0011","icon": 1499},{"name": "火恐龙","number": "0005","icon": 1500},{"name": "妙蛙花","number": "0003","icon": 1501},{"name": "水箭龟","number": "0009","icon": 1502},{"name": "雷丘","number": "0026","icon": 1503},{"name": "大竺葵","number": "0154","icon": 1504},{"name": "超级大针蜂","number": "0015","icon": 1505},{"name": "大比鸟","number": "0018","icon": 1506},{"name": "胡地","number": "0065","icon": 1507},{"name": "大食花","number": "0071","icon": 1508},{"name": "耿鬼","number": "0094","icon": 1509},{"name": "沙奈朵","number": "0282","icon": 1510},{"name": "巴大蝶","number": "0012","icon": 1596},{"name": "巴大蝶-超级巨化","number": "0012_1","icon": 1597},{"name": "喷火龙","number": "0006","icon": 1598},{"name": "超级喷火龙X","number": "0006_1","icon": 1599},{"name": "超级喷火龙Y","number": "0006_2","icon": 1600},{"name": "梦幻","number": "0151","icon": 1701},{"name": "超梦","number": "0150","icon": 1702},{"name": "急冻鸟","number": "0144","icon": 1703},{"name": "闪电鸟","number": "0145","icon": 1704},{"name": "火焰鸟","number": "0146","icon": 1705},{"name": "盔甲鸟","number": "0227","icon": 1706},{"name": "雷公","number": "0243","icon": 1707},{"name": "炎帝","number": "0244","icon": 1708},{"name": "水君","number": "0245","icon": 1709},{"name": "洛奇亚","number": "0249","icon": 1710},{"name": "凤王","number": "0250","icon": 1711},{"name": "盖欧卡","number": "0382","icon": 1712},{"name": "固拉多","number": "0383","icon": 1713},{"name": "帕路奇犽","number": "0484","icon": 1714},{"name": "帝牙卢卡","number": "0483","icon": 1715},{"name": "烈空坐","number": "0384","icon": 1716}];

var pokemonPBUrl = "https://www.pokemon.cn/play/pokedex/";

//玩家已解锁的宝可梦卡池
var pokemonCdp = [];

//抽卡记录
var count = {};

//读取卡池
if ($persistentStore.read("Pokemon_card_pool") == null || $persistentStore.read("Pokemon_card_pool") == ""){
	pokemonCdp = beginnerPokemon;
	 $persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool")
}else{
    pokemonCdp = JSON.parse($persistentStore.read("Pokemon_card_pool"))
    if (pokemonJsVersion * 1 > pokemonVersion * 1){
	var filteredPokemonCdp = pokemonCdp.filter(function (pokemon) {
  return pokemon >= 1301 && pokemon <= 1800 && cloudPcp.includes(pokemon);
});
pokemonCdp = beginnerPokemon.concat(filteredPokemonCdp);
$persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");

count = JSON.parse($persistentStore.read("Pokemon_count"));
for (var key in count) {
  if (!pokemonCdp.includes(parseInt(key))) {
    delete count[key];
  }
};
$persistentStore.write(JSON.stringify(count), "Pokemon_count");

$persistentStore.write(pokemonJsVersion, "Pokemon_version");
}
};

//抽卡并记录抽卡数据
if ($persistentStore.read("Pokemon_count") == null || $persistentStore.read("Pokemon_count") == ""){
    var result = getArrayItems(pokemonCdp, 1);
    var num = result[0];
    count[num] = (count[num] || 0) + 1;
$persistentStore.write(JSON.stringify(count), "Pokemon_count");
	var pokemonInfo = getPokemonByIcon(result[0]);
    pluginPokemonIcon = "https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/Pokemon/Pokemon-" + result + ".png";
	pluginPokemonAuthor = "#!author=" + pokemonInfo.name;
	pluginPokemonHomepage = "#!homepage=" + pokemonPBUrl + pokemonInfo.number;
}else{
	$persistentStore.read("Pokemon_count")
	count = JSON.parse($persistentStore.read("Pokemon_count"))
	var result = getArrayItems(pokemonCdp, 1);
    var num = result[0];
    count[num] = (count[num] || 0) + 1;
	$persistentStore.write(JSON.stringify(count), "Pokemon_count")
	var pokemonInfo = getPokemonByIcon(result[0]);
    pluginPokemonIcon = "https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/Pokemon/Pokemon-" + result + ".png";
	pluginPokemonAuthor = "#!author=" + pokemonInfo.name;
	pluginPokemonHomepage = "#!homepage=" + pokemonPBUrl + pokemonInfo.number;
};


// 当初阶宝可梦到了一定数量时解锁其一阶形态
for (var index in pokemonCdp) {
    var num = pokemonCdp[index];
    if (count[num] >= 30 && (parseInt(num) <= 1022 || (parseInt(num) >= 1101 && parseInt(num) <= 1110) || parseInt(num) ==1199 || parseInt(num) == 1200)) {
        var evolvedNum = parseInt(num) + 300;
        if (!pokemonCdp.includes(evolvedNum)) {
            pokemonCdp.push(evolvedNum);
            $persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
						
						var pokemonInfo = getPokemonByIcon(evolvedNum);
						
            $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "当前已解锁" + pokemonCdp.length + "只宝可梦",pokemonPBUrl + pokemonInfo.number);
        }
    }
};


// 当一阶宝可梦到了一定数量时解锁其二阶形态
for (var index in pokemonCdp) {
    var num = pokemonCdp[index];
    if (count[num] >= 50 && (parseInt(num) >= 1401 && parseInt(num) <= 1410)) {
        var evolvedNum = parseInt(num) + 100;
        if (!pokemonCdp.includes(evolvedNum)) {
            pokemonCdp.push(evolvedNum);
            $persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
						
						var pokemonInfo = getPokemonByIcon(evolvedNum);
						
            $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "当前已解锁" + pokemonCdp.length + "只宝可梦",pokemonPBUrl + pokemonInfo.number);
        }
    }
};

// 巴大蝶
for (var index in pokemonCdp) {
  var num = pokemonCdp[index];
  if (count[num] >= 50 && parseInt(num) == 1499) {
    if (!pokemonCdp.includes(1596)) {
			var unlockedPokemon = [];
      pokemonCdp.push(1596,1597);
			unlockedPokemon.push(1596,1597);
$persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
      unlockedPokemon.forEach(pokemonNumber => {
        var pokemonInfo = getPokemonByIcon(pokemonNumber);
        if (pokemonInfo !== null) {
          $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "当前已解锁" + pokemonCdp.length + "只宝可梦",  pokemonPBUrl + pokemonInfo.number );
        }
      });
    }
  }
}


// 火恐龙
for (var index in pokemonCdp) {
  var num = pokemonCdp[index];
  if (count[num] >= 50 && parseInt(num) == 1500) {
    if (!pokemonCdp.includes(1598)) {
			var unlockedPokemon = [];
      pokemonCdp.push(1598,1599,1600);
			unlockedPokemon.push(1598,1599,1600);
$persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
      unlockedPokemon.forEach(pokemonNumber => {
        var pokemonInfo = getPokemonByIcon(pokemonNumber);
        if (pokemonInfo !== null) {
          $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "当前已解锁" + pokemonCdp.length + "只宝可梦",  pokemonPBUrl + pokemonInfo.number );
        }
      });
    }
  }
}


//伊布
for (var index in pokemonCdp) {
  var num = pokemonCdp[index];
  if (count[num] >= 30 && parseInt(num) == 1100) {
    if (!pokemonCdp.includes(1393)) {
			var unlockedPokemon = [];
      pokemonCdp.push(1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400);
			unlockedPokemon.push(1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400);
$persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
      unlockedPokemon.forEach(pokemonNumber => {
        var pokemonInfo = getPokemonByIcon(pokemonNumber);
        if (pokemonInfo !== null) {
          $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "当前已解锁" + pokemonCdp.length + "只宝可梦",  pokemonPBUrl + pokemonInfo.number );
        }
      });
    }
  }
}

// 当卡池中的宝可梦数量达到96只，并且每只宝可梦都出现了100次以上时，解锁1701到1716编号的宝可梦
if (pokemonCdp.length >= 96 && pokemonCdp.length < 100 && Object.values(count).every(count => count >= 100)) {
  var unlockedPokemon = [];

  for (var i = 1701; i <= 1716; i++) {
    if (!pokemonCdp.includes(i)) {
      pokemonCdp.push(i);
      unlockedPokemon.push(i);
    }
  }

  unlockedPokemon.forEach(pokemonNumber => {
    var pokemonInfo = getPokemonByIcon(pokemonNumber);
    $notification.post("恭喜您解锁了新的宝可梦", pokemonInfo.name, "您已解锁全部112只宝可梦",  pokemonPBUrl + pokemonInfo.number );
  });
 $persistentStore.write(JSON.stringify(pokemonCdp), "Pokemon_card_pool");
}

function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
        if (temp_array.length > 0) {
            var arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
};

function getPokemonByIcon(icon) {
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].icon === icon) {
      return {
        name: pokemonList[i].name,
        number: pokemonList[i].number
      };
    }
  }
  return null;
}

}//宝可梦game

var jsctype
if (isStashiOS){
    jsctype = "stash";
}else if (isSurgeiOS){
    jsctype = "surge";
}else if (isShadowrocket){
    jsctype = "shadowrocket";
}else if (isLooniOS){
    jsctype = "loon";
}else{jsctype = "";};
var name = "";
var desc = "";
var req
var urlArg
if (isLooniOS || isSurgeiOS || isShadowrocket){
    req = $request.url.replace(/qx$|qx\?.*/,'');
    if ($request.url.indexOf("qx?") != -1){
        urlArg = "?" + $request.url.split("qx?")[1];
    }else{urlArg = ""};
    
}else if (isStashiOS){
    req = $request.url.replace(/qx\.stoverride$|qx\.stoverride\?.*/,'');
    if ($request.url.indexOf("qx.stoverride?") != -1){
        urlArg = "?" + $request.url.split("qx.stoverride?")[1];
    }else{urlArg = ""};
};
var rewriteName = req.substring(req.lastIndexOf('/') + 1).split('.')[0];
//获取参数
var nName = urlArg.search(/\?n=|&n=/) != -1 ? (urlArg.split(/\?n=|&n=/)[1].split("&")[0].split("+")) : null;
var Pin0 = urlArg.search(/\?y=|&y=/) != -1 ? (urlArg.split(/\?y=|&y=/)[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = urlArg.search(/\?x=|&x=/) != -1 ? (urlArg.split(/\?x=|&x=/)[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var hnAdd = urlArg.search(/\?hnadd=|&hnadd=/) != -1 ? (urlArg.split(/\?hnadd=|&hnadd=/)[1].split("&")[0].replace(/%20/g,"").split(",")) : null;
var hnDel = urlArg.search(/\?hndel=|&hndel=/) != -1 ? (urlArg.split(/\?hndel=|&hndel=/)[1].split("&")[0].replace(/%20/g,"").split(",")) : null;
var jsConverter = urlArg.search(/\?jsc=|&jsc=/) != -1 ? (urlArg.split(/\?jsc=|&jsc=/)[1].split("&")[0].split("+")) : null;
var jsConverter2 = urlArg.search(/\?jsc2=|&jsc2=/) != -1 ? (urlArg.split(/\?jsc2=|&jsc2=/)[1].split("&")[0].split("+")) : null;
var delNoteSc = urlArg.search(/\?del=|&del=/) != -1 ? true : false;
var nCron = urlArg.search(/\?cron=|&cron=/) != -1 ? (urlArg.split(/\?cron=|&cron=/)[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var nCronExp = urlArg.search(/\?cronexp=|&cronexp=/) != -1 ? (urlArg.split(/\?cronexp=|&cronexp=/)[1].split("&")[0].replace(/\./g," ").split("+")).map(decodeURIComponent) : null;
var icon = "";
var cachExp = urlArg.search(/\?cachexp=|&cachexp=/) != -1 ? (urlArg.split(/\?cachexp=|&cachexp=/)[1].split("&")[0]) : null;

//缓存有效期相关
var currentTime = new Date();
var seconds = Math.floor(currentTime.getTime() / 1000); // 将毫秒转换为秒
var boxjsSetExp = $persistentStore.read("Parser_cache_exp") ?? "1";
//设置有效期时间
var expirationTime
if (cachExp != null){
  expirationTime = cachExp * 1 * 60 * 60;
}else{
  expirationTime = boxjsSetExp * 1 * 60 * 60;
};
//console.log(expirationTime);
var nCache = [{"url":"","body":"","time":""}];
var oCache = $persistentStore.read("parser_cache");
//检查是否有缓存
if (oCache != "" && oCache != null){
  oCache = JSON.parse(oCache);
}else{oCache = null;};

//修改名字和简介
if (nName === null){
	name = rewriteName;
    desc = name;
}else{
	name = nName[0] != "" ? nName[0] : rewriteName;
	desc = nName[1] != undefined ? nName[1] : name;
};
if (isShadowrocket || isLooniOS ||isSurgeiOS){
	name = "#!name=" + decodeURIComponent(name);
	desc = "#!desc=" + decodeURIComponent(desc);
}else if (isStashiOS){
	name = 'name: ' + '"' + decodeURIComponent(name) + '"';
	desc = 'desc: ' + '"' + decodeURIComponent(desc) + '"';
};
let npluginDesc = name + "\n" + desc;

//随机图标开关，不传入参数默认为开
if(isLooniOS && iconStatus == "启用" && iconLibrary2 != "Pokemon"){
	const stickerStartNum = 1001;
const stickerSum = iconLibrary1.split("(")[1].split("P")[0];
let randomStickerNum = parseInt(stickerStartNum + Math.random() * stickerSum).toString();
   icon = "#!icon=" + "https://github.com/Toperlock/Quantumult/raw/main/icon/" + iconLibrary2 + "/" + iconLibrary2 + "-" + randomStickerNum + iconFormat;
}else if (isLooniOS && iconStatus == "启用" && iconLibrary2 == "Pokemon"){
    icon = "#!icon=" + pluginPokemonIcon;
};
const pluginIcon = icon;
console.log("插件图标：" + pluginIcon);

!(async () => {
  let body
  
  if (oCache == null){
    //console.log("一个缓存也没有")
  body = await http(req);
  nCache[0].url = req;
  nCache[0].body = body;
  nCache[0].time = seconds;
  $persistentStore.write(JSON.stringify(nCache), 'parser_cache');
  }else{
    //删除大于一天的缓存防止缓存越来越大
    oCache = oCache.filter(obj => {
  return seconds - obj.time < 86400 ;
});
$persistentStore.write(JSON.stringify(oCache), 'parser_cache');

 if (!oCache.some(obj => obj.url === req)){
     //console.log("有缓存但是没有这个URL的")
  body = await http(req);
  nCache[0].url = req;
  nCache[0].body = body;
  nCache[0].time = seconds;
  var mergedCache = oCache.concat(nCache);
$persistentStore.write(JSON.stringify(mergedCache), 'parser_cache');
  }else if (oCache.some(obj => obj.url === req)){
    const objIndex = oCache.findIndex(obj => obj.url === req);
    if (seconds - oCache[objIndex].time > expirationTime){
      //console.log("有缓存且有url,但是过期了")
  body = await http(req);
  oCache[objIndex].body = body;
  oCache[objIndex].time = seconds;
$persistentStore.write(JSON.stringify(oCache), 'parser_cache');
    }else{
      //console.log("有缓存且有url且没过期")
    if (oCache[objIndex].body == null || oCache[objIndex].body == ""){
        //console.log("但是body为null")
        body = await http(req);
        oCache[objIndex].body = body;
        oCache[objIndex].time = seconds;        $persistentStore.write(JSON.stringify(oCache), "parser_cache");
    }else{
        //console.log("获取到缓存body")
        body = oCache[objIndex].body;
    }
      };
  };
};

//判断是否断网
if(body == null || body == ""){if(isSurgeiOS || isStashiOS){
    console.log("QX转换：未获取到body的链接为" + $request.url)
	$notification.post("QX转换：未获取到body","请检查网络及节点是否畅通\n" + "源链接为" + $request.url,"认为是bug?点击通知反馈",{url:"https://t.me/zhangpeifu"})
 $done({ response: { status: 404 ,body:{} } });}else if(isLooniOS || isShadowrocket){
    console.log("QX转换：未获取到body的链接为" + $request.url)
    $notification.post("QX转换：未获取到body","请检查网络及节点是否畅通\n" + "源链接为" + $request.url,"认为是bug?点击通知反馈","https://t.me/zhangpeifu")
 $done({ response: { status: 404 ,body:{} } });
}//识别客户端通知
}else{//以下开始重写及脚本转换


if (body.match(/\/\*+\n[\s\S]*\n\*+\/\n/)){
body = body.replace(/[\s\S]*(\/\*+\n[\s\S]*\n\*+\/\n)[\s\S]*/,"$1").match(/[^\r\n]+/g);
}else{
    body = body.match(/[^\r\n]+/g);};
    
let pluginDesc = [];
let httpFrame = "";
let URLRewrite = [];
let script = [];
let MapLocal = [];
let MITM = "";
let cron = []; 
let providers = [];  
let others = [];       //不支持的内容


let scname = "";       //脚本名
let js = "";           //脚本链接
let sctype = "";       //脚本类型
let ptn = "";          //正则
let rebody = "";       //是否需要body
let size = "";         //允许最大body大小
let proto = "";        //是否开启binary-body-mode
let cronExp = "";      //cron表达式
let croName = "";      //cron任务名
let cronJs = "";       //cron脚本链接
let rejectType = "";   //重写reject类型
let urlInNum = "";     //重写中"url"字样出现的位置
let reHdType = "";     //request|response-header
let reHdPtn = "";      //re-header 正则
let reHdArg1 = "";     //用以匹配的headers
let reHdArg2 = "";     //替换
let arg = "";          //echo-response 返回内容
let mockPtn = "";      //echo-res转mock 正则
let dataCon = "";      //echo-res转mock 返回内容
let reBdType = "";     //request|response-body
let reBdPtn = "";      //re-header 正则
let reBdArg1 = "";     //用以匹配的headers
let reBdArg2 = "";     //替换


body.forEach((x, y, z) => {
	x = x.replace(/^ *(#|;|\/\/)/,'#').replace(/\x20.+url-and-header\x20/,' url ').replace(/\x20+url\x20+/," url ").replace(/^hostname\x20*=/,"hostname=").replace(/(^[^#].+)\x20+\/\/.+/,"$1");
//去掉注释
if (Pin0 != null)	{
	for (let i=0; i < Pin0.length; i++) {
  const elem = Pin0[i];
	if (x.indexOf(elem) != -1){
		x = x.replace(/^#/,"")
	}else{};
};//循环结束
}else{};//去掉注释结束

//增加注释
if (Pout0 != null){
	for (let i=0; i < Pout0.length; i++) {
  const elem = Pout0[i];
	if (x.indexOf(elem) != -1 && x.search(/^hostname=/) == -1){
		x = "#" + x;
	}else{};
};//循环结束
}else{};//增加注释结束

//添加主机名
if (hnAdd != null){
	if (x.search(/^hostname=/) != -1){
		x = x.replace(/\x20/g,"").replace(/(.+)/,`$1,${hnAdd}`).replace(/,{2,}/g,",");
	}else{};
}else{};//添加主机名结束

//删除主机名
if (hnDel != null && x.search(/^hostname=/) != -1){
    x = x.replace(/\x20/g,"").replace(/^hostname=/,"").replace(/%.*%/,"").replace(/,{2,}/g,",").split(",");
	for (let i=0; i < hnDel.length; i++) {
  const elem = hnDel[i];
if (x.indexOf(elem) != -1){
  let hnInNum = x.indexOf(elem);
  delete x[hnInNum];
}else{};
  };//循环结束
x = "hostname=" + x
}else{};//删除主机名结束

//开启脚本转换
if (jsConverter != null)	{
	for (let i=0; i < jsConverter.length; i++) {
  const elem = jsConverter[i];
	if (x.indexOf(elem) != -1){
		x = x.replace(/\x20(https?|ftp|file)(:\/\/.+\.js)/g,` $1$2_script-converter-${jsctype}.js`);
	}else{};
};//循环结束
}else{};//开启脚本转换结束

//开启脚本转换2
if (jsConverter2 != null)	{
	for (let i=0; i < jsConverter2.length; i++) {
  const elem = jsConverter2[i];
	if (x.indexOf(elem) != -1){
        jsctype = jsctype.toUpperCase();
		x = x.replace(/\x20(https?|ftp|file)(:\/\/.+\.js)/g,` $1$2_script-converter-${jsctype}.js`);
	}else{};
};//循环结束
}else{};//开启脚本转换2结束


//剔除已注释重写
if (delNoteSc === true && x.match(/^#/) && x.indexOf("#!") == -1){
		x = "";
};//剔除已注释重写结束

	let type = x.match(
		/^#!|\x20url\x20script-|\x20url\x20reject$|\x20url\x20reject-|\x20echo-response\x20|\-header\x20|^hostname| url 30|\x20(request|response)-body|[^\s]+ [^u\s]+ [^\s]+ [^\s]+ [^\s]+ ([^\s]+ )?(https?|ftp|file)/
	)?.[0];
//判断注释
if (isLooniOS || isSurgeiOS || isShadowrocket){
	
	if (x.match(/^[^#]/)){
	var noteK = "";
	}else{
	var noteK = "#";
	};
}else if (isStashiOS){
	if (x.match(/^[^#]/)){
	var noteKn8 = "\n        ";
	var noteKn6 = "\n      ";
	var noteKn4 = "\n    ";
	var noteK4 = "    ";
	var noteK2 = "  ";
	}else{
	var noteKn8 = "\n#        ";
	var noteKn6 = "\n#      ";
	var noteKn4 = "\n#    ";
	var noteK4 = "#    ";
	var noteK2 = "#  ";
	};
};//判断注释结束

	if (type) {
		switch (type) {
//简介            
			case "#!":
               if (isStashiOS){
               x = x.replace(/^#! *(name|desc) *= *(.*)/,'$1: "$2"');
            
            if (nName != null){
                x = x.replace(/^name:.*/,name).replace(/^desc:.*/,desc);
            };
            pluginDesc.push(x);
            };
            
			if (isLooniOS && iconStatus == "启用" && iconLibrary2 == "Pokemon"){
				if (nName != null){
                x = x.replace(/^#!name *=.*/,name).replace(/^#!desc *=.*/,desc);};
            if (iconReplace == "启用"){
                x = x.replace(/^#!icon *=.*/,pluginIcon);
            };
			x = x.replace(/^(#!author *=).*/i,pluginPokemonAuthor)
			x = x.replace(/^(#!homepage *=).*/i,pluginPokemonHomepage)
            pluginDesc.push(x);
				
			}else if (isLooniOS || isSurgeiOS || isShadowrocket){
            if (nName != null){
                x = x.replace(/^#!name *=.*/,name).replace(/^#!desc *=.*/,desc);};
            if (iconReplace == "启用"){
                x = x.replace(/^#!icon *=.*/,pluginIcon);
            };
            pluginDesc.push(x);
            };
            
            break;
            
			case " url script-":
//脚本

				sctype = x.match(' script-response') ? 'response' : 'request';
				
				urlInNum = x.replace(/\x20{2,}/g," ").split(" ").indexOf("url");
				
				ptn = x.replace(/\x20{2,}/g," ").split(" ")[urlInNum - 1].replace(/^#/,"");

				if (isSurgeiOS){
					ptn = ptn.replace(/(.+,.+)/,'"$1"');};

				js = x.replace(/\x20{2,}/g," ").split(" ")[urlInNum + 2];
                
				rebody = x.match(/\x20script[^\s]*(-body|-analyze)/) ? ', requires-body=true' : '';
				
				size = x.match(/\x20script[^\s]*(-body|-analyze)/) ? ', max-size=3145728' : '';
				
				proto = js.match(/proto\.js/i) ? ', binary-body-mode=true' : '';
                
                if (isStashiOS){
					
				rebody = x.match(/\x20script[^\s]*(-body|-analyze)/) ? 'require-body: true' : '';
				
				size = x.match(/\x20script[^\s]*(-body|-analyze)/) ? 'max-size: 3145728' : '';
				
				proto = js.match(/proto\.js/i) ? 'binary-mode: true' : '';
				};
				
				scname = js.substring(js.lastIndexOf('/') + 1, js.lastIndexOf('.') );
				
				if (isLooniOS){			
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
					script.push(
						`${noteK}http-${sctype} ${ptn} script-path=${js}${rebody}${proto}, timeout=60 ,tag=${scname}_${y}`);
				}else if (isSurgeiOS || isShadowrocket){			
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
					script.push(
						`${noteK}${scname}_${y} = type=http-${sctype}, pattern=${ptn}${rebody}${size}${proto}, script-path=${js}, timeout=60, script-update-interval=0`);
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && script.push("    " + z[y - 1]);
					
				script.push(
						`${noteK4}- match: ${ptn}${noteKn6}name: ${scname}_${y}${noteKn6}type: ${sctype}${noteKn6}timeout: 30${noteKn6}${rebody}${noteKn6}${size}${noteKn6}${proto}`
				);
				providers.push(
						`${noteK2}${scname}_${y}:${noteKn4}url: ${js}${noteKn4}interval: 86400`);
				};
				
				break;
				
//reject-

			case " url reject-":
				
				if (isShadowrocket || isLooniOS){
				z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
				URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.*?)\x20url\x20(reject-200|reject-img|reject-dict|reject-array)/, `${noteK}$2 - $3`));
				}else if(isSurgeiOS){
					z[y - 1]?.match(/^#/) && MapLocal.push(z[y - 1]);
                    
				if (x.match(/dict$/)){
					rejectType = "https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
				}else if (x.match(/array$/)){
					rejectType = "https://raw.githubusercontent.com/mieqq/mieqq/master/reject-array.json"
				}else if (x.match(/200$/)){
					rejectType = "https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"
				}else if (x.match(/img$/)){
					rejectType = "https://raw.githubusercontent.com/mieqq/mieqq/master/reject-img.gif"
				};
				MapLocal.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.+?)\x20url\x20reject-.+/, `${noteK}$2 data="${rejectType}"`));	
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && URLRewrite.push("    " + z[y - 1]);
				URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.*?)\x20url\x20(reject-200|reject-img|reject-dict|reject-array)/, `${noteK4}- >-${noteKn6}$2 - $3`));
				};
				break;
				
				case " url reject":
                
				if (isSurgeiOS || isShadowrocket || isLooniOS){
				z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
				
				URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.+?)\x20url\x20reject$/, `${noteK}$2 - reject`));
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && URLRewrite.push("    " + z[y - 1]);
				
				URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.+?)\x20url\x20reject$/, `${noteK4}- >-${noteKn6}$2 - reject`));
				}; 
				break;
				
//(request|response)-header
			case "-header ":
				
				reHdType = x.match(' response-header ') ? 'response' : 'request';
				
				reHdPtn = x.replace(/\x20{2,}/g," ").split(" url re")[0].replace(/^#/,"");
				if (isSurgeiOS){
					reHdPtn = reHdPtn.replace(/(.+,.+)/,'"$1"');};
				
				reHdArg1 = x.split(" " + reHdType + "-header ")[1];
				
				reHdArg2 = x.split(" " + reHdType + "-header ")[2];
				
				if (isLooniOS){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				script.push(`${noteK}http-${reHdType} ${reHdPtn} script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/replace-header/index.js, timeout=60, tag=replaceHeader_${y}, argument="${reHdArg1}->${reHdArg2}"`);				
				}else if (isSurgeiOS || isShadowrocket){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				script.push(`${noteK}replaceHeader_${y} = type=http-${reHdType}, pattern=${reHdPtn}, script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/replace-header/index.js, timeout=60, argument="${reHdArg1}->${reHdArg2}"`);
				
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && script.push("    " + z[y - 1]);
				script.push(`${noteK4}- match: ${reHdPtn}${noteKn6}name: replaceHeader_${y}${noteKn6}type: ${reHdType}${noteKn6}timeout: 30${noteKn6}argument: |-${noteKn8}${reHdArg1}->${reHdArg2}`);
				providers.push(`${noteK2}replaceHeader_${y}:${noteKn4}url: https://raw.githubusercontent.com/xream/scripts/main/surge/modules/replace-header/index.js${noteKn4}interval: 86400`	);				
				};
				break;
				
			case " echo-response ":
			
				arg = x.split(" echo-response ")[2];
			
			if(/^(https?|ftp|file):\/\/.*/.test(arg)){
				
				urlInNum = x.replace(/\x20{2,}/g," ").split(" ").indexOf("url");
				
				ptn = x.replace(/\x20{2,}/g," ").split(" ")[urlInNum - 1].replace(/^#/,"");
                
				scname = arg.substring(arg.lastIndexOf('/') + 1, arg.lastIndexOf('.') );
				if (isLooniOS){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				
				script.push(
					`${noteK}http-request ${ptn} script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/echo-response/index.js, timeout=60, tag=${scname}_${y}, argument=type=text/json&url=${arg}`);
				}else if (isSurgeiOS){
				z[y - 1]?.match(/^#/) && MapLocal.push(z[y - 1]);

				mockPtn = x.replace(/\x20{2,}/g," ").split(" url echo-response")[0].replace(/^#/,"");
				
				dataCon = x.replace(/\x20{2,}/g," ").split(" echo-response ")[2];
				
				MapLocal.push(`${noteK}${mockPtn} data="${dataCon}"`);
				}else if (isShadowrocket){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				
				script.push(
					`${noteK}${scname}_${y} = type=http-request, pattern=${ptn}, script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/echo-response/index.js, timeout=60, argument=type=text/json&url=${arg}`)
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && script.push("    " + z[y - 1]);
				
				script.push(
					`${noteK4}- match: ${ptn}${noteKn6}name: ${scname}_${y}${noteKn6}type: request${noteKn6}timeout: 30${noteKn6}argument: |-${noteKn8}type=text/json&url=${arg}`)
				
				providers.push(
							`${noteK2}${scname}_${y}:${noteKn4}url: https://raw.githubusercontent.com/xream/scripts/main/surge/modules/echo-response/index.js${noteKn4}interval: 86400`);
				}; 

			}else{others.push(x)};
			
				break;

//mitm
			case "hostname":
			
			    if (isLooniOS){
					
				MITM = x.replace(/%.*%/g," ").replace(/\x20/g,"").replace(/,*\x20*$/,"").replace(/hostname=(.*)/, `[MITM]\n\nhostname = $1`).replace(/=\x20,+/,"= ");
				}else if (isSurgeiOS || isShadowrocket){
					
				MITM = x.replace(/%.*%/g,"").replace(/\x20/g,"").replace(/,{2,}/g,",").replace(/,*\x20*$/,"").replace(/hostname=(.*)/, `[MITM]\n\nhostname = %APPEND% $1`).replace(/%\x20,+/,"% ");
				}else if (isStashiOS){
					
				MITM = x.replace(/%.*%/g,"").replace(/\x20/g,"").replace(/,{2,}/g,",").replace(/,*\x20*$/,"").replace(/hostname=(.*)/, `t&2;mitm:\nt&hn;"$1"`).replace(/",+/,'"');
				};
				break;
				
//302/307		
				
			case " url 30":
				
				if (isLooniOS || isSurgeiOS || isShadowrocket){
					z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
					URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.*?)\x20url\x20(302|307)\x20(.+)/, `${noteK}$2 $4 $3`));
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && URLRewrite.push("    " + z[y - 1]);
					URLRewrite.push(x.replace(/\x20{2,}/g," ").replace(/(^#)?(.*?)\x20url\x20(302|307)\x20(.+)/, `${noteK4}- >-${noteKn6}$2 $4 $3`));
				};
				break;
		
			default:
            
            if (type.match(/\x20(request|response)-body/)){
                
//(response|request)-body
				reBdType = x.match(' response-body ') ? 'response' : 'request';
				
				reBdPtn = x.replace(/\x20{2,}/g," ").split(" url re")[0].replace(/^#/,"");
				if (isSurgeiOS){
					reBdPtn = reBdPtn.replace(/(.+,.+)/,'"$1"');};
				reBdArg1 = x.split(" " + reBdType + "-body ")[1];
				
				reBdArg2 = x.split(" " + reBdType + "-body ")[2];
					if (isLooniOS){
					z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
						
					script.push(
							`${noteK}http-${reBdType} ${reBdPtn} script-path=https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Resource/Script/CommonScript/replace-body.js, requires-body=true, timeout=60 ,tag=replaceBody_${y}, argument="${reBdArg1}->${reBdArg2}"`);
					}else if (isSurgeiOS || isShadowrocket){
					z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
					script.push(
							`${noteK}replaceBody_${y} = type=http-${reBdType}, pattern=${reBdPtn}, requires-body=true, max-size=3145728, script-path=https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Resource/Script/CommonScript/replace-body.js, timeout=60, argument="${reBdArg1}->${reBdArg2}"`);
					}else if (isStashiOS){
					z[y - 1]?.match(/^#/) && script.push("    " + z[y - 1]);
					
					script.push(
							`${noteK4}- match: ${reBdPtn}${noteKn6}name: replaceBody_${y}${noteKn6}type: ${reBdType}${noteKn6}timeout: 30${noteKn6}require-body: true${noteKn6}max-size: 3145728${noteKn6}argument: |-${noteKn8}${reBdArg1}->${reBdArg2}`);
					providers.push(
							`${noteK2}replaceBody_${y}:${noteKn4}url: https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Resource/Script/CommonScript/replace-body.js${noteKn4}interval: 86400`);	
					};
                    }else if (type.match(/\x20(https?|ftp|file)/)){
//定时任务                    
				
				if (isSurgeiOS || isShadowrocket || isLooniOS){
				cronExp = x.replace(/\x20{2,}/g," ").split(/\x20(https?|ftp|file)/)[0].replace(/^#/,'');
				}else if (isStashiOS){
				cronExp = x.replace(/\x20{2,}/g," ").split(/\x20(https?|ftp|file)/)[0].replace(/[^\s]+ ([^\s]+ [^\s]+ [^\s]+ [^\s]+ [^\s]+)/,'$1').replace(/^#/,'');
				};
				
            if (nCron != null){
	for (let i=0; i < nCron.length; i++) {
  const elem = nCron[i];
	if (x.indexOf(elem) != -1){
        cronExp = nCronExp[i];   
            };};};
                
				cronJs = x.split("://")[0].replace(/.+\x20([^\s]+)$/,"$1") + "://" + x.split("://")[1].split(",")[0];
				
				croName = cronJs.substring(cronJs.lastIndexOf('/') + 1, cronJs.lastIndexOf('.') );
				
				if (isSurgeiOS || isShadowrocket){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				script.push(
						`${noteK}${croName} = type=cron, cronexp="${cronExp}", script-path=${cronJs}, timeout=60, wake-system=1`);	
				}else if (isLooniOS){
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				script.push(
						`${noteK}cron "${cronExp}" script-path=${cronJs}, timeout=60, tag=${croName}`);
				}else if (isStashiOS){
				z[y - 1]?.match(/^#/) && cron.push("    " + z[y - 1]);
				cron.push(
						`${noteK4}- name: ${croName}${noteKn6}cron: "${cronExp}"${noteKn6}timeout: 60`);
				providers.push(
						`${noteK2}${croName}:${noteKn4}url: ${cronJs}${noteKn4}interval: 86400`);	};
                    };//定时任务转换结束
				}
		} //switch结束
	
}); //循环结束

if (isLooniOS){
    pluginDesc = (pluginDesc[0] || '') && `${pluginDesc.join("\n")}`;
    
    if (pluginDesc !="" && pluginDesc.search(/#! *name *=/) != -1){
        //没有图标的插入图标
        if (pluginDesc.search(/#! *icon *= *.+/) == -1){
        pluginDesc = pluginDesc + "\n" + pluginIcon;
            
        }else{pluginDesc = pluginDesc;};
		
        //Pokemon没有作者的插入作者
        if (iconLibrary2 == "Pokemon" && pluginDesc.search(/#! *author *= *.+/i) == -1){
        pluginDesc = pluginDesc + "\n" + pluginPokemonAuthor;
        }else{pluginDesc = pluginDesc;};
		
        //Pokemon没有homepage的插入homepage
        if (iconLibrary2 == "Pokemon" && pluginDesc.search(/#! *homepage *= *.+/i) == -1){
        pluginDesc = pluginDesc + "\n" + pluginPokemonHomepage;
        }else{pluginDesc = pluginDesc;};
		
    }else{
        if (iconLibrary2 == "Pokemon"){
            pluginDesc = npluginDesc + "\n" + pluginIcon + "\n" + pluginPokemonAuthor + "\n" + pluginPokemonHomepage;
        }else{
                    pluginDesc = npluginDesc + "\n" + pluginIcon;
        };
    };
    
    if (iconReplace == "启用" && pluginDesc.search(/#!icon=/) == -1 ){
        pluginDesc = pluginDesc + "\n" + pluginIcon};
    
	script = (script[0] || '') && `[Script]\n\n${script.join("\n\n")}`;
	
	URLRewrite = (URLRewrite[0] || '') && `[Rewrite]\n\n${URLRewrite.join("\n")}`;
	
	others = (others[0] || '') && `${others.join("\n\n")}`;
	
body = `${pluginDesc}


${URLRewrite}


${script}


${MITM}`
		.replace(/(#.+\n)\n+(?!\[)/g,'$1')
		.replace(/\n{2,}/g,'\n\n')
}else if (isSurgeiOS || isShadowrocket){
    
    pluginDesc = (pluginDesc[0] || '') && `${pluginDesc.join("\n")}`;
    
    if (pluginDesc !="" && pluginDesc.search(/#! *name *=/) != -1){
        pluginDesc = pluginDesc;
    }else{
        pluginDesc = npluginDesc;
    };
    
	script = (script[0] || '') && `[Script]\n\n${script.join("\n\n")}`;
	
	URLRewrite = (URLRewrite[0] || '') && `[URL Rewrite]\n\n${URLRewrite.join("\n")}`;
	
	MapLocal = (MapLocal[0] || '') && `[Map Local]\n\n${MapLocal.join("\n\n")}`;
	
	others = (others[0] || '') && `${others.join("\n\n")}`;

body = `${pluginDesc}


${URLRewrite}


${script}


${MapLocal}


${MITM}`
		.replace(/(#.+\n)\n+(?!\[)/g,'$1')
		.replace(/\n{2,}/g,'\n\n')
}else if (isStashiOS){
    
    pluginDesc = (pluginDesc[0] || '') && `${pluginDesc.join("\n")}`;
    
    if (pluginDesc !="" && pluginDesc.search(/name: /) != -1){
        pluginDesc = pluginDesc;
    }else{
        pluginDesc = npluginDesc;
    };
	
	URLRewrite = (URLRewrite[0] || '') && `  rewrite:\n${URLRewrite.join("\n")}`;
    
	script = (script[0] || '') && `  script:\n${script.join("\n\n")}`;
    
    	MITM = MITM.replace(/\x20/g,'')
           .replace(/\,/g,'"\n    - "')
		   .replace(/t&2;/g,'  ')
		   .replace(/t&hn;/g,'    - ')
	
    if (URLRewrite != "" || script != "" || MITM !=""){
httpFrame = `http:
${URLRewrite}

${script}

${MITM}`
    };

	cron = (cron[0] || '') && `cron:\n  script:\n${cron.join("\n")}`;
	
	providers = (providers[0] || '') && `script-providers:\n${providers.join("\n")}`;
	
	others = (others[0] || '') && `${others.join("\n\n")}`;

body = `${pluginDesc}


${httpFrame}

${cron}

${providers}`
		.replace(/script-providers:\n+$/g,'')
		.replace(/#      \n/gi,'\n')
		.replace(/      \n/g,"")
		.replace(/(#.+\n)\n+(?!\[)/g,'$1')
		.replace(/\n{2,}/g,'\n\n')
};

if (isSurgeiOS || isStashiOS) {
           others !="" && $notification.post("不支持的类型已跳过",others,"点击查看原文，长按可展开查看剩余不支持内容",{url:req});
        } else if (isLooniOS || isShadowrocket) {
       others !="" && $notification.post("不支持的类型已跳过","第" + others,"点击查看原文，长按可展开查看剩余不支持内容",req);};

 $done({ response: { status: 200 ,body:body ,headers: {'Content-Type': 'text/plain; charset=utf-8'} } });
}//判断是否断网的反括号


})()
.catch((e) => {
		$notification.post(`${e}`,'','');
		$done()
	})

function http(req) {
  return new Promise((resolve, reject) =>
    $httpClient.get(req, (err, resp,data) => {
  resolve(data)
  })
)
}
