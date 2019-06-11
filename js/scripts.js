var items = [];
var cards = ["ace of ", "2 of ", "3 of ", "4 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "jack of ", "queen of ", "king of "];

$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var suit = $("input#inputItem").val();

    items.push(suit);
    console.log(items);
    console.log(cards);
    $("form")[0].reset();
  });
  $("#showList").click(function() {
    console.log(items);
    console.log(cards);
    items.forEach(function(item) {
      cards.forEach(function(card) {
        $("#output").append("<li>" + card + item + "</li>");
      });
      items = [];
      console.log(items);
    });
  });

});
