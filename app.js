// COMPLETE THE CODE

$(function() {
    // Exercise 1: Find all <li> elements within a <ul> and change their text color to blue
    $("#exercise1Button").on('click', function() {
      // $("#exercise1 ul").find('li').css("color", "blue");
      $("#exercise1 ul").children('li').css("color", "blue");
    });

    // Exercise 2: Find the parent <div> of a paragraph and change its background color
    $("#exercise2Button").on('click', function() {
      $("#exercise2 p").parent("div").css("background-color", "orange");
    });

    // Exercise 3: Find all ancestor <div> elements of a paragraph and change their background color
    $("#exercise3Button").on('click', function() {
      $("#exercise3 p").parents("div").css("background-color", "green");
    });

    // Exercise 4: From the `this` selector, find and hide only the second <p> sibling of the <h3> element. The `this` keyword refers to the clicked button
    $("#exercise4Button").on('click', function() {
      $(this).next().next().next().hide();
    });

    // Exercise 5: From the `this` selector, find all <p> elements within the <div> and add a border to them. The `this` keyword refers to the clicked button
    $("#exercise5Button").on('click', function() {
      $(this).next('div').find('p').css("border", "3px solid violet");
    });

    // Exercise 6: From the `this` selector, find and change the color of <span>Item 5</span>. The `this` keyword refers to the clicked button
    $("#exercise6Button").on('click', function() {
      $(this).prev().prev('div').find('span').css('color', 'yellow');
    });
})