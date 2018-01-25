var ticketValue = 8;

function Ticket(movieType, movieTime, movieAge) {
  this.movieType = movieType;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
}

// function findPrice (movieType, movieTime, movieAge) {
//   if (Ticket.movieType === "new") {
//     ticketValue += 2;
//   }
// }




console.log(ticketValue);

$(document).ready(function() {

  $("#movieForm").submit(function(event) {
    event.preventDefault();
    var movieType = $("#movieType").val();
    var movieTime = $("#movieTime").val();
    var movieAge = $("#movieAge").val();

    var ticketPrice = new Ticket(movieType, movieTime, movieAge);
    console.log(ticketValue);

    if (movieType === "new") {
      ticketValue += 2;
    };
    if (movieTime === "matinee") {
      ticketValue += 1;
    } if (movieTime === "prime") {
      ticketValue += 2;
    } if (movieAge === "kids") {
      ticketValue -= 2;
    } if (movieAge === "seniors") {
      ticketValue -= 1;
    };
    $("#show-price").text(ticketValue);

    console.log(ticketValue);

  });
});
