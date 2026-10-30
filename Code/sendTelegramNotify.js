function sendTelegramNotify(token,chatId,message) {
 

  var telegramUrl = 'https://api.telegram.org/bot' + token + '/sendMessage';
  
  var payload = {
    'chat_id': chatId,
    'text': message,
    'parse_mode': 'Markdown'
  };

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload)
  };

  UrlFetchApp.fetch(telegramUrl, options);
}