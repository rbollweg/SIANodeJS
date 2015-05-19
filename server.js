/**
 * Created by The Gibs on 5/18/2015.
 */

var express    = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log(req.body) // populated!
    next()
    res.send("thxm8")
    fs.appendFile("C:\\Spirit Ice Arena\\input.csv", req.body.name + ',' + req.body.email + '\n', function(err) { //we recieve our JSON POST here
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
})


//"Main" function

fs.exists('C:\\Spirit Ice Arena\\input.csv', function(exists) //if the csv file doesn't exist, create it.
{
    if(!exists)
    {
        fs.appendFile("C:\\Spirit Ice Arena\\input.csv", "Name:,Email:" + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
        });
    }
})



app.listen(3000); //Start the server
console.log('listening on port 3000');