var express = require("express");
subscribers =[];


// Create the express app
var app = express();
var mqtt = require('mqtt');
var options = {
    port: 8883,
    username: "esp",
    password: "brainfuck"
};

var client = mqtt.connect('mqtt:192.168.1.148',options);

var connector_methods=require('./connector_methods.js');

subscribers = require ('./subscribers.json');
var connectors = require ('./connectors.json');






app.get("/", function (req, res) {
	res.send("jetzt gehts los");
}).listen(3000);


console.log("Application created,running ");


client.on ('connect', function(){
    console.log("connected");
    client.subscribe('/Frodo/AZ/Temperature')

});

client.on ('message', function(topic, message){



    connector_methods.connector('textout', topic + " = "+ message)

});