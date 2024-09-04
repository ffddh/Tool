```
⚠️ 不支持 🇨🇳中国大陆 的 App Store 账号
```

## 简介
  * 保持模块启用，即可自定义TV app功能与语言支持。

## 使用说明
  * 如启用本模块后重新打开`Apple TV`未生效，可按照下列步骤激活:
    1. 打开`TV app`(`TV`或`视频`)
    2. 点击右上角头像
    3. 点击`退出登录`
    4. 重新输入`Apple ID`与`密码`登入
    5. 此时应在`Surge`的`最近请求`或`Quantumult X`的`网络活动`中观察到:
      1. `TV app`的`https://uts-api.itunes.apple.com/uts/v3/configitions`链接
    6. 查看`TV app`的`立即观看`页面是否有`儿童`一个二级入口(iOS/iPadOS)
    7. 查看`TV app`的标签栏是否有`立即观看`、`原创内容`、`商店`、`体育节目`、`资料库`五个标签页按钮(iOS/iPadOS)
    8. 查看`TV app`的标签栏是否有`立即观看`、`tv+`、`商店`、`体育节目`、`儿童`、`资料库`六个标签页按钮(macOS/tvOS)
    9. 如没有请完全重开一次app
    10. Enjoy

## 功能列表
  * 混合区域支持
    * 默认混合账号所在区(`立即观看`、`电影`)，新加坡(`tv+`、`原创内容`、`搜索`、`人物`)，美国(`电视节目`、`体育节目`、`儿童`)三个地区的内容
      * 港澳台地区账号，拥有tv+订阅的，可以收看美区tv+的`体育节目`直播内容（如最新内置的MLB联赛直播）
      * 转区的账号，可以通过修改`影片详情页`观看之前所在地区购买的电影等内容（如A区购买的电影，在B区未上架）
      * 语言和字幕有地区限制的内容，可以通过修改`影片详情页`观看中文字幕的版本（如某账号在美区购买电影无中字，但是同ID的影片在港澳台地区提供中字，可以通过将`影片详情页`改为港澳台后播放获得中文字幕）
  * 多语言支持
    * 底部标签栏与栏目入口语言自适应（目前仅适配`简体中文`、`繁体中文`、`英语`，如需更多语言适配请PR或提供翻译文本）
    * 影片详情页语言自动回退
      * 可自定义语言优先级，默认顺序为`简体中文（新加坡）` => `繁体中文（台湾）` => `英语（美国）`
  * 解除客户端平台限制
    * 为macOS、Android TV、Web版`TV app`启用第三方供应商(如: Disney+,Prime Video等)影片库和服务集成
  * 硬件及平台
    - [x] macOS
    - [x] iPad
    - [x] iPhone
    - [x] Apple TV (需Surge for macOS的`网关模式`或Loon的`代理服务器`等) 
    - [ ] Android TV (需Surge for macOS的`网关模式`或Loon的`代理服务器`等) (Android TV效果待测试，不确定是否可用)
    - [ ] Web(待测试，不确定是否可用)
  * 分类页面
    - [x] 立即观看
    - [x] TV+（iOS/iPadOS版客户端为`原创内容`）
    - [x] 商店 (`电影`、`电视节目`为`商店`二级菜单)
    - [x] 体育节目 (macOS版客户端无关注「喜爱的球队」功能和显示比分功能)
    - [x] 儿童 (iOS版客户端为`立即观看`二级菜单)
    - [x] 资料库
    - [x] 搜索

## 安装链接
### 🆕V3版
  * Loon:
    * 🆕点击一键安装: [TV.plugin](https://api.boxjs.app/loon/import?plugin=https://github.com/VirgilClyne/iRingo/raw/main/plugin/TV.plugin " iRingo: 📺 TV") 
    * `插件`链接: [TV.plugin](../raw/main/plugin/TV.plugin " iRingo: 📺 TV")
  * Quantumult X:
    * 🆕点击一键安装: [TV.snippet](https://api.boxjs.app/quanx/add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fgithub.com%2FVirgilClyne%2FiRingo%2Fraw%2Fmain%2Fsnippet%2FTV.snippet%2Ctag%3D%EF%A3%BF%20iRingo%3A%20%EF%A3%BFTV%20app%22%5D%7D " iRingo: 📺 TV")
    * `重写`链接: [TV.snippet](../raw/main/snippet/TV.snippet " iRingo: 📺 TV")
  * Surge (Shadowrocket):
    * 🆕点击一键安装(Shadowrocket): [TV.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://github.com/VirgilClyne/iRingo/raw/main/sgmodule/TV.sgmodule " iRingo: 📺 TV")
    * 🆕点击一键安装(Surge): [TV.sgmodule](https://api.boxjs.app/surge/install-module?url=https://github.com/VirgilClyne/iRingo/raw/main/sgmodule/TV.sgmodule " iRingo: 📺 TV")
    * `模块`链接: [TV.sgmodule](../raw/main/sgmodule/TV.sgmodule " iRingo: 📺 TV")
  * Stash:
    * 🆕点击一键安装: [TV.stoverride](https://link.stash.ws/install-override/github.com/VirgilClyne/iRingo/raw/main/stoverride/TV.stoverride " iRingo: 📺 TV")
    * `覆写`链接: [TV.stoverride](../raw/main/stoverride/TV.stoverride " iRingo: 📺 TV")

### V1版
  * 已归档，不再更新
  * Loon:
    * [Apple_TV.plugin](../raw/main/Archive/plugin/Apple_TV.plugin " Enable Apple TV app") 
  * Quantumult X:
    * [Apple_TV.qxrewrite](../raw/main/Archive/qxrewrite/Apple_TV.qxrewrite " Enable Apple TV app")
  * Surge (Shadowrocket):
    * 语言为简体中文(zh-Hans):[Apple_TV.sgmodule](../raw/main/Archive/sgmodule/Apple_TV.sgmodule " Enable Apple TV app")
    * 语言为英语(EN):[Apple_TV_EN.sgmodule](../raw/main/Archive/sgmodule/Apple_TV_EN.sgmodule " Enable Apple TV app")
  * Stash:
    * [Apple_TV.stoverride](../raw/main/Archive/stoverride/Apple_TV.stoverride " Enable Apple TV app")

## 更新日志
  * v3.0.0
    * 优化与修复
      1. 重构代码
      2. 修复bug
  * v2.1.0-request
    * 优化与修复
      1. 优化域名匹配方法，精简逻辑和代码量
  * v2.0.8-request
    * 优化与修复
      1. 补充`搜索`页面匹配规则
      2. 补充`其他`页面匹配规则
      3. 补充`原创内容`页面匹配规则
      4. 修复`语言代码`数据库
  * v2.0.7-request
    * 优化与修复
      1. 补充`频道`页面匹配规则
      2. 更新`标签页`标题数据库
      3. 更新`模块`匹配规则和图标
      4. 补充`其他`页面匹配规则
  * v2.0.3-response
    * 更新功能
      1. 新增`标签栏`与`板块入口`按钮语言自适应更改功能
  * v2.0.6-request
    * 优化与修复
      1. 增加`语言代码`数据库
      2. 增加`语言代码`改写功能
      3. 补充`影片详情`页面匹配规则
  * v2.0.5-request
    * 优化与修复
      1. 补充`原创内容`页面匹配规则
      2. 补充`体育节目`页面匹配规则
      3. 新增`搜索`页面匹配规则
      4. 新增`待播清单`页面匹配规则
      5. 补充`频道`页面匹配规则
  * v2.0.4-request
    * 优化与修复
      1. 修复`地区代码`的`自动`选项
      2. 修复`待播清单`页面匹配规则
      3. 补充`喜爱`功能匹配规则
      4. 补充`人物`页面匹配规则
      5. 补充`其他`页面匹配规则
  * v2.0.3-request
    * 优化与修复
      1. 新增`商店代码`数据库
      2. 新增`商店代码`修改功能
  * v2.0.1
    * 更新功能
      1. 新增BoxJs面板支持，可以精确控制`TV app`功能
      2. 增加开启第三方影片库功能
      3. 增加自定义板块与栏目入口功能
      4. 增加自定义每个板块与栏目地区功能
      5. 其他新增设置项，详见BoxJs设置面板
    * 优化与修复
      1. 采用全新的环境变量设置(setENV)功能来存储设置、缓存和配置
      2. 支持全新的argument配置方法，支持深路径配置写入
      3. 采用`请求`与`回复`脚本分离的设计方式，缩短运行时间
