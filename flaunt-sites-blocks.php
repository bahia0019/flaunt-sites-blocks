<?php
/**
 * Plugin Name:       Flaunt Sites Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       flaunt-sites-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_flaunt_sites_blocks_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_flaunt_sites_blocks_block_init' );


/**
 * Enqueue Swiper Slider into the front end.
 */
function enqueue_scripts() {
	wp_enqueue_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', array(), '8.4.5', false );
    wp_enqueue_script( 'slider-config', plugin_dir_url( __FILE__ ) . 'inc/js/slider-config.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
