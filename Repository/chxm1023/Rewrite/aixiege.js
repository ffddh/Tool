/*************************************

项目名称：歌歌AI写歌
下载地址：https://t.cn/A6nZnbJH
更新日期：2024-10-23
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/apiv2\.somuseai\.com\/userinfo url script-response-body https://raw.githubusercontent.com/ffddh/Tool/main/Repository/chxm1023/Rewrite/aixiege.js

[mitm]
hostname = apiv2.somuseai.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.userinfo.status = {
  ...chxm1023.data.userinfo.status,
  "is_vip" : 1,
  "vip_expired_date" : 4092599349,
  "vip_name" : "大师会员",
  "vip" : 2
};

$done({body : JSON.stringify(chxm1023)});
