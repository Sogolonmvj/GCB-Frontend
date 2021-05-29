import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RecipeCard from './components/Cards/recipeCard';
import recipes from './components/Recipes/recipes';

const App = () => {
    return (
    <BrowserRouter>
        <div id="secondpage">
            <div id="title">
                <h3 className="d-flex justify-content-center">Our Best Recipes</h3>
                <div>
                    <h6 id="superiortext" className="d-flex flex-horizontal justify-content-center align-items-center text-center">Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</h6>
                </div>
            </div>
            <div id="cards" className="d-flex flex-column container pt-5 justify-content-center">
                <div id="superiorcards" className="d-flex flex-horizontal justify-content-center align-items-center mt-5">
                    <RecipeCard recipe={ recipes[0] } />
                    <RecipeCard recipe={ recipes[1] } />
                </div>
                <div id="inferiorcards" className="d-flex flex-horizontal justify-content-center align-items-center mt-5">
                    <RecipeCard recipe={ recipes[2] } />
                    <RecipeCard recipe={ recipes[3] } />
                </div>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;