import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import text from './static/text';

const AppThirdPage = () => {

    if(!text) return null;

    return (
    <BrowserRouter>
        <div id="thirdpage">
            <div id="bigbox" className="d-flex flex-column container align-items-center justify-content-center mx-auto">
                <h3 id="thirdtitle" className="d-flex new-line justify-content-center">{ text[0].title }</h3>
                <p id="thirdtext" className="d-flex new-line justify-content-center">{ text[0].text }</p>
                <Scroll to="fourthpage"><Link to="/blog" id="seerecipe" className="btn knowmore">Know More</Link></Scroll>
            </div>
        </div>
    </BrowserRouter>
    );

}

export default AppThirdPage;