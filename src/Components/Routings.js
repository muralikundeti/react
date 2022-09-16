//routings.js--module
import React from 'react'


//components-nestings 

import Header from './Mainmenu/Header.js'
import Footer from './Mainmenu/Footer.js'
import Home from './Mainmenu/Home.js'
import About from './Mainmenu/About'
import Service from './Mainmenu/Service.js'
import Contact from './Mainmenu/Contact.js'
import Itservices from './Mainmenu/Itservices.js'
import Myclass from './Mainmenu/Myclass.js'
import Lifecycle from './Mainmenu/Lifecycle.js'
import Restapi from './Mainmenu/Restapi.js'
import view from './Mainmenu/RESTAPI/view'
import Edit from './Mainmenu/RESTAPI/Edit'
 import ReactBootstrap from './Mainmenu/ReactBootstrap'
 import Signup from './Mainmenu/Signup'

//class components
//import view from './Mainmenu/RESTAPI/view.js'

//router -package
import {BrowserRouter, Route} from 'react-router-dom';

//Routings -setup
function Routings(){

    return (<BrowserRouter>

    {/* NavLink*/}
    <Header/>

    {/*Default page */}
    {/*<Route Path ="/" component={Home}/>*/}

        {/*<Home/>*/}
        <Route path="/home" component={Home} />

        {/*<About/>*/}
        <Route path="/about" component={About} />

        {/*<Services/>*/}
        <Route path="/service" component={Service} />

        {/*<Itservices/>*/}
        <Route path="/Itservices" component={Itservices} />

        {/*<Contact/>*/}
        <Route path="/contact" component={Contact} />

        {/*<Myclass/>*/}
        <Route path="/Myclass" component={Myclass} />

        {/*<Lifecycle/>*/}
        <Route path="/Lifecycle" component={ Lifecycle} />

        {/*<Restapi/>*/}
        <Route exact path="/Restapi" component={Restapi} />
         {/*<ReactBoostrap/>*/}
         { <Route exact path="/rb" component={ReactBootstrap} /> }
 
        {/*view*/}
        { <Route  path="/Restapi/view/:idno" component={view} /> }
        {/*edit*/}
        { <Route  path="/Restapi/Edit/:idno" component={Edit} /> }
         {/*Signup*/}
         { <Route exact path="/Signup" component={Signup} /> }


        {/*Footer section*/}
        <Footer/>
        
    </BrowserRouter>)
}
export default Routings;
