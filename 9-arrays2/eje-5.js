'use strict';
// let tree = [];


function happyTree(num) {
  let star = ' '.repeat(num-1) + '*';
  console.log(star);
  for (let i = 0; i < num; i++) {
    let leftBranch = ' '.repeat(num-1-i) + '▲'.repeat(i);
    let rightBranch = '▲'.repeat(i+1);
    console.log(leftBranch + rightBranch);
  }
  let tree = ' '.repeat(num-1) + '|';
  console.log(tree);

}