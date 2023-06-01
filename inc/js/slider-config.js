// logo slider js

const sliders = document.querySelectorAll(".wp-block-slider");

[...sliders].forEach((singleSlider) => {
	const swiperContainer = singleSlider.querySelector(".swiper-container");
	// slider id
	const sliderId = singleSlider.dataset.sliderId;
	console.log(swiperContainer.dataset.effect);

	// // slider options
	// const deskItems = parseInt(swiperContainer.dataset.desktop);
	// const tabItems = parseInt(swiperContainer.dataset.tablet);
	// const phoneItems = parseInt(swiperContainer.dataset.mobile);

	// const deskSpace = parseInt(swiperContainer.dataset.deskspace);
	// const tabSpace = parseInt(swiperContainer.dataset.tabspace);
	// const phoneSpace = parseInt(swiperContainer.dataset.phonespace);

	const autoplay = JSON.parse(swiperContainer.dataset.autoplay);
	// const autoplayDelay = parseInt(swiperContainer.dataset.autoplaydelay);
	// const autoplayDirection = JSON.parse(
	// 	swiperContainer.dataset.autoplaydirection
	// );
	// const pauseOnHover = JSON.parse(swiperContainer.dataset.pauseonhover);

	// const autoplayOptions = autoplay
	// 	? {
	// 			delay: autoplayDelay,
	// 			reverseDirection: autoplayDirection,
	// 			pauseOnMouseEnter: pauseOnHover,
	// 			disableOnInteraction: false,
	// 	  }
	// 	: false;

	const speed = parseInt(swiperContainer.dataset.speed);
	const loop = JSON.parse(swiperContainer.dataset.loop);
	const effect = swiperContainer.dataset.effect;
	const slidesPerDesktop = swiperContainer.dataset.itemsdesktop;
	const slidesPerTablet = swiperContainer.dataset.itemstablet;
	const slidesPerMobile = swiperContainer.dataset.itemsmobile;
	// const keyboard = JSON.parse(swiperContainer.dataset.keyboard);
	// const mousewheel = JSON.parse(swiperContainer.dataset.mousewheel);
	// const autoHeight = JSON.parse(swiperContainer.dataset.autoheight);

	// // pagination options
	// const showPagination = JSON.parse(swiperContainer.dataset.pagination);
	// const paginationClass = slide.querySelector(".alcb__pag");

	// const paginationOptions = showPagination
	// 	? {
	// 			el: paginationClass,
	// 			clickable: showPagination,
	// 	  }
	// 	: false;

	// // navigation options
	// const showNav = JSON.parse(swiperContainer.dataset.navigation);
	// const prevNav = slide.querySelector(".alcb__prev");
	// const nextNav = slide.querySelector(".alcb__next");

	// const navigationOptions = showNav
	// 	? {
	// 			nextEl: nextNav,
	// 			prevEl: prevNav,
	// 	  }
	// 	: false;

	// console.log(slideDirection);

	// const slider = new Swiper(`#${sliderId}`, {
	const slider = new Swiper(`.swiper-container`, {
		// pagination: paginationOptions,
		// navigation: navigationOptions,
		autoplay,
		loop,
		effect,
		spaceBetween: 0,
		speed,
		breakpoints: {
			320: {
				slidesPerView: slidesPerMobile,
				// spaceBetween: phoneSpace,
			},
			768: {
				slidesPerView: slidesPerTablet,
				// spaceBetween: tabSpace,
			},
			1024: {
				slidesPerView: slidesPerDesktop,
			},
		},
	});
});
