
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     neatline
 * @subpackage  text
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(
  Lines, Neatline, Backbone, Marionette, $, _) {


  /**
   * TODO|dev
   * Render line on `highlight`.
   *
   * @param {Object} args: Event arguments.
   */
  var highlight = function(args) {
    // TODO
  };
  Neatline.commands.setHandler(Lines.ID+':highlight', highlight);
  Neatline.vent.on('highlight', highlight);


});
