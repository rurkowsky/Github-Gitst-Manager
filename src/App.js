import './App.css';
import React from 'react';
const axios = require('axios');
export default class Wrapper extends React.Component{
  state = {
      gists: []
    }
  constructor(token) {
    super(token);
    this.token = "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"
    this.client = axios.create({
      baseURL: 'https://gist.github.com/rurkowsky/5f432739e63bf4bf06e97d69908b793a.js',
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token,
        'Access-Control-allow-origin' : '*',
        'X-Custom-Header': this.token,
        
      }
    })
  }
/*
  getRequest(path) {
    return this.client.get(path)
  }

  postRequest(path, payload) {
    return this.client.post(path, payload)
  }

  root() {
    return this.getRequest('/')
  }

  createGist(payload) {
    return this.postRequest('/gists', payload)
  }

  getGist(gistId) {
    return this.getRequest(`/gists/${gistId}`)
  }*/
  componentDidMount() {
     axios.get('https://api.github.com/users/rurkowsky/gists',{
      responseType: 'json',
      headers: {
        /*'Accept': 'application/vnd.github.v3+json',
        'Authorization': "token"+ this.token,
        'Access-Control-allow-origin' : '*',
        'X-Custom-Header': this.token,
        'Content-Type': 'application/json'
        */
      },
      
      })
      .then(response => {
        const gists = response.data;
        this.setState({gists})
        console.log(response.data);
        console.log(response.config);
      })
      .catch((error) => {
        console.log(error);
      });
};
  

  
    
render(){
  return(
    /*<div>
     { this.state.gists.map(gist => <p>{gist.id}</p>)}
     
    </div>*/

    <div>
      {React.Children.map(children, function(gists)}
    </div>
   
  
  
  
    );
}
};
