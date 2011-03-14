// please use a decent browser for testing purposes (e.g. Non-IE)

var paper = Raphael(document.getElementById('paper'), document.innerWidth, document.innerHeight);

function importSVG() {
  paper.importSVG(prompt('Paste your raw SVG data here:'));
};