$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/empanadas/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newEmpanada = {
        name: $("#nosa").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      //POST request.
      $.ajax("/api/empanadas", {
        type: "POST",
        data: newEmpanada
      }).then(
        function() {
          console.log("empanada added");
          // Reload the page
          location.reload();
        }
      );
    });
  
    $(".delete-empanada").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/empanadas/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted empanada", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });