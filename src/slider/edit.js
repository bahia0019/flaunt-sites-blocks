import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { useState } from "@wordpress/element";
import { Fragment } from "react";
import {
	Button,
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	Toolbar,
	ButtonGroup,
	ColorPicker,
} from "@wordpress/components";
import {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
} from "@wordpress/block-editor";
import Devices from "../../components/devices";

import SwiperCore, {
	Autoplay,
	Navigation,
	Pagination,
	EffectFade,
	EffectCube,
	EffectFlip,
	EffectCoverflow,
	A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([EffectFade]);
SwiperCore.use([EffectCube]);
SwiperCore.use([EffectFlip]);
SwiperCore.use([EffectCoverflow]);

export default function edit(props) {
	const {
		element: { useState },
	} = wp;

	const blockProps = useBlockProps({
		className: "fs-block-slider",
		"data-id": "fs-block-slider",
	});

	const { attributes, setAttributes } = props;

	const {
		images,
		effect,
		spaceBtnItems,
		slidesPerView,
		sliderType,
		autoplay,
		loop,
		showNavigation,
		pagination,
		speed,
		delay,
		itemDevice,
		deskItemsPerView,
		tabItemsPerView,
		phoneItemsPerView,
	} = attributes;
	const imageIds = [];

	if (images) {
		images.map((image) => {
			imageIds.push(image.id);
		});
	}

	const updateAutoplay = (autoplay) => {
		setAttributes({ autoplay });
		console.log(autoplay);
	};

	// const changeDisplaySpeed = (displaySpeed) => {
	// 	setAttributes({ displaySpeed });
	// 	(displaySpeed) => changeSpeed(displaySpeed);
	// 	speedMultiply(displaySpeed);
	// };

	// const speedMultiply = (displaySpeed) => {
	// 	const speed = displaySpeed * 1000;
	// 	changeSpeed(speed);
	// };

	const changeSpeed = (speed) => {
		setAttributes(speed);
		console.log(speed);
	};

	const changeDelay = (delay) => {
		setAttributes({ delay });
		console.log(delay);
	};
	const changeEffect = (effect) => {
		setAttributes({ effect });
		console.log(effect);
	};
	const changeSlideshowType = (sliderType) => {
		setAttributes({ sliderType });
		console.log(sliderType);
	};
	const updateLoop = (loop) => {
		setAttributes({ loop });
	};

	return (
		<Fragment {...blockProps}>
			<InspectorControls>
				<PanelBody title={"Slider Type"}>
					<SelectControl
						label="Slider Type"
						value={sliderType}
						options={[
							{ label: "Carousel", value: "carousel" },
							{ label: "Slideshow", value: "slideshow" },
						]}
						onChange={changeSlideshowType}
					/>
					<ToggleControl
						label="Autoplay Slideshow"
						help={autoplay ? "Autoplay on." : "Autoplay off."}
						checked={!!autoplay}
						onChange={updateAutoplay}
					/>
					<ToggleControl
						label="Continuously Loop Images"
						help={loop ? "Slider Loops." : "Slider Doesn't Loop."}
						checked={loop}
						onChange={updateLoop}
					/>
				</PanelBody>

				{sliderType === "slideshow" && (
					<PanelBody title={"Slideshow Options"}>
						<RangeControl
							label="Transition Speed"
							value={speed ? speed : ""}
							onChange={(speed) => changeSpeed(speed)}
							min={500}
							max={5000}
							initialPosition={2000}
							step={100}
							// value={displaySpeed ? displaySpeed : ""}
							// onChange={changeDisplaySpeed}
							// min={0.5}
							// max={5.0}
							// initialPosition={2.5}
							// step={0.1}
						/>

						<SelectControl
							label="Transition Effect"
							value={effect}
							options={[
								{ label: "Fade", value: "fade" },
								{ label: "Slide", value: "slide" },
							]}
							onChange={changeEffect}
						/>
					</PanelBody>
				)}
				{sliderType === "carousel" && (
					<PanelBody title={"Carousel Options"}>
						<Devices
							device={itemDevice}
							title={__("Logos Per View")}
							renderFunction={(device) =>
								setAttributes({
									itemDevice: device,
								})
							}
						/>

						{itemDevice === "desktop" && (
							<RangeControl
								value={deskItemsPerView}
								onChange={(deskItemsPerView) =>
									setAttributes({ deskItemsPerView })
								}
								min={1}
								max={10}
								initialPosition={7}
							/>
						)}
						{itemDevice === "tablet" && (
							<RangeControl
								value={tabItemsPerView}
								onChange={(tabItemsPerView) =>
									setAttributes({ tabItemsPerView })
								}
								min={1}
								max={10}
								initialPosition={5}
							/>
						)}
						{itemDevice === "smartphone" && (
							<RangeControl
								value={phoneItemsPerView}
								onChange={(phoneItemsPerView) =>
									setAttributes({ phoneItemsPerView })
								}
								min={1}
								max={10}
								initialPosition={3}
							/>
						)}
					</PanelBody>
				)}
			</InspectorControls>

			<BlockControls>
				{images && (
					<Toolbar>
						<MediaUploadCheck>
							<MediaUpload
								multiple={true}
								gallery={true}
								onSelect={(media) =>
									setAttributes({
										images: media,
									})
								}
								allowedTypes={["image"]}
								value={imageIds}
								render={({ open }) => {
									return (
										<Button
											className="components-button components-toolbar-button has-icon"
											style={{ marginRight: "-10px" }}
											label={__("Edit Images")}
											onClick={open}
											icon="edit"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
						<Button
							className="components-button components-toolbar-button has-icon"
							style={{ marginRight: "-10px" }}
							label={__("Delete Images")}
							onClick={() => setAttributes({ images: null })}
							icon="trash"
						/>
					</Toolbar>
				)}
			</BlockControls>

			<Swiper
				modules={[Autoplay]}
				// spaceBetween={  }
				// slidesPerView={sliderType === "slideshow" ? 1 : deskItemsPerView}
				autoplay={autoplay}
				// delay={delay}
				// loop={loop}
				speed={speed}
				// effect={effect}
				// navigation={showNavigation}
				// pagination={pagination}
				// simulateTouch={simulateTouch}
			>
				{images ? (
					images.map((image) => {
						return (
							<SwiperSlide>
								<img src={image.url} alt={image.alt} id={image.id} />
							</SwiperSlide>
						);
					})
				) : (
					<MediaPlaceholder
						multiple={true}
						icon="format-image"
						onSelect={(media) =>
							setAttributes({
								images: media,
							})
						}
						onFilesPreUpload={(media) =>
							setAttributes({
								images: media,
							})
						}
						onSelectURL={false}
						allowedTypes={["image"]}
						labels={{ title: "Add Images" }}
					/>
				)}
			</Swiper>
		</Fragment>
	);
}
