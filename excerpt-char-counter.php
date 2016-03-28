<?php
/*
Plugin Name:  Excerpt Character Counter
Description:  A WordPress plugin that adds a JQuery script to limit the number of characters entered into excerpts in posts and counts how many characters are left.
Plugin URI:   https://github.com/webunraveling/excerpt-char-counter
Version:      1.0
Author:       Jason Raveling
Author URI:   http://webunraveling.com
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html

/*
Excerpt Character Count
Copyright (C) 2016 WebUnraveling.com

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

// get the stylesheet & javascript
add_action( 'admin_enqueue_scripts', 'register_excerpt_char_counter_scripts' );

function register_excerpt_char_counter_scripts( $hook ) {
	if ('post.php' != $hook) { // only load when writing a post
		return;
	}

	wp_enqueue_script(
		'excerpt-char-counter',
		plugins_url( '/excerpt-char-counter/include/excerpt-char-counter.js' ),
		array( 'jquery' )
	);

	wp_enqueue_script(
		'excerpt-char-counter-jquery',
		//get_template_directory_uri() . '/include/javascript/jquery.js',
		plugins_url( '/excerpt-char-couter/include/jquery.min.js' ),
		array( 'jquery' )
	);

	wp_register_style(
    'excerpt-char-counter-css',
    plugins_url( '/excerpt-char-counter/include/excerpt-char-counter.css' )
	);

	wp_enqueue_style( 'excerpt-char-counter-css' );
}
