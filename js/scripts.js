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
//Function to make the grid out of the array.
//size will determine the rows and columns.
let makeGrid = function(string, size) {
  //Set a variable as an empty array to hold all our rows.
  let grid = [];
  //Set a variable to increment through the string.
  let i = 0;
  //Create a new row and incrememnt rows...
  for (let rows = 0; rows < size[0]; rows++) {
    let row = [];
    //When the number of letters inserted into columns is = the number of columns that should be there.
    for(let col = 0; col < size[1]; col++) {
      //Push the letter we are on to the row array.
      row.push(string[i]);
      //Increment the letter we are on by one.
      i += 1;
    }
    //Once a row is full, we push it to the grid and empty the row variable to start a new row.
    grid.push(row);
    row = [];
  }
  //Once we've incremented through the variable i to the number of characters in the string, we return the grid.
  i += size[0]*size[1]
  return grid;
}




//User logic

$(document).ready(function() {
  $('#user_form').submit(function(event) {
    event.preventDefault();
    let userString = $('#user_message').val();
    if(userString) {
      let cleanString = cleanUp(userString);
      let size = squareSize(cleanString.length);
      let grid = makeGrid(cleanString, size);
      console.log(grid);
    }
  });
});
