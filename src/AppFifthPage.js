import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const AppFifthPage = () => {

    // if() return null;

    return (
    <BrowserRouter>
        <div id="fifthpage" className="d-flex flex-horizontal">
            <div id="membership" className="d-flex flex-column"style={{height: 10 + 'rem'}}>
                <h3 id="join-title">Join our membership<br/> to get special offer</h3>
                <div id="member-email" className="d-flex flex-horizontal mt-4">
                    <input id="enteremail" placeholder="Enter your email address" className="px-3"></input>
                    <a href="*" id="join" className="btn join mx-3 d-flex flex-horizontal justify-content-center align-items-center">Join</a>
                </div>
                <div id="bar" className="d-flex flex-horizontal">
                    <p id="copyright">© Copyrights 2019 Stack. All Rights Reserved.</p>
                    <a href="*" id="policy" className=""><span>Privacy Policy</span></a>
                    <a href="*" id="terms"><span>Terms and Condition</span></a>
                </div>
            </div>
        </div>
    </BrowserRouter>
    );

}

export default AppFifthPage;