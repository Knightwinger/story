
    const express = require("express");

    const app = express();

    //making Get request
    app.get("/", function(req, res){
        res.sendFile(__dirname + "/index.html");
    })
 
    //server port
    app.listen(process.env.PORT || 3003, function(){
        console.log('server started on port 3003');
    })
