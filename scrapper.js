var request = require("request");
var fs = require("fs");

request({
    uri: process.argv[2]
}, function(error, response, body) {
    //delete file if exists
    fs.unlink('webpage.txt', function(notExist) {
        if (notExist) {
            console.log("Deleting file if exists...");
        }
    });
    //create and write file asynchronously
    var regex = /(<([^>]+)>)/ig;
    var result = body.replace(regex, "");
    fs.appendFile('webpage.txt', result, function(err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });

});