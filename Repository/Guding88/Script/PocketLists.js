/*

PocketLists：https://apps.apple.com/app/id1272049520

[rewrite_local]
^https?:\/\/pocketlists\.com\/api\/v1\/pocketlists.me.get url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/PocketLists.js

[MITM]
hostname = pocketlists.com

*/
var guding = JSON.parse($response.body);
guding.data.userpic = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding.png";
guding.data.userpic_minor = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding.png";
guding.data.subscription_expires = "6666-06-06";
guding.data.subscription_type = "family";//personal
guding.data.name ="骨钉 https://t.me/Guding88";
$done({ body: JSON.stringify(guding) });
