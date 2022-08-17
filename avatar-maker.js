let cwd = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Reference number for each image, e.g. base1.png
let baseNum = 1;
let hairNum = 1;
let hairColourNum = 1;
let eyesNum = 1;

// Create images
let base = document.createElement("img");
let hair = document.createElement("img");
let eyes = document.createElement("img");

window.onload = () => { // This is an arrow function, rewritten from "window.onload = function() {"
  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }

  eyes.src = cwd + "/img/eyes" + eyesNum + ".png";
  eyes.onload = () => { buildAvatar(); }
}

function buildAvatar() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = canvas.width;

  ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(hair, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(eyes, 0, 0, canvas.width, canvas.height);
}

function baseChange(direction) {
  switch(direction) {
    case "previous":
      if (baseNum == 1) { baseNum = 10; }
      else { baseNum -= 1; };
      break;
    case "next":
      if (baseNum == 10) { baseNum = 1; }
      else { baseNum += 1; }
      break;
  }

  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }
}

function hairChange(direction) {
  switch(direction) {
    case "previous":
      if (hairNum == 1) { hairNum = 2; }
      else { hairNum -= 1; };
      break;
    case "next":
      if (hairNum == 2) { hairNum = 1; }
      else { hairNum += 1; }
      break;
  }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }
}

function hairColourChange(direction) {
  switch(direction) {
    case "previous":
      if (hairColourNum == 1) { hairColourNumNum = 5; }
      else { hairColourNum -= 1; };
      break;
    case "next":
      if (hairColourNum == 5) { hairColourNum = 1; }
      else { hairColourNum += 1; }
      break;
  }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }
}

function eyesChange(direction) {
  switch(direction) {
    case "previous":
      if (eyesNum == 1) { eyesNum = 3; }
      else { eyesNum -= 1; };
      break;
    case "next":
      if (eyesNum == 3) { eyesNum = 1; }
      else { eyesNum += 1; }
      break;
  }

  eyes.src = cwd + "/img/eyes" + eyesNum + ".png";
  eyes.onload = () => { buildAvatar(); }
}