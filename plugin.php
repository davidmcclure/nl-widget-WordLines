<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 cc=76; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


if (!defined('NL_LINES_DIR')) {
    define('NL_LINES_DIR', dirname(__FILE__));
}

require_once NL_LINES_DIR . '/NeatlineWordLinesPlugin.php';

$lines = new NeatlineWordLinesPlugin();
$lines->setUp();
