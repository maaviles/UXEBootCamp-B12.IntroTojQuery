jQuery(document).ready(function() {

// Things I will show:
// Find and modify nodes in the DOM tree
// Use various CSS selectors as jQuery selectors to gram nodes in the DOM

  // element selector

$("li").text("redrum o__o");

  // ID selector

$("#hireMe").hover(
  function() {
    var $this = $(this);
    $this.data("HIRE ME", $this.text());
    $this.text("HIRED!!!1!");
  },
  function () {
    var $this = $(this);
    $this.text($this.data("HIRE ME"));
  }
);

  // Class selector

$(".scale").hover(function() {
  $("#hidden_div").show();
}).mouseout(function() { 
  $("#hidden_div").hide();
});

// Traverse the DOM and add/edit DOM elements

});
