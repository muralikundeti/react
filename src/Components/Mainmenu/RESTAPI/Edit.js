import React ,{Component} from 'react'
import axios from 'axios';
 import {Link} from 'react-router-dom';
// Global
var idno


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
<div className="container p-5">
    <h2>EDIT COMPONET PSGE</h2>
        <form>   
                <div class="mb-3">
                    <label class="form-label">ID</label>
                    <input type="email" class="form-control"value={id} />
                </div> 
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="email" class="form-control"value={name} />
                </div>  
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"value={email} />
                </div>  
                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input type="email" class="form-control"value={phone} />
                </div> 
                <div class="mb-3">
                <Link className='btn btn-primary mx-2' to="/Restapi">Goto Back</Link>
                    <button type="submit" class="btn btn-warning text-white" value="update" >Update</button>
                </div>    
        </form>
        
</div>
</>)
    }
    //Restapicalls
    componentDidMount(){
        const url = `http://localhost:3001/users/${idno}`;
        axios.get (url).then((result) => this.setState(result.data));//update apidata empty state object via setstate
    }
}