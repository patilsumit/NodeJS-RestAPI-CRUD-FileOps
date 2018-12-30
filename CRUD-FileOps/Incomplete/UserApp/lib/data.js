/* Library for CRUD file ops */

// Dependencies
var fs = require('fs');
var path = require('path');

var data = {};

// Function to Create the user
// dir: Dir path for saving the file
// phone is the filename without .json extension
// data is the userObj to be saved
// callback is a callback function 
data.create = function (dir, phone, data, callback) {
    // construct the path
    var absPath = __dirname + "/" + "../data/" + dir + "/" + phone + ".json"; 

    // Create the file if it does not exist. Otherwise return error
    fs.open(absPath, "wx", function(err, fd){
      console.log("FD:",fd);
        if (!err) { // On Success
            // Proceed to save the data
            fs.write(fd, JSON.stringify(data), function(err){
                if (err) {
                    callback(err);
                }
                else {
                    callback(false); // Write is successful
                    fs.close(fd); // Close the file
                }
            });
        }
        else { // On failure
            // File may already exist
            callback(err);
        }
    });
}
   
data.read = function(dir, phone, callback) {
    // construct the path
    var absPath = __dirname + "/" + "../data/" + dir + "/" + phone + ".json"; 

    // Read from file
    fs.readFile(absPath, function(err, data){
        if (!err && data) { //Sucess
            // Parse the string into an Object
            var newObj = JSON.parse(data);
            // Return data by invoking callback
            callback(false, newObj);
        }
        else { // Failure
            callback(err);
        }
    });
}

//Export the modules
module.exports = data;