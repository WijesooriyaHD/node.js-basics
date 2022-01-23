
//const loggerObject=require('./logger');
//loggerObject.log("hasara")

const Logeer=require('./logger');
//functionLog("hi dasa");


//inbuild path module
const path=require('path');
let pathInfo=path.parse(__filename);
console.log(pathInfo);

//inbuild os module
const os=require('os');
let totalmem=os.totalmem();
let freemem=os.freemem();

console.log(`total mem ${totalmem}`);
console.log(`free mem ${freemem}`);

//events module
const EventEmiiter = require('events');  // class
//const event = new EventEmiiter(); //object
const logevent=new Logeer();

logevent.on("Event Arised" , function(arg) {

    console.log("hey an event ocuured : ",arg);

});


logevent.log("log function in logger")




/*
//event listner
event.on("Event Arised" , function(arg) {

    console.log("hey an event ocuured : ",arg);

});

event.on("Event Arised" , (arg) => {

    console.log("hey an event ocuured : ",arg);

});



//raise an event                    //event arguments
event.emit("Event Arised",{id:1 , url:'http://cat.com'});
*/






