var selection = parseInt("00");
var oldselection;
var maths;
var oldinnerText;
var innerText = "";
var cond;
var index;
var str;
let state = 0;
let keyboard = 0;

const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const keyIndex = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 54, 55];

var predKeys = ["A", "B", "C", "D", "E", "F"]

var start = 0;

// parameters
var moveCount = 0; // integer LURD
var totalClicks = 0; // intger LURDS
var moves = []; // array LURDS
var moveAlphabets = []; // array alphabets
var moveTime = []; // array timestamps
var totalTime = 0; // integer

correction();

document.onkeydown = function(e) {
  if (start == 1) {
    moveTime.push(Date.now());
    // sleep(50);
    switch (e.keyCode) {
      case 13:
        /*ENTER*/
        select();
        totalClicks++;
        moves.push("S");
        break;
      case 16:
        /*SHIFT*/
        select();
        totalClicks++;
        moves.push("S");
        break;
      case 32:
        /*SPACE*/
        select();
        totalClicks++;
        moves.push("S");
        break;
      case 37:
        /*LEFT*/
        moveLeft();
        moveCount++;
        moves.push("L");
        break;
      case 38:
        /*UP*/
        moveUp();
        moveCount++;
        moves.push("U");
        break;
      case 39:
        /*RIGHT*/
        moveRight();
        moveCount++;
        moves.push("R");
        break;
      case 40:
        /*DOWN*/
        moveDown();
        moveCount++;
        moves.push("D");
        break;
      case 227:
        window.open("", "_self").close();
        break;
      case 228:
        startTest();
        break;
      default:
        break;
    }
    moveAlphabets.push(document.getElementById(selection).innerHTML);
    if (document.getElementById("inputText").innerText == "TIME TO GO SHOPPING") {
      window.alert("finish!");
      console.log("Move Count: " + moveCount);
      totalClicks += moveCount;
      console.log("Total Clicks: " + totalClicks);
      console.log("Moves: " + moves);
      console.log("Move Alphabets: " + moveAlphabets);
      totalTime = moveTime.length;
      totalTime = moveTime[totalTime - 1] - moveTime[0];
      console.log("Total Time: " + totalTime);
      console.log("Move Times: " + moveTime);
    }
    if (document.getElementById("inputText").innerText == "THE SECOND LARGEST COUNTRY") {
      window.alert("finish!");
      console.log("Move Count: " + moveCount);
      totalClicks += moveCount;
      console.log("Total Clicks: " + totalClicks);
      console.log("Moves: " + moves);
      console.log("Move Alphabets: " + moveAlphabets);
      totalTime = moveTime.length;
      totalTime = moveTime[totalTime - 1] - moveTime[0];
      console.log("Total Time: " + totalTime);
      console.log("Move Times: " + moveTime);
    }
    correction();
  } else {
    switch (e.keyCode) {
      case 227:
        window.open("", "_self").close();
        break;
      case 228:
        startTest();
        break;
      default:
        break;
    };
    moveCount = 0; // integer LURD
    totalClicks = 0; // intger LURDS
    moves = []; // array LURDS
    moveAlphabets = []; // array alphabets
    moveTime = []; // array timestamps
    totalTime = 0;
  }
};

function addBorder() {
  var elementA = document.getElementById(oldselection);
  elementA.classList.replace("text-bg-white", "text-bg-dark");
  var elementB = document.getElementById(selection);
  elementB.classList.replace("text-bg-dark", "text-bg-white");
};

/*
65  75 85  95
00 01 02 03 04 05
10 11 12 13 14 15
20 21 22 23 24 25
30 31 32 33 34 35
40 41 42 43 44 45
50 51 52 53 54 55
65  75  85  95
*/

/*
1165  1175  1185  1195
1100 1101 1102 1103 1104 1105
1110 1111 1112 1113 1114 1115
1120 1121 1122 1123 1124 1125
1130 1131 1132 1133 1134 1135
1140 1141 1142 1143 1144 1145
1150 1151 1152 1153 1154 1155
1165  1175  1185  1195
*/

/* STATE 1*/
// function select() {
//   animation();
//   if (selection == 85) {
//     document.getElementById("inputText").innerText += " ";
//     secondKeyboard();
//     return;
//   } else if (selection == 95) {
//     str = document.getElementById("inputText").innerText
//     str = str.substring(0, str.length - 1);
//     document.getElementById("inputText").innerText = str;
//     secondKeyboard();
//     return;
//   } else if (selection > 100) {
//     if (selection == 107) {
//       str = inputText.innerText
//       str = str.substring(0, str.length - 1);
//       inputText.innerText = str;
//       secondKeyboard();
//     } else {
//       inputText.innerText += predKeys[selection - 101];
//       secondKeyboard();
//     }
//   } else {
//     cond = selection;
//     const isKey = (element) => element == cond;
//     index = keyIndex.findIndex(isKey);
//     innerText = keys[index];
//     document.getElementById("inputText").innerText += innerText;
//     secondKeyboard();
//     return;
//   }
// }

async function select() {
  animation();
  if (selection == 85) {
    document.getElementById("inputText").innerText += " ";
  } else if (selection == 95 || selection == 107) {
    str = document.getElementById("inputText").innerText;
    str = str.substring(0, str.length - 1);
    document.getElementById("inputText").innerText = str;
  } else if (selection > 100) {
    inputText.innerText += predKeys[selection - 101];
  } else {
    cond = selection;
    const isKey = (element) => element == cond;
    index = keyIndex.findIndex(isKey);
    innerText = keys[index];
    document.getElementById("inputText").innerText += innerText;
  }

  // Now that the inputText has been updated, get new predictions
  const currentText = document.getElementById("inputText").innerText;
  const predictions = await getPredictions(currentText);

  // Update the predictive text row with the new predictions
  if (predictions && predictions.length > 0) {
    for (let i = 0; i < predictions.length; i++) {
      document.getElementById(101 + i).innerText = predictions[i];
      predKeys[i] = predictions[i]; // Also update the predKeys array
    }
  }

  secondKeyboard(); // Call this function to handle any additional keyboard UI updates
}

function moveLeft() {
  if (selection == 85) {
    oldselection = selection;
    selection = 95;
    addBorder();
    return;
  } else if (selection == 95) {
    oldselection = selection;
    selection = 85;
    addBorder();
    return;
  } else if (selection == 0) {
    oldselection = selection;
    selection = 5;
    addBorder();
    return;
  } else if (selection == 10) {
    oldselection = selection;
    selection = 15;
    addBorder();
    return;
  } else if (selection == 20) {
    oldselection = selection;
    selection = 25;
    addBorder();
    return;
  } else if (selection == 30) {
    oldselection = selection;
    selection = 35;
    addBorder();
    return;
  } else if (selection == 40) {
    oldselection = selection;
    selection = 45;
    addBorder();
    return;
  } else if (selection == 50) {
    oldselection = selection;
    selection = 55;
    addBorder();
    return;
  } else if (selection == 101) {
    oldselection = selection;
    selection = 107;
    addBorder();
    return;
  } else if (selection == 102) {
    oldselection = selection;
    selection = 101;
    addBorder();
    return;
  } else if (selection == 103) {
    oldselection = selection;
    selection = 102;
    addBorder();
    return;
  } else if (selection == 104) {
    oldselection = selection;
    selection = 103;
    addBorder();
    return;
  } else if (selection == 105) {
    oldselection = selection;
    selection = 104;
    addBorder();
    return;
  } else if (selection == 107) {
    oldselection = selection;
    selection = 104;
    addBorder();
    return;
  } else {
    oldselection = selection;
    maths = selection - 1;
    selection = maths;
    addBorder();
    return;
  }
  return;
}

function moveRight() {
  if (selection == 85) {
    oldselection = selection;
    selection = 95;
    addBorder();
    return;
  } else if (selection == 95) {
    oldselection = selection;
    selection = 85;
    addBorder();
    return;
  } else if (selection == 5) {
    oldselection = selection;
    selection = 0;
    addBorder();
    return;
  } else if (selection == 15) {
    oldselection = selection;
    selection = 10;
    addBorder();
    return;
  } else if (selection == 25) {
    oldselection = selection;
    selection = 20;
    addBorder();
    return;
  } else if (selection == 35) {
    oldselection = selection;
    selection = 30;
    addBorder();
    return;
  } else if (selection == 45) {
    oldselection = selection;
    selection = 40;
    addBorder();
    return;
  } else if (selection == 55) {
    oldselection = selection;
    selection = 50;
    addBorder();
    return;
  } else if (selection == 101) {
    oldselection = selection;
    selection = 102;
    addBorder();
    return;
  } else if (selection == 102) {
    oldselection = selection;
    selection = 103;
    addBorder();
    return;
  } else if (selection == 103) {
    oldselection = selection;
    selection = 104;
    addBorder();
    return;
  } else if (selection == 104) {
    oldselection = selection;
    selection = 107;
    addBorder();
    return;
  } else if (selection == 107) {
    oldselection = selection;
    selection = 101;
    addBorder();
    return;
  } else if (selection == 106) {
    // oldselection = selection;
    // selection = 101;
    // addBorder();
    // return;
  } else {
    oldselection = selection;
    maths = selection + 1;
    selection = maths;
    addBorder();
    return;
  }
  return;
}

function moveUp() {
  if (selection == 85) {
    oldselection = selection;
    selection = 51;
    addBorder();
    return;
  } else if (selection == 95) {
    oldselection = selection;
    selection = 54;
    addBorder();
    return;
  } else if (selection == 0) {
    oldselection = selection;
    selection = 101;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 1) {
    oldselection = selection;
    selection = 102;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 2) {
    oldselection = selection;
    selection = 103;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 3) {
    oldselection = selection;
    selection = 104;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 4) {
    oldselection = selection;
    selection = 107;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 5) {
    oldselection = selection;
    selection = 107;
    keyboard = 1;
    document.getElementById("second").classList.toggle("offactive");
    document.getElementById("square").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 101) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
  } else if (selection == 102) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
  } else if (selection == 103) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
  } else if (selection == 104) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
  } else if (selection == 105) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
  } else if (selection == 106) {
    // oldselection = selection;
    // selection = 105;
    // addBorder();
    return;
} else {
  oldselection = selection;
  maths = selection - 10;
  selection = maths;
  addBorder();
  return;
}

}

function moveDown() {
  if (selection == 85) {
    // oldselection = selection;
    // selection = 0;
    // addBorder();
    return;
  } else if (selection == 95) {
    // oldselection = selection;
    // selection = 3;
    // addBorder();
    return;
  } else if (selection == 50) {
    oldselection = selection;
    selection = 85;
    addBorder();
    return;
  } else if (selection == 51) {
    oldselection = selection;
    selection = 85;
    addBorder();
    return;
  } else if (selection == 52) {
    oldselection = selection;
    selection = 85;
    addBorder();
    return;
  } else if (selection == 53) {
    oldselection = selection;
    selection = 95;
    addBorder();
    return;
  } else if (selection == 54) {
    oldselection = selection;
    selection = 95;
    addBorder();
    return;
  } else if (selection == 55) {
    oldselection = selection;
    selection = 95;
    addBorder();
    return;
  } else if (selection == 101) {
    oldselection = selection;
    selection = 0;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 102) {
    oldselection = selection;
    selection = 1;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 103) {
    oldselection = selection;
    selection = 2;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 104) {
    oldselection = selection;
    selection = 3;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 105) {
    oldselection = selection;
    selection = 4;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else if (selection == 107) {
    oldselection = selection;
    selection = 5;
    keyboard = 0;
    document.getElementById("square").classList.toggle("offactive");
    document.getElementById("second").classList.toggle("offactive");
    addBorder();
    return;
  } else {
    oldselection = selection;
    maths = selection + 10;
    selection = maths;
    addBorder();
    return;
  }
}

function animation() {
  var selected = document.getElementById(selection);
  selected.classList.add("animate");
  setTimeout(() => {
    selected.classList.remove("animate");
  }, 250);
}

function correction() {
  if (!CSS.supports("'selector(html:has(body))")) {
    if (!document.getElementById(85).classList.contains("text-bg-white")) {
      document.getElementById(85).classList.replace("text-bg-dark", "text-bg-primary");
    }
    if (selection == 85) {
      document.getElementById(85).classList.replace("text-bg-primary", "text-bg-white");
    }
    if (!document.getElementById(95).classList.contains("text-bg-white")) {
      document.getElementById(95).classList.replace("text-bg-dark", "text-bg-primary");
    }
    if (selection == 95) {
      document.getElementById(95).classList.replace("text-bg-primary", "text-bg-white");
    }
  }
}

async function getPredictions(sequence) {
  try {
    const response = await fetch(`https://prediction-keyboard.onrender.com/predict_no_space?sequence=${sequence}&num_predictions=4`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // This should show the array of arrays from your screenshot

    // Extract just the letters from the array of arrays
    const letters = data.map(item => item[0]); // Assuming that the letter is the first element in each sub-array
    console.log(letters); // This should now be an array of letters
    return letters;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    return []; // Return an empty array if there is an error
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function startTest() {
	document.getElementById("curtain").classList.remove("d-none");
	start = 1;
	console.log(start);
}