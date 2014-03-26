jQuery(document).ready(function() {

// Things I will show:
// Find and modify nodes in the DOM tree
// Use various CSS selectors as jQuery selectors to gram nodes in the DOM

  // element selector

$("span").text("redrum o__o");

  // ID selector

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

// Traverse the DOM and add/edit DOM elements

  // Descendant selector

$("#welcome h1").text("Built with Meeps");

  // Select only direct children
// need to fix
//$("#meep > li").text("Booop");

  // pseudo classes
$("#meep li:odd").text("I am so odd");

  // Traversing the Dom
  // this is a faster alternative to other selectors:
$("#meep").find("li");

$("h2").last().text("here I am!");

$("li").first().next().prev().text("no, here I am!");


// keyboard events, link layover

});
