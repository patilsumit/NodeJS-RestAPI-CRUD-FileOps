/* Title: Test code to use the CRUD functions from data lib
 *
 */

 // Dependencies
 var fops = require('./lib/data');

 var user = {
    "firstName": "Dipak",
    "lastName": "Patil",
    "phone": "9729531471",
    "password": "secret",
    "tosAgreement": true
 };

 // Invoke the functions from data lib

 // Create the user
 fops.create('users', user.phone, user, function(err){
     if (err) {
         console.log("ERROR: Could not create user", err);
     }
     else {
         console.log("SUCESS: Saved user to file");
     }
 });
 

 // Read the user
 var newObj = {};
 fops.read('users', "9725531471", function(err, newObj){
     if (!err && newObj) { // Read is successful
        console.log("Read User: ", newObj);
     }
     else { // Error in reading
        console.log("ERROR: Could not read user", err);
     }
 });