/*

飞跃VPN：https://apps.apple.com/app/id1590740244

[rewrite_local]
^https?:\/\/api\.leapmobile\.cloud\/users url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/feiyueVPN.js

[MITM]
hostname = api.leapmobile.cloud

*/
var guding = JSON.parse($response.body);
guding.expiredAt = "148204937166000";
$done({ body: JSON.stringify(guding) });
