/*

博树：https://apps.apple.com/app/id379968583

[rewrite_local]
^https?:\/\/api\.(busuu|boshu)\.(com|cn)\/users\/me url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/boshu.js

[MITM]
hostname = api.busuu.com, api.boshu.cn

*/
var guding = JSON.parse($response.body);
guding.data.access = {"tier": "plus"};
$done({ body: JSON.stringify(guding) });
