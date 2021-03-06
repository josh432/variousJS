// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  //create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  //if mutiple words, put into array
  const longestWordArray = sorted.filter(
    word => word.length === sorted[0].length
  );
  //check if more than one array val
  if (longestWordArray.length === 1) {
    //return the word
    return longestWordArray[0];
  } else {
    return longestWordArray;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //SOLUTION 1 - DO WHILE LOOP

  //   // initialize a chunked array
  //   const chunkedArr = [];
  //   // set index
  //   let i = 0;

  //   //loop while index is less than the array length
  //   while (i < arr.length) {
  //     //Slice out from the index to the index + the chunk length and push
  //     //On to the chunked array
  //     chunkedArr.push(arr.slice(i, i + len));
  //     //increment by chunk length
  //     i += len;
  //   }
  //   return chunkedArr;

  //SOLUTION 2 - FOR EACH

  //Initialize array
  const chunkedArr = [];

  //Loop through array
  arr.forEach(val => {
    //Get last element
    const last = chunkedArr[chunkedArr.length - 1];
    // Check if last and if last length is equal to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  //SOLUTION 1 - REDUCE
  return arrays.reduce((a, b) => a.concat(b));

  // SOLUTION 2 - APPLY
  // return [].concat.apply([], arrays);

  //SOLUTION 3 - SPREAD OPERATOR
  //   function add(a, b, c) {
  //     return a + b + c;
  //   }
  //   const arr = [1, 2, 3];
  //   console.log(add(...arr));

  // return [].concat(...arrays);
}
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  // console.log(formatStr(str1));
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  //Solution - REPLACE
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  return newStr;
}

// Call Function
const output = letterChanges("Hello therez");

console.log(output);
