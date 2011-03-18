/*
 * Raphael SVG Import 0.0.4 - Extension to Raphael JS
 *
 * Copyright (c) 2011 Wout Fierens
 * - Load order fix by Georgi Momchilov
 * - Prototype dependency removed by Matt Cook
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.fn.importSVG = function (rawSVG, set) {
  try {
    if (typeof rawSVG === 'undefined')
      throw 'No data was provided.';
    
    rawSVG = rawSVG.replace(/\n|\r|\t/gi, '');
    
    if (!rawSVG.match(/<svg(.*?)>(.*)<\/svg>/i))
      throw "The data you entered doesn't contain valid SVG.";
    
    var findAttr  = new RegExp('([a-z\-]+)="(.*?)"','gi'),
        findStyle = new RegExp('([a-z\-]+) ?: ?([^ ;]+)[ ;]?','gi'),
        findNodes = new RegExp('<(rect|polyline|circle|ellipse|path|polygon|image|text).*?\/>','gi');
    
    while(match = findNodes.exec(rawSVG)){      
      var shape, style,
          attr = { 'fill':'#000' },
          node = RegExp.$1;
      
      while(findAttr.exec(match)){
        switch(RegExp.$1) {
          case 'stroke-dasharray':
            attr[RegExp.$1] = '- ';
          break;
          case 'style':
            style = RegExp.$2;
          break;
          default:
            attr[RegExp.$1] = RegExp.$2;
          break;
        }
      };
      
      if (typeof attr['stroke-width'] === 'undefined')
        attr['stroke-width'] = (typeof attr['stroke'] === 'undefined' ? 0 : 1);
      
      if (style)
        while(findStyle.exec(style))
          attr[RegExp.$1] = RegExp.$2;
      
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
        case 'polygon':
          shape = this.polygon(attr['points']);
        break;
        case 'image':
          shape = this.image();
        break;
        //-F case 'text':
        //-F   shape = this.text();
        //-F break;
      }
      
      shape.attr(attr);
      
      if (typeof set !== 'undefined')
        set.push(shape);
    };
  } catch (error) {
    alert('The SVG data you entered was invalid! (' + error + ')');
  }
};

// extending raphael with a polygon function
Raphael.fn.polygon = function(pointString) {
  var poly  = ['M'],
      point = pointString.split(' ');
      
  for(var i=0; i < point.length; i++) {
     var c = point[i].split(',');
     for(var j=0; j < c.length; j++) {
        var d = parseFloat(c[j]);
        if (d)
          poly.push(d);
     };
     if (i == 0)
      poly.push('L');
  }
  poly.push('Z');
  
  return this.path(poly);
};
