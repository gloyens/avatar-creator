let cwd = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Reference number for each image, e.g. base1.png
let baseNum = 1;
let trimNum = 1;

// Create images
let base = document.createElement("img");
let trim = document.createElement("img");

window.onload = () => { // This is an arrow function, rewritten from "window.onload = function() {"
  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }
}

function buildAvatar() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = canvas.width;

  ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(trim, 0, 0, canvas.width, canvas.height);
}

function baseChange(direction) {
  switch(direction) {
    case "previous":
      if (baseNum == 1) { baseNum = 6; }
      else { baseNum -= 1; };
      break;
    case "next":
      if (baseNum == 6) { baseNum = 1; }
      else { baseNum += 1; }
      break;
  }

  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(); }
}

function trimChange(direction) {
  switch(direction) {
    case "previous":
      if (trimNum == 1) { trimNum = 4; }
      else { trimNum -= 1; };
      break;
    case "next":
      if (trimNum == 4) { trimNum = 1; }
      else { trimNum += 1; }
      break;
  }

  trim.src = cwd + "/img/trim" + trimNum + ".png";
  trim.onload = () => { buildAvatar(); }
}