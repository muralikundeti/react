import React from 'react'

import webApplication from './IT_SERVICES/webApplication'
import MobileApplication from './IT_SERVICES/MobileApplication'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//create itservices component
function Itservices() {
  return (<>
  <BrowserRouter>
    <div className="container-fluid p-4">
      <h2>IT_SERVICES</h2>
      <p>
        Note that the development build is not optimized.
        To create a production build, use npm run build.
        webpack compiled successfully
      </p>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <ul className="list-group">

              <li className="list-group-item">
                <Link to="/IT_SERVICES/web-app">Web Application Services</Link>
              </li>

              <li className="list-group-item">
                <Link to="/IT_SERVICES/mobile-app">Mobile/Tab Application Services</Link>
              </li>

              <li className="list-group-item">
                <Link to="/IT_SERVICES/ux-app">UX/UI Design Services</Link>
              </li>

              <li className="list-group-item">
                <Link to="/IT_SERVICES/support-app">Support/Help Project Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            
              <Switch>
                <Route exact path="IT_SERVICES" component={webApplication} />
                <Route path="/IT_SERVICES/web-app" component={webApplication} />
                <Route path="/IT_SERVICES/mobile-app" component={MobileApplication} />
                <Route path="/IT_SERVICES/ux-app" render={() => <h2>This is User Interface Design</h2>} />
                <Route path="/IT_SERVICES/support-app" render={() => <h2>This help for your project</h2>} />
              </Switch>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  </>)
}
export default Itservices;