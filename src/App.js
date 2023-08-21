import React from 'react'
const axios = require('axios');
window.localStorage.setItem('token', "place your token here");
export default class GithHubWrapper extends React.Component {
  constructor(token) {
    super(token);
    this.token = token
    this.client = axios.create({
      baseURL: 'https://api.github.com/',
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token
      }
    })
  }

  getRequest(path) {
    return this.client.get(path)
  }

  postRequest(path, payload) {
    return this.client.post(path, payload)
  }
  deleteRequest(path, payload){
    return this.client.delete(path, payload)
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
  deleteGist(gistId) {
    return this.deleteRequest(`/gists/${gistId}`)
  }
  render(){
    return(
      <div></div>
    )
    }
}



