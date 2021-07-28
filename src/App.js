import './App.css';
import React from 'react';
const axios = require('axios');
export default class Wrapper extends React.Component{
  constructor(token) {
    super(token);
    this.state = { gists: [] };
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
  createGist(payload) {
    return this.postRequest('/gists', payload)
  }
  
  componentDidMount() {
     axios.get('https://api.github.com/users/rurkowsky/gists',{
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token
      },
      
      })
      
      .then(response => {     
        const gists = response.data;
        this.setState({gists})
        console.log(gists);
        //console.log(response.config);
      })
      .catch((error) => {
        console.log(error);
      });
      
      
};   
render(){
  
  return(
   /*<div>
     {this.state.gists.map(gist => <p>{gist.id}</p>)}
     const listGists = this.state.gists.map((gist, index) => 
  <li key={index}>{gist.id}</li>
  );


  <ol>{this.state.gists.map(gist => (<li key ={gist.id}>{gist.id}</li>))}</ol>
    </div>   gist.files['hello_world.py'].raw_url*/
    <div>
      <h1>LISTA GISTÓW</h1>
      <ul>
        
          {this.state.gists.map(gist => (
            <li key={gist.id}>{gist.id }</li>
          ))}
        </ul>
    
    </div>


    );
}
};
