import React ,{Component} from 'react'
 import axios  from 'axios'
const url = `http://localhost:3001/users` 

export default class  Signup extends Component
{
    constructor(props){
        super(props)
        this.state=
        {
            uname:'',
            email:'',
            phone:'',
            textConformation:''
        }
    }
    // name-input textbox
    unameHandling=(e)=>{
        this.setState({uname:e.target.value})
    }
    //email-input textbox
    emailHandling=(e)=>{
        this.setState({email:e.target.value})
    }
    // phone-input textbox
    phoneHandling=(e)=>{
        this.setState({phone:e.target.value})
    }
submitHandler=(e)=>
        {
        var FormData=
        {
            'name':this.state.uname,
            'email':this.state.email,
            'phone':this.state.phone

        }


        alert(JSON.stringify(FormData));
        // axios.post(url,FormData).then(()=>window.alert("...CREATE..")).
        // catch(()=>window.alert("ERROR"));
        // axios.post(url,FormData).then(()=>this.setState({textConformation:'Account Created..'}))
        // .catch(()=>this.setState({textConformation:'Account Failed..'}));
             axios.post(url,FormData).then(()=>{
                // window.alert("..CREATED..");
                this.props.history.push('/Restapi')
             });

         }

    render(){

        // Destructuring
        var {uname,email,phone,textConformation}=this.state
        return(<>
        <div className='container w-50'>
            <h4 className='py-3 text-center'>User  Registration</h4>
            <form onSubmit={this.submitHandler.bind(this)}>
                <div class="mb-3">
                    <label class="form-label">name</label>
                    <input type="text" class="form-control"
                    value={uname} onChange={this.unameHandling.bind(this)}/>
                    
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control"
                    value={email} onChange={this.emailHandling.bind(this)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input type="text" class="form-control"
                    value={phone} onChange={this.phoneHandling.bind(this)}/>
                </div> 
                <div class="mb-3"> 
                    
                    <button type="submit" class="btn btn-primary">Create Account</button>
                </div>
                 <p className='text-primary'>{textConformation}</p>
            </form>
        
        </div>
        </>)
    }

    
    }


