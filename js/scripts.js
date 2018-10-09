//Business logic
//Function to remove punctuation and spaces from a string.
let cleanUp = function(string) {
  let noSpaceNoPunctuation = string.replace(/[^\w\\s]|_/g, "")
  return noSpaceNoPunctuation.toLowerCase();
}




//User logic

$(document).ready(function() {
  $('#user_form').submit(function(event) {
    event.preventDefault();
    let userString = $('#user_message').val();
    console.log(cleanUp(userString));
  });
});
