let singleQuotes =' single quotes string in javascript '
let doubleQuotes = "double quotes string in javascript"
console.log(singleQuotes)
console.log(doubleQuotes)


  singleQuotes.charAt(5)  // to get at particular character
  let ascii =singleQuotes.charCodeAt(5) // gives ascii of char at index 5
  console.log(ascii)
  let  substr = singleQuotes.substring(2,4)  //[2 inclusive,4 exclusive)
  console.log(substr)

  // split string on basis of particular character
  let strsplit = singleQuotes.split(" ") // split on basis of " " space
  console.log(strsplit) 



  let strjoin= strsplit.join("+") // this join metod only works with split method string 
  // jis basis par split kiya us hi jagah join work karega
  console.log(strjoin)

let single= singleQuotes.trim(); // The trim() method removes whitespace from both sides of a string.
//The trim() method does not change the original string.
console.log(single)





