  var paper = Raphael(document.getElementById("paper"), document.body.clientWidth, document.body.clientHeight);

  function importSVG() {
    paper.importSVG(prompt("Paste your raw SVG data here:"));
  }

