<<<<<<< HEAD
var SvgImportDemo = Class.create({
  initialize: function() {
    // set paper
    var dim = document.viewport.getDimensions();
    this.paper = Raphael($("paper"), dim.width, dim.height);
    // set events
    window.observe("resize", (function() {
      this.resize();
    }).bind(this));
  },
  resize: function() {
    var dim = document.viewport.getDimensions();
    this.paper.setSize(dim.width, dim.height);
  },
  importSVG: function() {
    this.paper.importSVG(prompt("Paste your raw SVG data here:"));
=======
  var paper = Raphael(document.getElementById("paper"), document.body.clientWidth, document.body.clientHeight);

  function importSVG() {
    paper.importSVG(prompt("Paste your raw SVG data here:"));
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
  }

<<<<<<< HEAD
var Demo = new SvgImportDemo();
=======
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
