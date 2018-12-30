/* Title: Test code to use the CRUD functions from data lib
 *
 */

// Dependencies
var fops = require('./lib/data');

var user = {
    "firstName": "Mubeen",
    "lastName": "Jukaku",
    "phone": "9988776655",
    "password": "secret",
    "tosAgreement": true
};

// Invoke the functions from data lib

// Create the user
fops.create('users', user.phone, user, function (err) {
    if (err) {
        console.log("ERROR: Could not create user", err);
    }
    else {
        console.log("SUCESS: Saved user to file");
    }
});

// Read the user
var newObj = {};
fops.read('users', "9988776655", function (err, newObj) {
    if (!err && newObj) { // Read is successful
        console.log("Read User: ", newObj);
    }
    else { // Error in reading
        console.log("ERROR: Could not read user", err);
    }
});

// Update the user
// You can specify the properties to be updated by creating a new object

// var userChanges = {
//     lastName: "J",
//     password: "thisIsaPassword"
// };

// // @TODO: Get the user from file, and invoke it in callback for read
// var origUser = user;

// if (userChanges.phone) { //phone number cannot be changed
//     console.log("Cannot update phone");
// }
// else {
//     var firstName = typeof(userChanges.firstName) == "string" ? userChanges.firstName : false;
//     var lastName = typeof(userChanges.lastName) == "string" ? userChanges.lastName : false;
//     var password = typeof(userChanges.password) == "string" ? userChanges.password : false;

//     if (firstName || lastName || password) {
//         // Create a new updated object
//         if (firstName) {
//             origUser.firstName = firstName;
//         }
//         if (lastName) {
//             origUser.lastName = lastName;
//         }
//         if (password) {
//             origUser.password = password;
//         }
//         console.log("Update user:", origUser);

//         //Update the object to the file
//         fops.update('users', origUser.phone, origUser, function (err) {
//             if(err) {
//                 console.log("Error In updating", err);
//             }
//             else {
//                 console.log("Sucess: Updated user to file");
//             }
//         });
//     }
//     else {
//         console.log("Atleast one property must be set");
//     }
// }

// Read the existing property from the file

// Update the new properties from userChanges




 // Delete the user
//  fops.delete('users', user.phone, function(err){
//     if(err){
//         console.log("Deletion failed");
//     }
//     else {
//         console.log("Deleted the user");
//     }
//  });