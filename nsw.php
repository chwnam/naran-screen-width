<?php
/**
 * Plugin Name:  Naran Screen Width
 * Description:  Show window width in the admin bar.
 * Author:       changwoo
 * Author URI:   mailto://chwnam@gmail.com
 * Plugin URI:   https://github.com/chwnam/naran-screen-width
 * Requires PHP: 7.2
 * Version:      1.0.3
 * License:      GPLv2 or later
 */

function nsw_enqueue_scripts() {
	wp_enqueue_script( 'nsw', plugins_url( 'nsw.js', __FILE__ ), [ 'jquery', 'underscore' ], '1.0.3' );
	wp_enqueue_style( 'nsw', plugins_url( 'nsw.css', __FILE__ ), [], '1.0.3' );
}

function nsw_initialize() {
	if ( is_admin_bar_showing() ) {
		add_action( 'wp_enqueue_scripts', 'nsw_enqueue_scripts', 2000 );
		add_action( 'admin_enqueue_scripts', 'nsw_enqueue_scripts', 2000 );
	}
}

add_action( 'init', 'nsw_initialize' );
