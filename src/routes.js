import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Post from './component/Post/Post'

export default (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/post/:post_id' component={Post}/>
        <Route exact path='/new' component={Form}/>
        <Route exact path='/' component={Auth}/>
    </Switch>
)