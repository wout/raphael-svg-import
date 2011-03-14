/*
 * Raphael SVG Import 0.0.2 - Extension to Raphael JS
 *
<<<<<<< HEAD
 * Copyright (c) 2011 Wout Fierens and Georgi Momchilov
=======
 * Copyright (c) 2009 Wout Fierens, 2011 Georgi Momchilov, Matt Cook
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (rawSVG) {
  try {
<<<<<<< HEAD
    if (rawSVG.blank())
      throw 'No data was provided.';
    
    rawSVG = rawSVG.gsub(/\n|\r|\t/, '');
    
    if (!rawSVG.match(/<svg([^>]*)?>(.*)<\/svg>/i))
      throw "The data you entered doesn't contain SVG.";
    
    rawSVG.scan(/<(rect|polyline|circle|ellipse|path|polygon|image|text)(.*?)\/>/, (function(match) {
        var shape, attr = { 'stroke-width': 0, 'fill':'#000' };
        
        if (match && match[2]) {
          var style, node = match[1];
          
          match[2].scan(/([a-z\-]+)='(.*?)'/, function(m) {
            switch(m[1]) {
              case 'stroke-dasharray':
                attr[m[1]] = '- ';
              break;
              case 'style':
                style = m[2];
=======
    if (!raw_svg.length)
      throw "No data was provided.";
    raw_svg = raw_svg.replace(/\n|\r|\t/gi, '');
    if (!raw_svg.match(/<svg(.*?)>(.*)<\/svg>/i))
      throw "The data you entered doesn't contain SVG.";
   var find_attr = new RegExp('([a-z\-]+)="(.*?)"',"gi");
   var find_style = new RegExp("([a-z\-]+) ?: ?([^ ;]+)[ ;]?","gi");
   var find_nodes = new RegExp("<(rect|polyline|circle|ellipse|path|polygon|image|text).*?\/>","gi"); 
   while(match = find_nodes.exec(raw_svg)){      
        var attr = { "stroke-width": 0, "fill":"#fff" };
        var node = RegExp.$1;
        var shape;
        var style;
	while(find_attr.exec(match)){
            switch(RegExp.$1) {
              case "stroke-dasharray":
                attr[RegExp.$1] = "- ";
              break;
              case "style":
                style = RegExp.$2;
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
              break;
              default:
                attr[RegExp.$1] = RegExp.$2;
              break;
            }
<<<<<<< HEAD
          });
          
          if (style)
            style.scan(/([a-z\-]+) ?: ?([^ ;]+)[ ;]?/, function(m) {
              attr[m[1]] = m[2];
            });
        }
        
=======
         };
         if (style){
            while(find_style.exec(style)){
              attr[RegExp.$1] = RegExp.$2;
	    }
	 }
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
        switch(node) {
          case 'rect':
            shape = this.rect();
          break;
          case 'circle':
            shape = this.circle();
          break;
          case 'ellipse':
            shape = this.ellipse();
          break;
          case 'path':
            shape = this.path(attr['d']);
          break;
<<<<<<< HEAD
          case "polygon":
            shape = this.polygon(0, 0, attr["points"]);
=======
          case 'polygon':
            shape = this.polygon(attr['points']);
>>>>>>> georgious-master
          break;
          case 'image':
            shape = this.image();
          break;
          //-F case 'text':
          //-F   shape = this.text();
          //-F break;
        }
        shape.attr(attr);
<<<<<<< HEAD
        
    }).bind(this));
=======
     };
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
  } catch (error) {
    alert('The SVG data you entered was invalid! (' + error + ')');
  }
<<<<<<< HEAD
=======
};

// extending raphael with a polygon function
Raphael.fn.polygon = function(point_string) {
<<<<<<< HEAD
  var polyArray = ['M'];
  $w(point_string).each(function(point, i) {
    point.split(',').each(function(c) {
      polyArray.push(parseFloat(c));
    });
    if (i == 0) polyArray.push('L');
  });
  
  polyArray.push('Z');
  
  return this.path(polyArray.compact());
>>>>>>> georgious-master
};
=======
  var poly = new Array("M");
  var point = point_string.split(' ');
  for(var i=0; i<point.length; i++) {
     var c = point[i].split(",");
     for(var j=0; j<c.length; j++){
        var d = parseFloat(c[j]);
	if(d) poly.push(d);
     }
     if (i == 0) poly.push("L");
  }
  poly.push("Z");
  return this.path(poly);
};
>>>>>>> 9f28a2f060554a8bbe8d99ef5e1842fb9787a696
