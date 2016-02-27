var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/:time', function(req, res) {
    var time = req.params.time;
    var timeObj = {};
    if (time * 1) {
        console.log(new Date(time * 1000));
    } else {
        if (new Date(time).toString() === "Invalid Date") {
            console.log("Invalid");
        } else {
            var date = new Date(time);
            console.log(date);
            console.log(Date.parse(date) / 1000);
        }
    }
    res.send();
});

app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("Listening on port", process.env.PORT);
});