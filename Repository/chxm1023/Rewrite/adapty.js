/*************************************

项目名称：adapty-合集
下载地址：https://t.cn/A6NiBJqw
更新日期：2024-11-09
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.adapty\.io\/api\/v\d\/sdk\/(analytics\/profiles|in-apps\/(apple\/receipt\/validate|purchase-containers)|purchase\/app-store) url script-response-body https://raw.githubusercontent.com/ffddh/Tool/main/Repository/chxm1023/Rewrite/adapty.js

[mitm]
hostname = api.adapty.io

*************************************/


let chxm1023 = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];
const profileid = headers['adapty-sdk-profile-id'] || headers['ADAPTY-SDK-PROFILE-ID'];
const time = Date.now(); // 当前时间戳

const list = {
  'KeyboardGPT': { dy: 'dypda', id: "smart.keyboard.yearly.01", bundle_id: "com.smart.keyboard" },  //AiChatbot
  'SketchAR': { dy: 'dypda', id: "tech.sketchar.subscription.yearly", bundle_id: "tech.sketchar.ios" },  //Sketchar-AR画图应用
  'universal': { dy: 'dypda', id: "remotetv.yearly.01", bundle_id: "com.universal.remotetv", },  //TVRemote万能遥控器
  'Lingvist': { dy: 'dypda', id: "com.lingvist.unlimited_12_months.v11.full_1md_ft", bundle_id: "ee.keel24.Lingvist" },  //Lingvist-学习英语
  'ChatAI': { dy: 'dypda', id: "chatai_yearly_ios", bundle_id: "com.scaleup.chatai" },  //Nova-chat机器人
  'FacePlus': { dy: 'dypda', id: "faceplus_yearly_subs_3dft_ios", bundle_id: "com.scaleup.faceplus" },  //Retouch: Al FaceEditor
  'Batched': { dy: 'dypdba', id: "com.advasoft.batched.premium_year", bundle_id: "com.advasoft.batched" }  //Batched-多量图片编辑器
};

;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 f={"4":"r","1a":c,"G":"1b","1c":"7-5-s:2:2.g+h","1d":"j-2-H:2:2.g+h","1e":u,"1f":u,"1g":c,"1h":"7-5-s:2:2.g+h","1i":"7-5-s:2:2.g+h","1j":c,"1k":"d","1l":"d","1m":c,"1n":"1o"};6 v={"1p":"1","1q":"I","1r":"j-2-2 2:2:2 k/l","1s":"j-2-2 w:w:w x/y","1t":"c","1u":"d","1v":"u","1w":"1x","1y":"7-5-23 2:2:2 k/l","1z":"7-5-23 5:2:2 x/y","1A":"1B","1C":"I","1D":"d","1E":"1F","1G":"7-5-23 5:2:2 x/y","J":"7-5-23 2:2:2 k/l"};6 z=K(3){6 8={};6 9=[];8[3.4]=a.b({},f,{"m":3.4});9.L(a.b({},v,{"A":3.4}));o(3.1H==="1I"&&3.p){8[3.p]=a.b({},f,{"m":3.p});9.L(a.b({},v,{"A":3.p}))}M{8,9}}6 N=K(3){6{8,9}=z(3);6 O={"P":"B","Q":{"1J":"B","1K":R,"C":3.C,"1L":9,"J":"7-5-23 2:2:2 k/l"},"1M":0,"1N":[{"1O":"1","A":3.4,"1P":"0","1Q":3.4,"1R":"0"}],"1S":9,"1T":"e"};M{"D":{"S":"1U","4":q,"T":{"U":"V-W-X-Y-Z","10":q,"11":"12","8":8,"1V":0,"13":{"r":a.b({},f,{"m":3.4})},"14":O}}}}1W(6 E 1X 15){o(1Y 1Z(`^${E}`,\'i\').F(20)){6 3=15[E];o(/Q\\/21|16-22/.F($17.18)){e=N(3)}24 o(/25\\/26|16\\/27-G/.F($17.18)){e.D=a.b({},e.D,{"S":"28","4":q,"T":{"U":"V-W-X-Y-Z","10":q,"29":c,"11":"12","2a":2b,"14":{"P":"B","2c":"2d","2e":R,"2f":[{"2g":3.4,"2h":"2i","2j":"d","2k":"d","2l":"j-2-H:2:19","2m":"7-5-23 2:2:19"}],"2n":3.C},"8":z(3).8,"13":{"r":a.b({},f,{"m":3.4})}}})}2o.2p("操作成功 🎉\\n叮当猫分享频道: 2q://t.2r/e");2s}}$2t({2u:2v.2w(e)});',62,157,'||09|appConfig|id|01|const|2024|subscriptions|receiptData|Object|assign|false|490001234567890|chxm1023|premiumTemplate|000000|0000||2099|Etc|GMT|vendor_product_id||if|ids|profileid|premium|23T09||true|receiptTemplate|06|America|Los_Angeles|buildSubscriptionData|product_id|Production|bundle_id|data|appName|test|store|09T09|1706000949000|original_purchase_date|function|push|return|buildResponseData|appleValidationResult|environment|receipt|1560806510|type|attributes|app_id|56eb457c|6ad4|40aa|9b29|ea29e10e3505|profile_id|segment_hash|8245f974014fdf4c|paid_access_levels|apple_validation_result|list|purchase|request|url|09Z|is_lifetime|app_store|starts_at|expires_at|will_renew|is_active|is_in_grace_period|activated_at|renewed_at|is_refund|vendor_transaction_id|vendor_original_transaction_id|is_sandbox|active_introductory_offer_type|trial|quantity|purchase_date_ms|expires_date|expires_date_pst|is_in_intro_offer_period|transaction_id|is_trial_period|original_transaction_id|490001271881589|purchase_date|original_purchase_date_pst|in_app_ownership_type|PURCHASED|original_purchase_date_ms|web_order_line_item_id|expires_date_ms|4092628149000|purchase_date_pst|dy|dypdb|receipt_type|app_item_id|in_app|status|pending_renewal_info|expiration_intent|is_in_billing_retry_period|auto_renew_product_id|auto_renew_status|latest_receipt_info|latest_receipt|adapty_inapps_apple_receipt_validation_result|total_revenue_usd|for|in|new|RegExp|ua|validate|containers||else|analytics|profiles|app|adapty_purchase_app_store_original_transaction_id_validation_result|is_test_user|timestamp|time|revision|1726387136000_490001234567890_4|appAppleId|transactions|productId|storefront|US|transactionId|originalTransactionId|expiresDate|purchaseDate|bundleId|console|log|https|me|break|done|body|JSON|stringify'.split('|'),0,{}));