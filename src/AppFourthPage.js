import React, { Component } from 'react';
import Slider from "react-slick";
import info from './components/Blog/blog';
import InfoCard from './components/Cards/infoCard';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <button id="btn-right" className="d-flex flex-horizontal align-items-center justify-content-center"><img id="arrowright" src="/assets/Icons/Arrow_right.svg" style={{width: 180 + 'px'} && {height: 180 + 'px'}} alt="" /></button> : <button id="btn-left" className="d-flex flex-horizontal align-items-center justify-content-center"><img id="arrowleft" src="/assets/Icons/Arrow_left.png" style={{width: 80 + 'px'} && {height: 80 + 'px'}} alt="" /></button>;
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
}

export default class AppFourthPage extends Component {
    render () {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 3.3,
            nextArrow: <Arrow type="next" />,
            prevArrow: <Arrow type="prev" />
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

