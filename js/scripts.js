function Ticket(movieType, movieTime, movieAge, moviePrice) {
  this.movieType = movieType;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
  this.moviePrice = moviePrice


  if (movieType === "new") {
    this.moviePrice += 2;
  }


  if (movieTime === "matinee") {
    this.moviePrice += 1;
  } else if (movieTime === "prime") {
    this.moviePrice += 2;
  }


  if (movieAge === "kids") {
    this.moviePrice -= 2;
  } else if (movieAge === "seniors") {
    this.moviePrice -= 1;
  };

}

$(document).ready(function() {
  var reset = function() {
    var movieType = $("#movieType").val("new");
    var movieTime = $("#movieTime").val("prime");
    var movieAge = $("#movieAge").val("adults");
    $("#show-price").text('')
    $("#reset").hide();

  }
  $("#movieForm").submit(function(event) {
    event.preventDefault();
    var movieType = $("#movieType").val();
    var movieTime = $("#movieTime").val();
    var movieAge = $("#movieAge").val();
    var moviePrice = 8;

    var ticket = new Ticket(movieType, movieTime, movieAge, moviePrice);


    var moviePriceDisplayText = ("Here is your movie ticket price ");

    $("#show-price").text(moviePriceDisplayText + ticket.moviePrice);
    $("#reset").show();

  });

  $("#reset").click(reset)
  reset();
});
