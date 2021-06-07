import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard ({ recipe }) {

    if(!recipe) return null;
    
    return (
        <div id="card" className="card container d-flex flex-row align-items-center mx-4" style={{width: 528 + 'px'} && {height: 225 + 'px'}}>
            <img id="image" className="card-img-top img-fluid" style={{width: 253 + 'px'} && {height: 225 + 'px'}} src={recipe.image} alt="" />
            <div id="card-body" className="card-body d-flex flex-column justify-content-center" style={{width: 187 + 'px'} && {height: 127 + 'px'}}>
                <h5 id="recipename" className="card-title">{recipe.title}</h5>
                <Link to={recipe.link} id="seerecipe" className="btn mt-2">See Recipe</Link>
            </div>
        </div>
    );

};
