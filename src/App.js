import './App.css';
import React from 'react';
const axios = require('axios');
export default class Wrapper extends React.Component{
  state = {
      gists: []
    }
  constructor(token) {
    super(token);
    this.token = " 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"
    this.client = axios.create({
      baseURL: 'https://api.github.com/',
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token,
        'Access-Control-allow-origin' : '*',
        
      }
    })
  }

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
  }
  componentDidMount() {
     const URL = `https://gist.github.com/rurkowsky/5f432739e63bf4bf06e97d69908b793a`
     axios.get(URL, {'headers':{'Authorization': "token"+ this.token} })
      .then(response => {
        const gists = response.data;
        this.setState({gists})
      })
      .catch((error) => {
        console.log(error);
      });
};
    

  
    
render(){
  return(
    <div>
     { this.state.gists.map(gist => <li>{gist}</li>)}
  
    </div>
   
    );
}};
