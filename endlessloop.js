/**
 * Created by Edgar on 17.02.2016.
 */
var host = "This is a message";
function ping (host, callback){
    //do http request here.
    //when finish, call "callback"
    console.log(new Date(), host);
    callback(host);
}

function query_host (){
    ping(host, function (status) {
        //..  do stuff like saving status in database, etc.
        setTimeout (query_host, 2000) //queue for next ping in the next predefined interval
    });
}

//main
setTimeout (query_host, 2000) //queue job. Every 2 seconds, query_host will be called.