//Business logic
//Function to remove punctuation and spaces from a string.
let cleanUp = function(string) {
  let noSpaceNoPunctuation = string.replace(/[^\w\\s]|_/g, "")
  return noSpaceNoPunctuation.toLowerCase();
}
//function to calculate the size of the square for encryption.
let squareSize = function(stringLength) {
  let size = Math.sqrt(stringLength);
  if (Number.isInteger(size)) {
    return [size, size];
  } else {
    return [(parseInt(size) + 1), parseInt(size)]
  }
}




//User logic

$(document).ready(function() {
  $('#user_form').submit(function(event) {
    event.preventDefault();
    let userString = $('#user_message').val();
    if(userString) {
      let cleanString = cleanUp(userString);
      let size = squareSize(cleanString.length);
      console.log(size);
    }
  });
});
