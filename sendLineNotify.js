//LINE_CHANNEL_ACCESS_TOKEN 
//LINE_TARGET_GROUP_ID
//https://api.line.me/v2/bot/message/push
function sendLinePushMessage(message, token, targetId) {
  var url = "https://api.line.me/v2/bot/message/push";
  
  
  var payload = {
    "to": targetId, // ใส่ Group ID, Room ID หรือ User ID
    "messages": [
      {
        "type": "text",
        "text": message // ข้อความที่ส่งมาจาก AppSheet
      }
    ]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "Authorization": "Bearer " + token
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true // เปิดไว้เพื่อช่วยดูข้อผิดพลาดกรณีส่งไม่ผ่าน
  };

  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText()); // ตรวจสอบสถานะการส่งใน Log
}
//---------------------------------------------
function testSendLinePush() {
  // 1. ระบุ Channel Access Token และ Group ID ของคุณที่นี่
  var token = "ใส่_LINE_CHANNEL_ACCESS_TOKEN_ของคุณที่นี่";
  var targetGroupId = "ใส่_LINE_TARGET_GROUP_ID_ของคุณที่นี่";
  
  // 2. กำหนดข้อความทดสอบ
  var testMessage = "ทดสอบการส่งข้อความจาก Google Apps Script ผ่าน LINE Messaging API สวัสดี กู้เกียรติ เกื้อกูล";
  
  // 3. เรียกใช้งานฟังก์ชันส่งข้อความ
  sendLinePushMessage(testMessage, token, targetGroupId);
}
//-----------------------------------