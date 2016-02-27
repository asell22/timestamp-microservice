var express = require('express');
var app = express();

var formatDate = function(date) {
    var options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    
    return date.toLocaleDateString('en-US', options);
}

var setTimeObj = function(date) {
    var timeObj = {};
    var unix = Date.parse(date) / 1000;
    date = formatDate(date);
    timeObj.natural = date;
    timeObj.unix = unix;
    
    return timeObj;
}

app.use(express.static('public'));

app.get('/:time', function(req, res) {
    var time = req.params.time;
    
    if (time * 1) {
        var date = new Date(time * 1000);
        var timeObj = setTimeObj(date);
        res.send(timeObj); 
    } else {
        if (new Date(time).toString() === "Invalid Date") {
            res.send({
                unix: null,
                natural: null
            });
        } else {
            var date = new Date(time);
            var timeObj = setTimeObj(date)
            res.send(timeObj);
        }
    }
});

app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("Listening on port", process.env.PORT);
});