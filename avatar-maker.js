window.onload = () => { // This is an arrow function, rewritten from "window.onload = function() {"
  var base = document.createElement("img");
  var baseNum = Math.floor(Math.random() * 6) + 1; // Multiply Math.random() by number of files
  var baseName = "/img/base" + baseNum + ".png";
  var cwd = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    
  base.src = cwd + baseName;
  console.log(base.src);

  base.onload = () => { buildAvatar(); }

  function buildAvatar() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.height = canvas.width;
    console.log(ctx);

    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
  }
}