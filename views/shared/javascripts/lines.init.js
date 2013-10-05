
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     neatline
 * @subpackage  text
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(
  Lines, Neatline, Backbone, Marionette, $, _) {


  Lines.ID = 'LINES';


  Lines.addInitializer(function() {
    Lines.__view = new Neatline.Lines.View();
  });


});
