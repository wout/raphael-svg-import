/*
 * onResize 0.0.1 - Extension to Prototype JS
 *
 * Copyright (c) 2009 Wout Fierens
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Object.extend(window, {
  fire:          Element.Methods.fire.methodize(),
  observe:       Element.Methods.observe.methodize(),
  stopObserving: Element.Methods.stopObserving.methodize()
});

(document.onresize ? document : window).observe("resize", function() {
  if (!document.viewport.is_resized) {
    document.viewport.is_resized = true;
    window.fire("resize:start");
    resizeEnd = (function() {
      document.viewport.is_resized = false;
      window.fire("resize:end");
      Event.stopObserving(document, "mousemove");
    }).bind(this);
    document.observe("mousemove", resizeEnd);
  }
});