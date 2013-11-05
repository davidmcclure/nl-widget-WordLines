
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Lines', function(Lines) {


  Lines.Controller = Neatline.Shared.Controller.extend({


    slug: 'WORDLINES',

    events: [

      'highlight',
      'unhighlight',

      { 'select':   'unhighlight' },
      { 'MAP:move': 'unhighlight' }

    ],


    /**
     * Create the view.
     */
    init: function() {
      this.view = new Neatline.Lines.View();
    },


    /**
     * Render line on `highlight`.
     *
     * @param {Object} args: Event arguments.
     */
    highlight: function(args) {

      // Did the event originate on the map or text?
      if (_.contains(['MAP', 'TEXT'], args.source)) {

        // Get the vector layer.
        var layer = Neatline.request('MAP:getVectorLayer', args.model);
        if (layer.features.length == 0) return;

        // Computer the map center.
        var lonlat = layer.getDataExtent().getCenterLonLat();
        var center = layer.getViewPortPxFromLonLat(lonlat);

        // Get the text span and offset.
        var span = Neatline.request('TEXT:getSpansByModel', args.model);
        if (span.length == 0) return;

        // Compute the text center.
        var offset = span.offset();
        var x = offset.left+span.width()/2;
        var y = offset.top+span.height()/2;

        // Render the line.
        this.view.show(x, y, center.x, center.y);

      }

    },


    /**
     * Render line on `highlight`.
     *
     * @param {Object} args: Event arguments.
     */
    unhighlight: function(args) {
      this.view.hide();
    }


  });


});
