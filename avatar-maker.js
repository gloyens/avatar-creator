let cwd = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Reference number for each image, e.g. base1.png
let backgroundNum = 1;
let baseNum = 1;
let hairNum = 1;
let hairColourNum = 1;
let eyebrowsNum = 1;
let eyesNum = 1;
let noseNum = 1;
let cheeksNum = 1;
let mouthNum = 1;
let bodyNum = 1;
let accessoryNum = 1;

// Create images
let background = document.createElement("img");
let base = document.createElement("img");
let hair = document.createElement("img");
let eyebrows = document.createElement("img");
let eyes = document.createElement("img");
let nose = document.createElement("img");
let cheeks = document.createElement("img");
let mouth = document.createElement("img");
let body = document.createElement("img");
let accessory = document.createElement("img");

window.onload = () => { // This is an arrow function, rewritten from "window.onload = function() {"
  background.src = cwd + "/img/background" + backgroundNum + ".png";
  background.onload = () => { buildAvatar(); }

  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }

  eyebrows.src = cwd + "/img/eyebrows" + eyebrowsNum + ".png";
  eyebrows.onload = () => { buildAvatar(); }

  eyes.src = cwd + "/img/eyes" + eyesNum + ".png";
  eyes.onload = () => { buildAvatar(); }

  nose.src = cwd + "/img/nose" + noseNum + "-" + baseNum + ".png";
  nose.onload = () => { buildAvatar(); }

  cheeks.src = cwd + "/img/cheeks" + cheeksNum + "-" + baseNum + ".png";
  cheeks.onload = () => { buildAvatar(); }

  mouth.src = cwd + "/img/mouth" + mouthNum + ".png";
  mouth.onload = () => { buildAvatar(); }

  body.src = cwd + "/img/body" + bodyNum + ".png";
  body.onload = () => { buildAvatar(); }

  accessory.src = cwd + "/img/accessory" + accessoryNum + ".png";
  accessory.onload = () => { buildAvatar(); }
}

function saveImage(img) {
  var dataURL = canvas.toDataURL("image/png");
  var downloadLink = document.createElement('a');
  downloadLink.href = dataURL;
  downloadLink.download = 'avatar.png';

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function buildAvatar() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = canvas.width;

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(cheeks, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(hair, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(eyebrows, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(eyes, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(nose, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(mouth, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(body, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(accessory, 0, 0, canvas.width, canvas.height);
}

function backgroundChange(direction) {
  switch(direction) {
    case "previous":
      if (backgroundNum == 1) { backgroundNum = 10; }
      else { backgroundNum -= 1; };
      break;
    case "next":
      if (backgroundNum == 10) { backgroundNum = 1; }
      else { backgroundNum += 1; }
      break;
  }

  background.src = cwd + "/img/background" + backgroundNum + ".png";
  background.onload = () => { buildAvatar(); }
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
  nose.src = cwd + "/img/nose" + noseNum + "-" + baseNum + ".png";
  cheeks.src = cwd + "/img/cheeks" + cheeksNum + "-" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }
}

function hairChange(direction) {
  switch(direction) {
    case "previous":
      if (hairNum == 1) { hairNum = 10; }
      else { hairNum -= 1; };
      break;
    case "next":
      if (hairNum == 10) { hairNum = 1; }
      else { hairNum += 1; }
      break;
  }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }
}

function hairColourChange(direction) {
  switch(direction) {
    case "previous":
      if (hairColourNum == 1) { hairColourNum = 10; }
      else { hairColourNum -= 1; };
      break;
    case "next":
      if (hairColourNum == 10) { hairColourNum = 1; }
      else { hairColourNum += 1; }
      break;
  }

  hair.src = cwd + "/img/hair" + hairNum + "-" + hairColourNum + ".png";
  hair.onload = () => { buildAvatar(); }
}

function eyebrowsChange(direction) {
  switch(direction) {
    case "previous":
      if (eyebrowsNum == 1) { eyebrowsNum = 10; }
      else { eyebrowsNum -= 1; };
      break;
    case "next":
      if (eyebrowsNum == 10) { eyebrowsNum = 1; }
      else { eyebrowsNum += 1; }
      break;
  }

  eyebrows.src = cwd + "/img/eyebrows" + eyebrowsNum + ".png";
  eyebrows.onload = () => { buildAvatar(); }
}

function eyesChange(direction) {
  switch(direction) {
    case "previous":
      if (eyesNum == 1) { eyesNum = 10; }
      else { eyesNum -= 1; };
      break;
    case "next":
      if (eyesNum == 10) { eyesNum = 1; }
      else { eyesNum += 1; }
      break;
  }

  eyes.src = cwd + "/img/eyes" + eyesNum + ".png";
  eyes.onload = () => { buildAvatar(); }
}

function noseChange(direction) {
  switch(direction) {
    case "previous":
      if (noseNum == 1) { noseNum = 4; }
      else { noseNum -= 1; };
      break;
    case "next":
      if (noseNum == 4) { noseNum = 1; }
      else { noseNum += 1; }
      break;
  }

  nose.src = cwd + "/img/nose" + noseNum + "-" + baseNum + ".png";
  nose.onload = () => { buildAvatar(); }
}

function cheeksChange(direction) {
  switch(direction) {
    case "previous":
      if (cheeksNum == 1) { cheeksNum = 4; }
      else { cheeksNum -= 1; };
      break;
    case "next":
      if (cheeksNum == 4) { cheeksNum = 1; }
      else { cheeksNum += 1; }
      break;
  }

  cheeks.src = cwd + "/img/cheeks" + cheeksNum + "-" + baseNum + ".png";
  cheeks.onload = () => { buildAvatar(); }
}

function mouthChange(direction) {
  switch(direction) {
    case "previous":
      if (mouthNum == 1) { mouthNum = 10; }
      else { mouthNum -= 1; };
      break;
    case "next":
      if (mouthNum == 10) { mouthNum = 1; }
      else { mouthNum += 1; }
      break;
  }

  mouth.src = cwd + "/img/mouth" + mouthNum + ".png";
  mouth.onload = () => { buildAvatar(); }
}

function bodyChange(direction) {
  switch(direction) {
    case "previous":
      if (bodyNum == 1) { bodyNum = 7; }
      else { bodyNum -= 1; };
      break;
    case "next":
      if (bodyNum == 7) { bodyNum = 1; }
      else { bodyNum += 1; }
      break;
  }

  body.src = cwd + "/img/body" + bodyNum + ".png";
  body.onload = () => { buildAvatar(); }
}

function accessoryChange(direction) {
  switch(direction) {
    case "previous":
      if (accessoryNum == 1) { accessoryNum = 11; }
      else { accessoryNum -= 1; };
      break;
    case "next":
      if (accessoryNum == 11) { accessoryNum = 1; }
      else { accessoryNum += 1; }
      break;
  }

  accessory.src = cwd + "/img/accessory" + accessoryNum + ".png";
  accessory.onload = () => { buildAvatar(); }
}