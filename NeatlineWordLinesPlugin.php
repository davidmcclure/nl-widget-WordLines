<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


class NeatlineWordLinesPlugin extends Omeka_Plugin_AbstractPlugin
{


    const ID = 'WordLines';


    protected $_hooks = array(
        'neatline_public_static'
    );


    protected $_filters = array(
        'neatline_exhibit_widgets'
    );


    /**
     * Queue public payloads.
     *
     * @param array $args Array of arguments, with `exhibit`.
     */
    public function hookNeatlinePublicStatic($args)
    {
        if ($args['exhibit']->hasWidget(self::ID)) {
            queue_js_file('payloads/lines-public');
        }
    }


    /**
     * Register the exhibit widget.
     *
     * @param array $widgets Widgets, <NAME> => <ID>.
     * @return array The modified array.
     */
    public function filterNeatlineExhibitWidgets($widgets)
    {
        return array_merge($widgets, array('Word Lines' => self::ID));
    }


}
