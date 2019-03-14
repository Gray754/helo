import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout, getUser} from '../../ducks/reducer'

class Nav extends Component{

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        console.log(this.props.user)
       return(
        <div>
            <button><Link to='dashboard'>Home</Link></button>
            <button><Link to='new'>Newpost</Link></button>
            <button onClick={()=>this.props.logout()}><Link to='/'>Logout</Link></button>
        </div>
        ) 
    }
    
}

const mapStateToProps=state=>state

export default connect(mapStateToProps, {logout, getUser})(Nav);