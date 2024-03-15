const mqtt = require("mqtt");
var client = mqtt.connect("mqtt:/iot.modern-networks.co.th");

client.on("connect", function (){
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);
        if(random < 30){
            client.publish('TestTopic', 'MQTT' + random.toString() + '.');
        }
    }, 3000);
});
