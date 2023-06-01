import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();

	const { attributes } = props;

	const {
		images,
		slideshowType,
		autoplay,
		loop,
		navigation,
		pagination,
		speed,
		delay,
		effect,
		itemDevice,
		deskItemsPerView,
		tabItemsPerView,
		phoneItemsPerView,
	} = attributes;

	return (
		<div {...blockProps}>
			<div
				className="swiper-container"
				data-autoplay={autoplay}
				data-loop={loop}
				data-speed={speed}
				data-delay={delay}
				data-effect={effect}
				data-itemsDesktop={deskItemsPerView}
				data-itemsTablet={tabItemsPerView}
				data-itemsMobile={phoneItemsPerView}
			>
				<div className="swiper-wrapper">
					{images &&
						images.map((image) => {
							return (
								<div className="swiper-slide">
									<img
										src={image.url}
										alt={image.alt}
										className={`wp-image-${image.id}`}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
