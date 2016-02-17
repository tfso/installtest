/**
 * Created by Edgar on 17.02.2016.
 */

xsd = require('libxml-xsd');

function ping (host, callback){
    host = host || "first";
    //do http request here.
    //when finish, call "callback"
    console.log(new Date(), host);
    console.log("is xsd defined" , !!xsd);
    console.log(xsd);
    callback("This is a message");
}

function query_host (){
    ping(host, function (status) {
        //..  do stuff like saving status in database, etc.
        setTimeout (query_host, 4000) //queue for next ping in the next predefined interval
    });
}

//main
setTimeout (query_host, 4000) //queue job. Every 2 seconds, query_host will be called.