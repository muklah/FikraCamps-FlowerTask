const fs = require('fs');

let result;

let data = fs.readFileSync('./flower.txt', 'utf8')
  .trim()
  .split('\n');

function filterLetter(data, index, letter) {
    result = data.filter(word => word.charAt(index) === letter)
  return result;
}

console.log(data.length);
console.log(filterLetter(data, 0, 'S'));
console.log(data.length-filterLetter(data, 0, 'S').length);
console.log(filterLetter(data, 0, 'M'));

for (i=0; i < data.length; ++i) 
     if (data[i].length == 5)
console.log(data[i]);

