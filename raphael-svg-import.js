/*
 * Raphael SVG Import 0.0.2 - Extension to Raphael JS
 *
 * Copyright (c) 2011 Wout Fierens and Georgi Momchilov
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (rawSVG) {
  try {
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
              break;
              default:
                attr[m[1]] = m[2];
              break;
            }
          });
          
          if (style)
            style.scan(/([a-z\-]+) ?: ?([^ ;]+)[ ;]?/, function(m) {
              attr[m[1]] = m[2];
            });
        }
        
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
        
    }).bind(this));
  } catch (error) {
    alert('The SVG data you entered was invalid! (' + error + ')');
  }
<<<<<<< HEAD
=======
};

// extending raphael with a polygon function
Raphael.fn.polygon = function(point_string) {
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