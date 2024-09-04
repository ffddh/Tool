
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://zshc.inovance.com/apipc/community/v1/sign/add`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'app-key' : `pc-bbs`,
'xAuthorization' : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFhZjkzNTAxZGUyOTQ0NDBiMzZkNWY1YTJmZjhiOGNlM2IxMDc0YWEtYzIwNy00OTc2LTllODgtODQ3MjllMDBiYTc1In0.jd7ds6Jf17NpCfBnMRbSKMk_g3iqKCE8M1F_vix8dpliJH80Fj_QkWqyb1MSinx_gbsMpgfSz_CDri3iE0E2Uw`,
'Content-Type' : `application/json;charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://zshc.inovance.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1`,
'platform' : `3`,
'usermedia' : `adcf429a-c5bb-4d3e-a3ec-d4326207ca82`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `a248467cf6a53819_gr_cs1=1af93501de294440b36d5f5a2ff8b8ce; a248467cf6a53819_gr_last_sent_cs1=1af93501de294440b36d5f5a2ff8b8ce; a248467cf6a53819_gr_last_sent_sid_with_cs1=95786908-763d-4122-92fe-5c393d01bf50; a248467cf6a53819_gr_session_id=95786908-763d-4122-92fe-5c393d01bf50; a248467cf6a53819_gr_session_id_sent_vst=95786908-763d-4122-92fe-5c393d01bf50; gr_user_id=71fca4c4-983a-4efe-8521-0f2a98a09e72; Hm_lpvt_09d70c99eb0fb2b9da69487ec1099022=1703018503; Hm_lvt_09d70c99eb0fb2b9da69487ec1099022=1702974855,1703018129; SERVERID=e02e1f78c6364a5716d15ef1a4f62c2f|1703018503|1703018128`,
'Host' : `zshc.inovance.com`,
'Referer' : `https://zshc.inovance.com/pc/bbs/circle`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain`
};
const body = `{"taskId":"21"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
