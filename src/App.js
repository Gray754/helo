import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Nav from './component/Nav/Nav'
import Auth from './component/Auth/Auth'
import Post from './component/Post/Post'
import Form from './component/Form/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <Dashboard/>
      <Auth/>
      <Post/>
      <Form/>
      </div>
    );
  }
}

export default App;
