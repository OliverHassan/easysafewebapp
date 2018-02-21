$(document).ready(function () {
  var dataBuffer = [];

  var ws = new WebSocket('wss://' + location.host);
  ws.onopen = function () {
    console.log('Successfully connect WebSocket');
  }
  ws.onmessage = function (message) {
    console.log('receive message' + message.data);
    try {
      var obj = JSON.parse(message.data);
      //if(!obj.time || !obj.temperature) {
      //  return;
      //}
	  if (!obj.deviceId || !obj.messageId){
		  return;
	  }
      dataBuffer.push(obj.deviceId);
      dataBuffer.push(obj.messageId);
	  
	  window.alert(dataBuffer);
      
	  // only keep no more than 50 points in the line chart
      //const maxLen = 50;
      //var len = timeData.length;
      //if (len > maxLen) {
      //  timeData.shift();
      //  temperatureData.shift();
      //}

      //if (obj.humidity) {
      //  humidityData.push(obj.humidity);
      //}
      //if (humidityData.length > maxLen) {
      //  humidityData.shift();
      //}
    } catch (err) {
      console.error(err);
    }
  }
});
