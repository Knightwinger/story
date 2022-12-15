
    const express = require("express");

    const app = express();

    app.use(express.static("public"));

    //making Get request
    app.get("/", function(req, res){
        res.sendFile(__dirname + "/index.html");
    })
 
    //server port
    app.listen(process.env.PORT || 3003, function(){
        console.log('server started on port 3003');
    })
