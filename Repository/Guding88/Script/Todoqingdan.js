/*

Todo清单：https://apps.apple.com/app/id1566997654

[rewrite_local]
^https?:\/\/www\.evestudio\.cn\/todoList\/getDetailUser url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/Todoqingdan.js

[MITM]
hostname = www.evestudio.cn

*/
var guding = JSON.parse($response.body);
guding.data.vip = true;
guding.data.vipDeadTime = 148204937166000;
guding.data.userName = "骨钉";
guding.data.userAccount = "https://t.me/Guding88"
$done({ body: JSON.stringify(guding) });
