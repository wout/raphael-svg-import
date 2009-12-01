var DemoHelper = Class.create({
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
  }
});

var Demo = new DemoHelper();