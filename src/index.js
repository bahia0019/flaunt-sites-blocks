import { registerBlockType } from "@wordpress/blocks";

import * as slider from "./slider";

const blocks = [slider];

function registerBlock(block) {
	const { name, settings } = block;
	registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
