
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
   * TODO|dev
   * Render line on `highlight`.
   *
   * @param {Object} args: Event arguments.
   */
  var highlight = function(args) {

    // Did the event originate on the map or text?
    if (_.contains(['MAP', 'TEXT'], args.source)) {

      // Get the map centroid.
      var layer = Neatline.Map.__view.layers.vector[args.model.id];
      var lonlat = layer.getDataExtent().getCenterLonLat();
      var center = layer.getViewPortPxFromLonLat(lonlat);

      // Get the text centroid.
      var slug = args.model.get('slug');
      var span = Neatline.Text.__view.getSpansWithSlug(slug);
      var offset = span.offset();
      var x = offset.left+span.width()/2;
      var y = offset.top+span.height()/2;

      // Render the line.
      Lines.__view.show(x, y, center.x, center.y);

    }

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
  Neatline.vent.on('select', unhighlight);


});
