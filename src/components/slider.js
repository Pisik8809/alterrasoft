// slider.js
import React from "react";
import GlobalUrl from './global-url';
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alterraData: {}
        }
    }

    getMyData(){
        fetch(`${GlobalUrl}alterra-data.json`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ alterraData: data });
                console.log(this.state.alterraData);
            });
    }

    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        const sliderData = this.state.alterraData.slider;
        if (!sliderData) {
            return <div>NO DATA</div>
        }
        else {
            const sliderMarckup = sliderData.map((item, index) =>
                <div key={index} >
                    <h3 className={"slick-slide-heading"}>{item.heading}</h3>
                    <p className={"slick-slide-description"}>{item.description}</p>
                    <img className={"slick-slide-image"} src={`${GlobalUrl}${item.img}`} alt={item.alt}/>
                </div>
            );
            return (
                <Slider {...settings}>
                    {sliderMarckup}
                </Slider>
            );
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default SimpleSlider;