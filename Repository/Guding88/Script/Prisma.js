/*

Prisma：https://apps.apple.com/app/id1122649984

[rewrite_local]
^https?:\/\/api\.neuralprisma\.com\/receipt\/ios\/status\/prisma url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Guding88/Script/Prisma.js

[MITM]
hostname = api.neuralprisma.com

*/
var guding = JSON.parse($response.body);
guding.is_valid = true;
guding.expiration_date_unix = 148204937166;
guding.expiration_date = "6666-06-06T06:06:06Z";
$done({ body: JSON.stringify(guding) });
