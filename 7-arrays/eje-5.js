'use strict';

let arr = [2, 3, 4, 5, 6];

function getMedia(array) {
  let media = 0;

  for (const num of array) {
    media = media + num;
  }
  return media = media / array.length;
}

getMedia(arr)