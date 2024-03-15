const mqtt = require("mqtt");

var client = mqtt.connect("mqtt//broker.hivemq.com")


client.on("connect", function () {
    client.subscribe('TestTopic');
    console.log('Client connected successfully');
});

client.on("message", function (topic, message) {
    console.log('Received message:', message.toString());
});
