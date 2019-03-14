import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Post extends Component{
    constructor(){
        super()
        this.state ={
            post: '',
            username: ''
        }
    }


    componentDidMount(){
        this.props.getUser()

        axios.get(`/api/post/${this.props.match.params.post_id}`).then(response => {
                this.setState({title: response.data[0].title, username: response.data[0].username, post: response.data[0].posts})
            })        
    }

    render(){
        return(
            <div>
                <div>
                    <h3>{this.state.title}</h3>
                    <div>
                        <p>by {this.state.username}</p>
                        <p>{this.state.post}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>state

export default connect(mapStateToProps, {getUser})(Post);