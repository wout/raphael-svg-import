/*
 * Open raphael.zoom-spec.html to run all tests
 */


var createPaper = function() {
  return Raphael('paper', 800, 500);
}

describe('Raphael.fn.importSVG one element', {
  before_each : function() {
    paper = createPaper();
    paper.importSVG('<svg><rect x="50" y="50" fill="#FF00FF" width="100" height="100" /></svg>');
    elements = paper.elements();
  },
  
  'should create one item': function() {
    value_of(elements).should_have_exactly(1, 'items');
  }
});

/* --- helpers --- */

// get all elements in the paper
Raphael.fn.elements = function() {
  var b = this.bottom,
      r = []; 
  while (b) { 
    r.push(b); 
    b = b.next; 
  }
  return r;
}

























