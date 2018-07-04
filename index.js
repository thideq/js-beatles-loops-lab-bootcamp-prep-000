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
  // my function here
  var myArray = [];
  for (i=0; i<array1.length;i++) {
    myString = array1[i] + " plays " + array2[i]
    myArray[i]=myString;
  }
  return myArray;
}

theBeatlesPlay(arrayOfMusicians, arrayOfInstruments);
//for (i=0;i<myArray.length-1;i++)
console.log(myArray);

function johnLennonFacts(array) {
  var i = 0;
  console.log(array.length);
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
    myArray2.add("I love the Beatles!");
    n++;
  }
  while (n<15);
  return myArray2;
}

iLoveTheBeatles(10);
