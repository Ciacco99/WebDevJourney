console.log("Destructuring Assignements");


var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// destructuring syntax
// read like "get value of field x and assign it to a"
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const {tomorrow: tempOfTomorrow} = avgTemperatures; // destructuring

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79



const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {tomorrow : { max : maxOfTomorrow }} = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


// we can't decide which exact index to put into
// but we can skip so we out what we want:
const [k, w, ,l] = [1, 2, 3, 4, 5, 6];
console.log(k, w, l);


let m = 8, n = 6;
(() => {
  "use strict"; // we can use destructuring to switch places
  [m,n] = [n, m];
})();
console.log(m);
console.log(n);


// reassign array elements with rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; // do nothing for first two, rest same.

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);




// Destructoring to pass Object as function parameter
// Used on API calls, so we use only what's necessary of what info we get

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
/*
const half = (function() {

  return function half(stats) { // instead of "stats" which would pass the entire object inside. we just need max and min... see under
    return (stats.max + stats.min) / 2.0;
  };

})();
*/
const half = (function() {

  return function half({min, max}) {
    return (max + min) / 2.0;
  };

})();

console.log(stats);
console.log(half(stats)); // input the whole stats object






//
