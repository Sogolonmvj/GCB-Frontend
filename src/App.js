import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
    <BrowserRouter>
        <div>
            <nav>
                <ul><Link to='/recipes'>Healthy Recipes </Link></ul>
                <ul><Link to='/blog'>Blog </Link></ul>
                <ul><Link to='/join'>Join </Link></ul>
                <ul><Link to='/register'>Register </Link></ul>
            </nav>
            <Switch>
                <Route path='/recipes'><h1>Our Best Recipes</h1></Route>
                <Route path='/blog'><h1>Read Our Blog</h1></Route>
                <Route path='/services'><h1>The best services ready to serve you</h1></Route>
                <Route path='/join'><h1>Join our membership to get special offer</h1></Route>
                <Route path='/register'><h1>Register</h1></Route>
                <Route path='/'><h1>Ready for trying a new recipe?</h1></Route>
            </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;