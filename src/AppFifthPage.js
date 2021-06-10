import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const AppFifthPage = () => {

    return (
        <BrowserRouter>
            <div id="fifthpage" className="d-flex flex-horizontal">
                <div id="membership" className="d-flex flex-column" style={{height: 10 + 'rem'}}>
                    <h3 id="join-title">Join our membership<br/> to get special offer</h3>
                    <div id="member-email" className="d-flex flex-horizontal mt-4">
                        <input id="enteremail" type="text" placeholder="Enter your email address" className="form-control px-3" />
                        <a href="/signup"><span id="join" className="btn join mx-3 d-flex flex-horizontal justify-content-center align-items-center">Join</span></a>
                    </div>
                    <div id="bar" className="d-flex flex-horizontal">
                        <p id="copyright">© Copyrights 2019 Stack. All Rights Reserved.</p>
                        <Link to="/policy" id="policy"><span>Privacy Policy</span></Link>
                        <Link to="/terms" id="terms"><span>Terms and Condition</span></Link>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default AppFifthPage;