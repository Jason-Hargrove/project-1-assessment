// ========= dom nodes =========
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const number = document.querySelector('#number');


// ========== the main numbers being manipulated ===========
// ----- top number -----
let newNumber = 0;


// ========== functions ==========
// --------- creating the starting number ----------
const startNumber = () => {
  const newHeading = document.createElement('h1');
  const newContent = document.createTextNode(newNumber);
  newHeading.appendChild(newContent);
  number.appendChild(newHeading);
}
startNumber();

// --------- color change  ----------
const colorChange = () => {
  if (newNumber <= 0) {
    document.querySelector('h1').style.color = "red";
  }
  if (newNumber >= 1) {
    document.querySelector('h1').style.color = "black";
  }
}


// ========== Listeners ==========
// ----- adding -----
add.addEventListener('click', function(e) {
  const val = parseInt(document.querySelector('input.parse').value, 10);
  newNumber += val;
  colorChange();
  document.querySelector('h1').innerHTML = newNumber;
});

// ----- subtracting -----
subtract.addEventListener('click', function(e) {
  const val = parseInt(document.querySelector('input.parse').value, 10);
  newNumber -= val;
  colorChange();
  document.querySelector('h1').innerHTML = newNumber;
});


// ↓↓↓↓↓ --------- color change buttons listeners ---------- ↓↓↓↓↓

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
