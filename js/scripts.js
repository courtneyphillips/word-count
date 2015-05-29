var wordOrder = function(phrase) {
  var phraseArray = phrase.split(" ");
  var count = [];
  var arrayLength = phraseArray.length;

  for (var i = 0; i < arrayLength; i++) {
    var werd = phraseArray[i];
    count[werd] = count[werd] + 1 || 1;
  }

  var keys = []
  for (var word in count) {
    keys.push([word, count[word]])
  }

  keys = keys.sort(function(a,b){return b[1] - a[1]});

count.sort(function(a,b){return a - b})

//   count.sort(function(a,b) {
//     // return (a.count[werd] - b.count[werd])
//
//     if (a.count[werd] > b.count[werd]) {
//       return 1;
//     }
//     if (a.count[werd] < b.count[werd]) {
//       return -1;
//     }
//     return 0;
//   })
//
  return keys;
};
