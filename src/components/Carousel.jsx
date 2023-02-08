import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItems from "./CarouselItems";
import './carousel.css'

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: "button__bar",
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <CarouselItems />
                </div>
                <div>
                    <CarouselItems />

                </div>
                <div>
                    <CarouselItems />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel
