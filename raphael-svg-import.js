/*
 * Raphael SVG Import 0.0.1 - Extension to Raphael JS
 *
 * Copyright (c) 2009 Wout Fierens; Georgi Momchilov 2011
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (raw_svg) {
  try {
    if (raw_svg.blank()){
      throw "No data was provided.";
    }
    raw_svg = raw_svg.gsub(/\n|\r|\t/, '');
    if (!raw_svg.match(/<svg(.*?)>(.*)<\/svg>/i)){
      throw "The data you entered doesn't contain SVG.";
    }
    raw_svg.scan(/<(rect|polyline|circle|ellipse|path|polygon|image|text)(.*?)\/>/, (function(match) {
        var attr = { "stroke-width": 0, "fill":"#000" };
        var shape;
        if (match && match[2]) {
          var node = match[1],
              style;
          match[2].scan(/([a-z\-]+)="(.*?)"/, function(m) {
            switch(m[1]) {
              case "stroke-dasharray":
                attr[m[1]] = "- ";
              break;
              case "style":
                style = m[2];
              break;
              default:
                attr[m[1]] = m[2];
              break;
            }
          });
          if (style) {
            style.scan(/([a-z\-]+) ?: ?([^ ;]+)[ ;]?/, function(m) {
              attr[m[1]] = m[2];
            });
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
    }).bind(this));
  } catch (error) {
    alert("The SVG data you entered was invalid! (" + error + ")");
  }
};

// extending raphael with a polygon function
Raphael.fn.polygon = function(point_string) {
  var poly_array = ["M"];
  $w(point_string).each(function(point, i) {
    point.split(",").each(function(c) {
      poly_array.push(parseFloat(c));
    });
    if (i == 0) poly_array.push("L");
  });
  poly_array.push("Z");
  return this.path(poly_array.compact());
};