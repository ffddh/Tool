/*

‎Focos：https://apps.apple.com/app/id1274938524

[rewrite_local]
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/Focos.js

[MITM]
hostname = focos.oracle.bendingspoonsapps.com

*/
var guding = JSON.parse($response.body);
guding.me.active_subscriptions_ids = ["com.focos.1y_t130_1w_bundle_creator"];
guding.me.unique_id = "88888888-8888-8888-8888-888888888888";
$done({ body: JSON.stringify(guding) });