/*

Cubox：https://apps.apple.com/app/id1113361350

[rewrite_local]
^https?:\/\/cubox\.(cc|pro)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/Cubox.js

[MITM]
hostname = cubox.cc, cubox.pro

*/
var guding = JSON.parse($response.body);
guding.data.isExpire = false;
guding.data.expireTime ="6666-06-06T06:06:06Z";
guding.data.nickName ="https://t.me/Guding88";
guding.data.level = 1;
guding.data.paymentSource = 9;
$done({ body: JSON.stringify(guding) });
