/*

QX:
[rewrite_local]
#解锁会员
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/user\/info url script-response-body tz.js
^https:\/\/i\.at\.qq\.com\/pay\/memberinfo url script-response-body wxts.js

[mitm]
hostname = i.at.qq.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "isMember": 1,
  "isAutoRenewable": 1,
  "startTime": 1612600608,
  "endTime": 4092647115,
  "autoRenewableChannel": 0,
  "autoRenewableTime": 0,
  "expiresIn": 999999999,
  "subscriptionPeriod": 1,
  "subscriptionPrice": 999999,
  "historyAutoRenewable": true,
  "hasPromoRight": false,
  "subscriptionDesc": "永久会员",
  "subscriptionButtonLabel": ""
 };

$done({body: JSON.stringify(obj)});
