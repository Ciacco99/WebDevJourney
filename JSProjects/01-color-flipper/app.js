const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //console.log(document.body); // nice
  const randomNumber = Math.floor(Math.random()*colors.length); // get rand in [0,3] as index of colors
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});
