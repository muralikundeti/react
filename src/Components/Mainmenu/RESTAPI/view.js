import React ,{Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
// Global
var idno

//global variable for restiapi_url
// const url = `http://localhost:3001/users` 


export default class view extends Component
{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        idno =this.props.match.params.idno
        // this.props->history,location,match
        console.log(idno)
        var {id,name,email,phone}=this.state
        return(<>
        <div className='container p-5'>
            <h2>view component page</h2>
            <p>
                {idno} th record Data
            </p>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{email}</li>
                <li>{phone}</li>
            </ul>
            <Link className='btn btn-primary' to="/Restapi">Goto Back</Link>
        </div>
        </>)
    }
     //Restapicalls
     componentDidMount(){
        const url = `http://localhost:3001/users/${idno}`;
        axios.get (url).then((result) => this.setState(result.data));//update apidata empty state object via setstate
    }
}
//  export default view;
