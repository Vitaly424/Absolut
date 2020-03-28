$("#js-slider").slick({
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: "150px",
    responsive: [
        {
            breakpoint: 1228,
            settings: {
                slidesToShow: 2,
                centerMode: true
            }
        },
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 642,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }

    ]
});