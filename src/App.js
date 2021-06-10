import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import SearchBox from './components/SearchBox/searchBox';

const App = () => {

    return (
    <BrowserRouter>
        <div id="firstpage">
            <div className="container d-flex flex-horizontal align-items-center">
                <div id="Healthy" className="container d-flex flex-horizontal mt-4">
                    <span id="Logo" className="container d-flex flex-horizontal justify-content">Healthy Food</span>
                </div>
                <div id="right" className ="container d-flex flex-horizontal align-items-center justify-content-end mt-4">
                    <Scroll to="secondpage"><span className="scrolllink container d-flex flex-horizontal">HEALTHY RECIPES</span></Scroll>
                    <Scroll to="fourthpage"><span className="scrolllink container d-flex flex-horizontal">BLOG</span></Scroll>
                    <Scroll to="fifthpage"><span className="scrolllink container d-flex flex-horizontal">JOIN</span></Scroll>
                    <a href="/signup"><span id="registerbutton" className="d-flex flex-horizontal align-items-center justify-content-center mx-3">REGISTER</span></a>
                </div> 
            </div>

            <div id="content" >
                <h1 id="text" className="container d-flex flex-horizontal mt-5 pt-5">
                    <span className="container d-flex flex-horizontal mt-5">Ready for <br /> Trying a new <br /> recipe?</span>
                </h1>
                <div className="searchrecipe d-flex flex-horizontal align-items-center">
                    <SearchBox id="searchbox" placeholder="Search healthy recipes" handleChange={(e) => console.log(e.target.value)} />
                    <span id="searchicon" className="d-flex flex-horizontal mx-3 mt-5"><img alt="" /></span>
                </div>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;