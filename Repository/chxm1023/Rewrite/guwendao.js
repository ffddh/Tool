/*************************************

项目名称：古文岛
下载地址：https://too.st/aZF
更新日期：2024-09-07
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/app\.guwendao\.net\/api\/user\/getVip url script-response-body https://raw.githubusercontent.com/ffddh/Tool/main/Repository/chxm1023/Rewrite/guwendao.js

[mitm]
hostname = app.guwendao.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.svip = "/Date(4092599349000)/";

$done({body : JSON.stringify(chxm1023)});