// slider.js
import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3 className={"slick-slide-heading"}>We solve your IT tasks.</h3>
                    <p className={"slick-slide-description"}>Let AlterraSoft be your needs facilitator.
                        Don't waste your time and money when it comes to technical expertise.
                    </p>
                    <img className={"slick-slide-image"} src={"http://localhost:3000/Slide-1.jpg"} alt={"1-st slide"}/>
                </div>
                <div>
                    <h3 className={"slick-slide-heading"}>Quality is our ultimate focus.</h3>
                    <p className={"slick-slide-description"}>AlterraSoft drives your projects reliably.
                        We always oversee  our projects with a full battery of tests to ensure the highest quality.
                    </p>
                    <img className={"slick-slide-image"} src={"http://localhost:3000/Slide-2.jpg"} alt={"2-nd slide"}/>
                </div>
                <div>
                    <h3 className={"slick-slide-heading"}>Professional team for your ideas.</h3>
                    <p className={"slick-slide-description"}>AlterraSoft is the perfect place for the guys passionate about technology.
                        Our professional expertise can turn your ideas into real projects. Moreover, AlterraSoft can add new value to your existing projects.
                    </p>
                    <img className={"slick-slide-image"} src={"http://localhost:3000/Slide-3.jpg"} alt={"3-d slide"}/>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;