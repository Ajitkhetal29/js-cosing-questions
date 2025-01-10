const sent = "Welcome To coding World !";

function findLongestWord(sentence) {
  var sentArr = sentence.split(" ");

  var longestWord = sentArr[0];

  for (let i = 0; i < sentArr.length; i++) {
    if (sentArr[i].length > longestWord.length) {
      longestWord = sentArr[i];
    }
  }

  return longestWord;
}
console.log(findLongestWord(sent));
