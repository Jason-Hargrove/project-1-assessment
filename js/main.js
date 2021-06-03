// ========= dom nodes =========
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const parse = document.querySelector('#parse');
const number = document.querySelector('#number');
const heading = document.querySelector('h1');


// ========== the main numbers being manipulated ===========
// ----- top number -----
let newNumber = 0;

// ----- bottom number -----
// ---- works ----
let bottomNumber = [];


// ========== functions ==========
// --------- creating the starting number ----------
const startNumber = () => {
  const newHeading = document.createElement('h1');
  const newContent = document.createTextNode(newNumber);
  newHeading.appendChild(newContent);
  number.appendChild(newHeading);
}
startNumber();

// --------- color change number ----------
const colorChange = () => {
  if (newNumber <= 0) {
    document.querySelector('h1').style.color = "red";
  }
  if (newNumber >= 1) {
    document.querySelector('h1').style.color = "black";
  }
}

// ---------- color change button ----------


// ========== Listeners ==========

/////////////////////////////// focus //////////////////////////////////////////////

// ----- adding -----
add.addEventListener('click', function(e) {
  const val = parseInt(document.querySelector('input.valueInputField').value, 10);
  newNumber++;
  colorChange();
  document.querySelector('h1').innerHTML = newNumber;

  console.log(val);

  // bottomNumber.push(e);

  // let value = this.value;
  // console.log(bottomNumber)

});

/////////////////////////////// end focus //////////////////////////////////////////////

// ----- subtracting -----
subtract.addEventListener('click', function(e) {
  newNumber--;
  colorChange();
  document.querySelector('h1').innerHTML = newNumber;
});

// ----- adding button color change -----
add.addEventListener('mouseover', function(e) {
  add.style.color = "rgba(191, 191, 191, 1)";
  add.style.background = "rgba(255,255,255, 1)";
});

add.addEventListener('mouseout', function(e) {
  add.style.color = "rgba(255,255,255, 1)";
  add.style.background = "rgba(191, 191, 191, 1)";
});

// ----- subtracting button color change -----
subtract.addEventListener('mouseover', function(e) {
  subtract.style.color = "rgba(191, 191, 191, 1)";
  subtract.style.background = "rgba(255,255,255, 1)";
});

subtract.addEventListener('mouseout', function(e) {
  subtract.style.color = "rgba(255,255,255, 1)";
  subtract.style.background = "rgba(191, 191, 191, 1)";
});
