require("dotenv").config()
const mqtt = require("mqtt");
console.log(process.env.IOT_URL)
var client = mqtt.connect("mqtt//broker.hivemq.com")


client.on("connect", function () {
    setInterval(function () {
        var random = Math.random() * 50;
        console.log(random);
        if (random < 30) {
            client.publish('TestTopic', 'MQTT' + random.toString() + '.');
        }
    }, 1000); // Change interval to 1000 milliseconds (1 second)
});
