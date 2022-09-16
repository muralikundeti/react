import React from 'react'
// profile photo
import profile from './../../assets/images/akanda.jpg'

//background wallpapers
import wallpaper from './../../assets/images/wallpa.jpg'

//internal styles 
var styles = {
         backgroundImage:`url(${wallpaper})`,
         backgroundRepeat:'no-repeat',
         backgroundSize: 'cover'
}

// create Home Component
function Home(){

return (<>
    
    <div className="jumbotron text-white p-5" style={styles}>
        <div className="container p-3">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="h1 pt-5 mt-5">I am Murali.Kundeti</h1>
                    <h5 className="bg-success p-2 mt-3 w-75 text-center">frontend Developer</h5>
                </div>

                <div className="col-lg-6">
                    <img src={profile} className=" w-50 h-80" alt="murali"/>
                </div>
            </div>
        </div>
    </div>
   
    
</>)
}
export default Home;


