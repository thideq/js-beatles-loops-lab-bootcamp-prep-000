// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var arrayOfMusicians = ['Mozart', 'Bach', 'Grieg'];
    arrayOfInstruments = ['Piano', 'Trumpet', 'Saxo'];
    myArray = [];
    myString = "Bonjour";

function theBeatlesPlay(array1, array2) {
  var myArray = [];
  var       i =  0 ;
  for (i=0; i<array1.length;i++) {
    myString = array1[i] + " plays " + array2[i]
    myArray.push(myString);
  }
  return myArray;
}

theBeatlesPlay(arrayOfMusicians, arrayOfInstruments);
//for (i=0;i<myArray.length-1;i++)
console.log(myArray);

function johnLennonFacts(array) {
  var i=0;
  while (i<array.length) {
    array[i] = array[i] + "!!!";
    i++;
  } 
  return array;
}
johnLennonFacts(facts);

function iLoveTheBeatles(n) {
  var myArray2 = [];
  do { 
    myArray2.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  return myArray2;
}

console.log(iLoveTheBeatles(10));
