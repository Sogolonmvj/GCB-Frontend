import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SearchBox from './components/SearchBox/searchBox';
import blog from './components/Blog/blog';
import recipes from './components/Recipes/recipes';

const App = () => {
    return (
    <BrowserRouter>
        <div id="firstpage">
            <nav className="container d-flex flex-horizontal align-items-center mt-3">
                <ul id="Healthy" className="container d-flex flex-horizontal">
                    <span id="Logo" className="container d-flex flex-horizontal justify-content">Healthy Food</span>
                </ul>
                <ul id="right" className ="container d-flex flex-horizontal align-items-center justify-content-end">
                    <Link to='/recipes' className="text-decoration-none"><span className="container d-flex flex-horizontal">HEALTHY RECIPES</span></Link>
                    <Link to='/blog' className="text-decoration-none"><span className="container d-flex flex-horizontal">BLOG</span></Link>
                    <Link to='/join' className="text-decoration-none"><span className="container d-flex flex-horizontal">JOIN</span></Link>
                    <Link to="/register" className="text-decoration-none d-flex flex-horizontal mx-3"><span id="registerbutton" className="d-flex flex-horizontal align-items-center justify-content-center">REGISTER</span></Link>
                    {/* <button id="registerbutton" type="button" className="btn btn-lg mx-3"><span className="d-flex flex-horizontal">REGISTER</span></button> */}
                </ul> 
            </nav>

            <div>
                <h1 id="text" className="container d-flex flex-horizontal mt-5 pt-5">
                    <span className="container d-flex flex-horizontal mt-5">Ready for <br /> Trying a new <br /> recipe?</span>
                </h1>
                <div className="d-flex flex-horizontal align-items-center">
                    <SearchBox placeholder="Search healthy recipes" handleChange={(e) => this.setState({searchField:e.target.value})} />
                    <span id="searchicon" className="d-flex flex-horizontal mx-3 mt-5"><img></img></span>
                </div>
            </div>
            {/* <Switch>
                <Route path='/recipes'><h1>Our Best Recipes</h1></Route>
                <Route path='/blog'><h1>Read Our Blog</h1></Route>
                <Route path='/services'><h1>The best services ready to serve you</h1></Route>
                <Route path='/join'><h1>Join our membership to get special offer</h1></Route>
                <Route path='/register'><h1>Register</h1></Route>
                <Route path='/'><h1 id="register" className="container d-flex flex-horizontal">Ready for trying a new recipe?</h1></Route>
            </Switch> */}
        </div>
    </BrowserRouter>
    );
}

export default App;