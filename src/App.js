// API KEY = b72c25db9b704d3a8bd6795549500944

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import {  Routes, Route , Link, BrowserRouter }from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Signup from "./components/Signup"
import Login from "./components/Login"
import { AuthProvider } from "./components/contexts/AuthContext"

export default class App extends Component {
  apiKey = "231a0cfa993848cf8f35356ff6cb0d8a"
  pageSize = 100;
  country = '';
  category = '';
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
     
      <><div>
 
      </div>
      
      <div>
          <LoadingBar color='#f11946' progress={this.state.progress}
            height={3} />


          <Routes>


          <Route path="/signup" component={Signup} />
              <Route path="/login" exact component={Login} />
          
            <Route exact path="/" element={<News setProgress={this.setProgress} key={1} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key={2} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key={3} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key={4} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key={5} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key={6} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key={7} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key={8} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='technology' />} />
          </Routes>



        </div></>
   )
    }
  }
