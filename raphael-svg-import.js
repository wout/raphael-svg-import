/*
 * Raphael SVG Import 0.0.1 - Extension to Raphael JS
 *
 * Copyright (c) 2009 Wout Fierens, 2011 Georgi Momchilov, Matt Cook
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (raw_svg) {
  try {
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
              break;
              default:
                attr[RegExp.$1] = RegExp.$2;
              break;
            }
         };
         if (style){
            while(find_style.exec(style)){
              attr[RegExp.$1] = RegExp.$2;
	    }
	 }
        switch(node) {
          case "rect":
            shape = this.rect();
          break;
          case "circle":
            shape = this.circle();
          break;
          case "ellipse":
            shape = this.ellipse();
          break;
          case "path":
            shape = this.path(attr["d"]);
          break;
          case "polygon":
            shape = this.polygon(attr["points"]);
          break;
          case "image":
            shape = this.image();
          break;
          //-F case "text":
          //-F   shape = this.text();
          //-F break;
        }
        shape.attr(attr);
     };
  } catch (error) {
    alert("The SVG data you entered was invalid! (" + error + ")");
  }
};

// extending raphael with a polygon function
Raphael.fn.polygon = function(point_string) {
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
