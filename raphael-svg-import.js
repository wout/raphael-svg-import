/*
 * Raphael SVG Import 0.0.2 - Extension to Raphael JS
 *
 * Copyright (c) 2009 Wout Fierens
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (raw_svg) {
  try {
    if (raw_svg.blank())
      throw "No data was provided.";
    raw_svg = raw_svg.gsub(/\n|\r|\t/, '');
    if (!raw_svg.match(/<svg(.*?)>(.*)<\/svg>/i))
      throw "The data you entered doesn't contain SVG.";
    $w("rect polyline circle ellipse path polygon image text").each((function(node) {
      raw_svg.scan(new RegExp("<" + node + "(.*?)\/>"), (function(match) {
        var attr = { "stroke-width": 0, "fill":"#fff" };
        var shape;
        if (match && match[1]) {
          var style;
          match[1].scan(/([a-z\-]+)="(.*?)"/, function(m) {
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
            shape = this.polygon(0, 0, attr["points"]);
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
    }).bind(this));
  } catch (error) {
    alert("The SVG data you entered was invalid! (" + error + ")");
  }
};