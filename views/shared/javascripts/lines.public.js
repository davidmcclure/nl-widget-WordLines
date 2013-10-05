
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

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

    /*

    // Did the event originate on the map or text?
    if (args.source == 'MAP' || args.source == 'TEXT') {

      // Try to get a vector layer for the model.
      var layer = Neatline.Map.__view.layers.vector[args.model.id];
      var centroid = layer.getDataExtent().getCenterPixel();

      // Try to get a text span for the model.
      var slug = args.model.get('slug');
      var span = Neatline.Text.__view.getSpansWithSlug(slug);
      var offset = span.offset();
      var x = offset.left+span.width()/2;
      var y = offset.top+span.height()/2;

      // Measure the window.
      var width = $(window).width();
      var height = $(window).height();

      // Add the SVG container.
      var svg = d3.select('body').append('svg:svg')
        .attr('width', width)
        .attr('height', height);

      var line = svg.append('svg:line')
        .attr('x1', x)
        .attr('y1', y)
        .attr('x2', centroid.x)
        .attr('y2', centroid.y);

    }

    */

  };
  Neatline.commands.setHandler(Lines.ID+':highlight', highlight);
  Neatline.vent.on('highlight', highlight);


});
