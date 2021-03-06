jQuery(document).ready(function() {

// Things I will show:
// Find and modify nodes in the DOM tree
// Use various CSS selectors as jQuery selectors to gram nodes in the DOM

  // element selector

  $("span").text("redrum o__o");

  // ID selector
  // use of $(this) keyword

  $("#hireMe").hover(
    function() {
      var $this = $(this);
      $this.data("hireMe", $this.text());
      $this.text("HIRED!!!1!");
    },
    function () {
      var $this = $(this);
      $this.text($this.data("hireMe"));
    }
  );

  // Class selector

  $(".scale").hover(function() {
    $("#hidden_div").show();
  }).mouseout(function() { 
    $("#hidden_div").hide();
  });


  // Descendant selector

  $("#welcome h1").text("Built with Meeps");

  // Select only direct children
// need to fix
//$("#meep > li").text("Booop");

  // pseudo classes
  $("#meep li:odd").text("I am so odd");


  // this is a faster alternative to other selectors:
  $("#meep").find("li");

  // traveling up and down the DOM
  $("h2").last().text("here I am!");
  $("li").first().next().prev().text("no, here I am!");

  //  appending to the DOM
//var price = $("<p>the price</p>");
//$(".vacation").append(price);
  //  removing from the DOM
//$("button").remove();

  //  watching for click
    //  jQuery object methods:
      //  .on(<event>, <event handler>)
  $(".vacation").on("click", "button", function () {

  // this will run when the button is clicked

    //var price = $("<p>the price</p>");
    //replaced for future buttons
    var vacation = $(this).closest(".vacation");
    var amount = vacation.data("price");
    var price = $("<p>$" + amount + "</p>");

    // put this instead of .after() in case things move around
    vacation.append(price);
    $(this).remove();

  });

});
