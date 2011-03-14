# Raphaël SVG import plugin - 0.0.1

### What is it?
An extension to the Raphael Vector Library.<br/>
It enables Raphael to import raw SVG data.

### Usage

    var paper = Raphael(10, 10, 800, 500);
    paper.importSVG('<sgv><rect x="53.603" y="93.813" fill="#FF00FF" width="106.211" height="106.211"/></svg>')

You can export a svg file from Inkscape or Illustrator, open it with a plain text editor and dump it in there.<br/>
The plugin will filter out the necessary.

In the assets folder a demo.svg file is provided.<br/>
Nothing fancy but it gives you a starting point.

### Dependencies
- [Raphael JS](http://raphaeljs.com/)

### Important
- This plugin is still under development
- It requires the Prototype JS library

### To-do
- SVG group to Raphael set conversion
- line recognition
- text recognition
- image recognition
- writing tests (yes I've been lazy :-)
