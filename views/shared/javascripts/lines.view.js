
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(
  Lines, Neatline, Backbone, Marionette, $, _) {


  Lines.View = Backbone.View.extend({


    tagName: 'svg',
    id: 'word-line',


    /**
     * Render the line.
     */
    show: function() {
      $('body').append(this.$el);
    },


    /**
     * Hide the line.
     */
    hide: function() {
      this.$el.detach();
    }


  });


});
