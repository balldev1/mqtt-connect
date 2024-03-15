const mqtt = require("mqtt");
var client = mqtt.connect("mqtt//broker.hivemq.com")

client.on("connect", function (){
    client.subscribe('TestTopic');
    console.log('client connect success')
})

client.on("message", function (topic,message){
    console.log('client connect success')
})