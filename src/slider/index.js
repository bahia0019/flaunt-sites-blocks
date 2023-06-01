// import { registerBlockType } from "@wordpress/blocks";
// import "./style.scss";

import edit from "./edit";
import save from "./save";

export const name = "core/slider";

export const settings = {
	title: "Slider",
	description: "Slider.",
	category: "text",
	icon: "align-center",
	edit,
	save,
	supports: {
		align: ["full"],
		alignWide: true,
		color: {
			link: true,
		},
		spacing: {
			margin: true,
			padding: true,
			blockGap: null,
		},
	},
	attributes: {
		images: {
			type: "array",
		},
		imageIds: {
			type: "array",
		},
		autoplay: {
			type: "boolean",
			default: "true",
		},
		loop: {
			type: "boolean",
			default: "true",
		},
		displaySpeed: {
			type: "number",
			default: "2.0",
		},
		speed: {
			type: "number",
			default: "2000",
		},
		delay: {
			type: "number",
			default: "2000",
		},
		effect: {
			type: "string",
			defualt: "fade",
		},
		showNavigation: {
			type: "boolean",
			default: "true",
		},
		showNavigation: {
			type: "boolean",
			default: "true",
		},
		deskItemsPerView: {
			type: "number",
			default: "1",
		},
		sliderType: {
			type: "string",
			default: "slideshow",
		},
	},
};
