let url='http://google.com';

const EventEmiiter=require('events');

class Logeer extends EventEmiiter{

    log(message){
        console.log(message);
           //raise an event                    //event arguments
        this.emit("Event Arised",{id:1 , url:'http://cat.com'});
    }
}



module.exports=Logeer