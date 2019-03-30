<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Star Wars Characters</title>
  <!-- Latest compiled and minified CSS & JS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</head>
<body>

  <div class="container">
    <div class="jumbotron">
      <h1>Star Wars Characters</h1>
      <h3>Greatest Characters of All Time</h3>
      <hr>
      <a href="/"><button class="btn btn-danger btn-lg"><span class="fa fa-eye"></span> View Characters</button></a>
    </div>
    <div class="row">

      <div class="col-12">

        <div class="card">
          <div class="card-header">
            <h3><strong>Choose your character</strong></h3>
          </div>
          <div class="card-body">
            <form method="POST" role="form">

              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
              </div>

              <div class="form-group">
                <label for="role">Hitpoints</label>
                <input type="text" class="form-control" id="role">
              </div>

              <div class="form-group">
                <label for="age">Strength</label>
                <input type="text" class="form-control" id="age">
              </div>

              <div class="form-group">
                <label for="force-points">Force Points</label>
                <input type="text" class="form-control" id="force-points">
              </div>

            </form>
            <br>
            <div class="text-right">
              <button type="submit" class="btn btn-primary btn-md" id="add-btn"><span class="fa fa-fire"></span> Add to the Force</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <script type="text/javascript">
    // Question: What does this code do?
    $("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newCharacter = {
        name: $("#name").val().trim(),
        hitpoints: $("#role").val().trim(),
        strength: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
      };

      // Question: What does this code do??
      $.post("/api/characters", newCharacter)
        .then(function(data) {
          console.log("add.html", data);
          alert("Adding character...");
        });
    });
  </script>

</body>
</html>
