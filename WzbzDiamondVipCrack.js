/******************************

脚本功能：问真八字解锁永久钻石会员
软件版本：2.1.0
下载地址：http://t.cn/A6CM9OiG
脚本作者：Hausd0rff
更新时间：2023-02-28
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 问真八字解锁永久钻石会员
^https?:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WzbzDiamondVipCrack.js

[mitm] 
hostname = bzpp2.iwzbz.com

*******************************/
// 解析响应体
var obj = JSON.parse($response.body);

// 修改会员信息
obj.data.adtype = 0;  // 关闭广告
obj.data.vipLevel = 3;  // 设置会员等级为3
obj.data.vipTipsType = 0;  // 关闭会员提示
obj.data.expires = '2999-11-28 06:06:06';  // 设置过期时间

// 返回修改后的数据
$done({
  body: JSON.stringify(obj)
});z