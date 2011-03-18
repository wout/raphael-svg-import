# Raphaël SVG Import plugin - 0.0.4

## What is it?
An extension to the Raphael Vector Library.<br/>
It enables Raphael to import raw SVG data.

## Usage

    var paper = Raphael(10, 10, 800, 500);
    paper.importSVG('<svg><rect x="50" y="50" fill="#FF00FF" width="100" height="100" /></svg>');

If you want the imported elements to be grouped in a set, pass the set as an optional parameter:

    var paper = Raphael(10, 10, 800, 500);
    var set = paper.set();
    paper.importSVG('<svg><rect x="50" y="50" fill="#FF00FF" width="100" height="100" /></svg>', set);

You can export a svg file from Inkscape or Illustrator, open it with a plain text editor and dump it in there.<br/>
The plugin will filter out the necessary.

In the assets folder a demo.svg file is provided.<br/>
Nothing fancy but it gives you a starting point.

## Dependencies
- [Raphael JS](http://raphaeljs.com/)

## To-do
- SVG group to Raphael set conversion
- line recognition
- text recognition
- image recognition

## Contributing to Raphael SVG Import
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Rakefile, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

## Copyright

Copyright (c) 2011 Wout Fierens. See LICENSE.txt for further details.