//to do========================
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//to do========================

// Model setup
// Inside your burger directory, create a folder named models.

// In models, make a burger.js file.

// Inside burger.js, import orm.js into burger.js
var orm = require("../model/burger.js");
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.













// Export at the end of the burger.js file.

module.exports = burger;


// Heres how it was done in model/cats.js

// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = cat;