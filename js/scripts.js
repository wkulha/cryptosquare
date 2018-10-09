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
//Function to read down the columns of the grid from left to right.
let reform = function(twoDimensionalArray) {
  //setting the number of rows to be equal to the length of the number of rows in the grid.
  let rows = twoDimensionalArray.length;
  //setting columns to be equal to the number of columns in the grid.
  let columns = twoDimensionalArray[0].length;
  //creating an array to push each letter to.
  let reformed = [];
  //incrememnt rows to go from top to bottom rather than left to right.
  for(let row = 0; row < columns; row++) {
    //incrememnt columns so that once we get to the end we move to the next row.
    for(let column = 0; column < rows; column ++) {
      //this will return true as long as we are at a coordinate on the grid
      if(twoDimensionalArray[column][row]) {
        reformed.push(twoDimensionalArray[column][row]);
      }
    }
  }
  //we return the initially blank array, once we have moved through every coordinate of the grid.
  return reformed;
}
//Function to join the reformed array at five character intervals.
let encrypt = function(reformedArray) {
  //set blank string to hold each 5 letter word of our final encrypted message
  let encryptedMessage = "";
  //set a count to work through five letter chunks of the array.
  let count = 0;
  //work through five letter chunks until and then slice them form reformedArray, join them, add a space after, and push to blank string.
  for (let i = 0; i < reformedArray.length; i++) {
    if (i % 5 === 0) {
      count += 1;
      encryptedMessage += reformedArray.slice(i-5, i).join("") + " ";
    }
  }
  //for left over words.
  if ((count-1)*5 <= reformedArray.length) {
    encryptedMessage += reformedArray.slice((count-1)*5).join("");
  }
  return encryptedMessage;
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
      let reformed = reform(grid);
      let encrypted = encrypt(reformed);
      console.log(encrypted);
    }
  });
});
