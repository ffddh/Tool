/*

极简汇率：https://apps.apple.com/app/id851033695

[rewrite_local]
^https?:\/\/explorer\.tratao\.com\/api\/client\/xtool\/vip url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/jijianhuilv.js

[MITM]
hostname = explorer.tratao.com

*/
var guding = JSON.parse($response.body);
guding.data = [{
        "vipStatus": "paid",
        "vipLevel": "senior",
        "expire": "2333-02-23 17:11:06",
        "vipPayType": "auto_sub",
        "vipPayUnit": "month",
        "vipPayNum": 1,
}]
$done({ body: JSON.stringify(guding) });
