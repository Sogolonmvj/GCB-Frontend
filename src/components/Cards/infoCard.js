import React from 'react';

export default function InfoCard ({ info }) {

    if (!info) return null;

    return (
       <div id="infocard" className="card mb-2 mx-3" style={{width: 348 + 'px'}, {height: 450 + 'px'}}>
          <img className="card-img-top img-fluid" src={info.image} alt="Card image cap" style={{width: 348 + 'px'}, {height: 247 + 'px'}} />
          <div className="card-body">
            <h4 className="card-title new-line">{info.title}</h4>
            <div className="author d-flex align-items-center">
              <img className="author-photo" src={info.author_image} />
              <p className="author-name">{info.author}</p>
            </div>
          </div>
        </div>
    );

};