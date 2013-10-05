
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(
  Lines, Neatline, Backbone, Marionette, $, _) {


  /**
   * Render line on `highlight`.
   *
   * @param {Object} args: Event arguments.
   */
  var highlight = function(args) {
    Lines.__view.show();
  };
  Neatline.commands.setHandler(Lines.ID+':highlight', highlight);
  Neatline.vent.on('highlight', highlight);


  /**
   * Render line on `highlight`.
   *
   * @param {Object} args: Event arguments.
   */
  var unhighlight = function(args) {
    Lines.__view.hide();
  };
  Neatline.commands.setHandler(Lines.ID+':unhighlight', unhighlight);
  Neatline.vent.on('unhighlight', unhighlight);


});
