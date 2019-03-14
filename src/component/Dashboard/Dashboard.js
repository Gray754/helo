import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
            search: '',
            checkbox: false,
            posts: []
        }

    }

    componentDidMount(){
        this.props.getUser()
    }

    getPosts(){
        const {id} = this.props.user
        axios
            .get(`/api/posts/${id}?posts=${this.state.checkbox}&search=${this.state.search}`)
            .then(response => {
                this.setState({posts: response.data})
                // console.log(this.state.posts)
            })
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    checkbox(){
        this.setState({checkbox: !this.state.checkbox})
    }

    componentDidUpdate(prevProps, prevState){
        const checkbox = this.state
        if(checkbox !== prevState.checkbox){
            this.getPosts()
            // console.log('anything')
        }
    }


    render(){
        const postMap = this.state.posts.map((e, i) => {
            return(
                <Link to={`/post/${e.post_id}`} key={i}>
                    <h3>{e.title}</h3>
                </Link>
            )
        })
        return(
            <div>
                <input type='text' name='search' placeholder='Search by Title' onChange={(e) => this.handleChange(e)}/>
                <button onClick={() => this.getPosts()}>Submit</button>
                <label for='myPosts'>My Posts</label>
                <input onChange={() => this.checkbox()}type='checkbox'name='myPosts'/>
                {postMap}
            </div>
        )
    }
}


const mapStateToProps=state=>state

export default connect(mapStateToProps, {getUser})(Dashboard);