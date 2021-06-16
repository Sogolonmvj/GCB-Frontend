import React, { Component } from 'react';
import Slider from "react-slick";
import info from './components/Blog/blog';
import InfoCard from './components/Cards/infoCard';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Arrow from './helpers/arrowHelper';

export default class AppFourthPage extends Component {
    render () {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 3.3,
            nextArrow: <Arrow type="next" />,
            prevArrow: <Arrow type="prev" />,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        nextArrow: false,
                        prevArrow: false,
                    }
                },

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        nextArrow: <Arrow type="next" />,
                        prevArrow: <Arrow type="prev" />,
                    }
                },

                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        nextArrow: <Arrow type="next" />,
                        prevArrow: <Arrow type="prev" />,
                    }
                }
            ]
        };

        return (
        
            <div id="fourthpage"> 
                
                <div id="title">
                    <h3 className="d-flex justify-content-center">Read Our Blog</h3>
                    <div>
                        <h6 id="superiortext" className="d-flex flex-horizontal justify-content-center align-items-center text-center">Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</h6>
                    </div>
                </div>
                <div id="slider">
                    <Slider {...settings} >
                        <div >
                            <InfoCard info={ info[0] } /> 
                        </div>
                        <div >
                            <InfoCard info={ info[1] } /> 
                        </div>
                        <div >
                            <InfoCard info={ info[2] } /> 
                        </div>
                        <div >
                            <InfoCard info={ info[3] } /> 
                        </div>
                    </Slider>
                </div>
            </div>

        );
    }
}

