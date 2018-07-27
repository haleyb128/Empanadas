var express = require("express");

var router = express.Router();

// Import the model (empanada.js) to use its database functions.
var empanada = require("../models/empanada.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  empanada.all(function(data) {
    var hbsObject = {
      empanadas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/empanadas", function(req, res) {
  empanada.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new empanada
    res.json({ id: result.insertId });
  });
});

router.put("/api/empanadas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  empanada.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});
router.delete("/api/empanadas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  empanada.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;