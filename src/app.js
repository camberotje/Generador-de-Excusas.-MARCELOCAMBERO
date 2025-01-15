/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

const excuse =
  getRandomElement(who) +
  " " +
  getRandomElement(action) +
  " " +
  getRandomElement(what) +
  " " +
  getRandomElement(when);

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuse;
};
