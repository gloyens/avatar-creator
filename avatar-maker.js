let cwd = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Reference number for each image, e.g. base1.png
let baseNum = 1;
let trimNum = 1;

window.onload = () => { // This is an arrow function, rewritten from "window.onload = function() {"
  var base = document.createElement("img");
  //var baseNum = Math.floor(Math.random() * 6) + 1; // Multiply Math.random() by number of files
    
  base.src = cwd + "/img/base" + baseNum + ".png";
  base.onload = () => { buildAvatar(base); }
}

function buildAvatar(layer) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = canvas.width;

  ctx.drawImage(layer, 0, 0, canvas.width, canvas.height);
}

function baseChange(direction) {
  var base = document.createElement("img");

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
  base.onload = () => { buildAvatar(base); }
}

function trimChange(direction) {
  var trim = document.createElement("img");

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
  trim.onload = () => { buildAvatar(trim); }
}