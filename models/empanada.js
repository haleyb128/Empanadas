// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var empanada = {
  all: function(cb) {
    orm.selectAll("empanadas", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("empanadas", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("empanadas", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = empanada;