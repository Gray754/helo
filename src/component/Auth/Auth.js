import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Auth extends Component{

    constructor(){
        super();
        this.state={
            toggleForm: false,
            username: '',
            password: ''
        }
    }

    updateInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    registerUser=()=>{
        const {username, password} =  this.state
        axios.post('/api/register', {
            username, 
            password
        }).then(()=>{
            this.props.getUser()
        }).catch((err)=>{
            console.log(err)
        })
    }

    submitLogin=()=>{
        const {username, password} = this.state
        axios
        .post('api/login', {username, password})
        .then(()=>{
            this.props.getUser()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.props.user)
        return(
            <div>
                <button onClick={()=>this.submitLogin()}>Login</button>
                <button onClick={()=>this.registerUser()}>Register</button>
                <p>Username:</p>
                <input type='text' name='username' onChange={this.updateInput}/>
                <p>Password:</p>
                <input type='password' name='password' onChange={this.updateInput}/>
            </div>
        )
    }
}
const mapStateToProps=state=>state

export default connect(mapStateToProps, {getUser})(Auth);