import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import SearchBox from './components/SearchBox/searchBox';

const App = () => {

    return (
    <BrowserRouter>
        <div id="firstpage">
            <div className="container d-flex flex-horizontal align-items-center mt-3">
                <div id="Healthy" className="container d-flex flex-horizontal">
                    <span id="Logo" className="container d-flex flex-horizontal justify-content">Healthy Food</span>
                </div>
                <div id="right" className ="container d-flex flex-horizontal align-items-center justify-content-end">
                    <Scroll to="secondpage"><Link to='/recipes' className="text-decoration-none"><span className="container d-flex flex-horizontal">HEALTHY RECIPES</span></Link></Scroll>
                    <Scroll to="fourthpage"><Link to='/blog' className="text-decoration-none"><span className="container d-flex flex-horizontal">BLOG</span></Link></Scroll>
                    <Scroll to="fifthpage"><Link to='/join' className="text-decoration-none"><span className="container d-flex flex-horizontal">JOIN</span></Link></Scroll>
                    <Link to="/register" className="text-decoration-none d-flex flex-horizontal mx-3"><span id="registerbutton" className="d-flex flex-horizontal align-items-center justify-content-center">REGISTER</span></Link>
                </div> 
            </div>

            <div>
                <h1 id="text" className="container d-flex flex-horizontal mt-5 pt-5">
                    <span className="container d-flex flex-horizontal mt-5">Ready for <br /> Trying a new <br /> recipe?</span>
                </h1>
                <div className="d-flex flex-horizontal align-items-center">
                    <SearchBox id="searchbox" placeholder="Search healthy recipes" handleChange={(e) => console.log(e.target.value)} />
                    <span id="searchicon" className="d-flex flex-horizontal mx-3 mt-5"><img /></span>
                </div>
            </div>
            {/* <Switch>
                <Route path='/register'><h1>Register</h1></Route>
            </Switch> */}
        </div>
    </BrowserRouter>
    );
}

export default App;