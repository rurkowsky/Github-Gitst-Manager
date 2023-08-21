import React from 'react'
import GithHubWrapper from './App.js';
import './index.css';

const axios = require('axios');
export default class Listagistow extends React.Component {
    constructor(token) {
      let token = window.localStorage.getItem('token')
        super(token);
        this.state = {  gists: []};
        this.token = token
    }
    
    componentDidMount() {
    axios.get('https://api.github.com/',{
      responseType: 'json',
      headers: {
        'Accept': 'application/vnd.github.v3.full+json',
        'Authorization': 'token ' + this.token
      }, 
    }) 
      .then(response => {     
        var gists = response.data;
        this.setState({
          gists
        })
        console.log(gists);
      })
      .catch((error) => {
        console.log(error);
      });  
};  



mySubmitHandler = (id, event) => {
  this.mySubmitHandler = this.mySubmitHandler.bind(this); 
  let token = window.localStorage.getItem('token')
  let ghWrapper = new GithHubWrapper(token)
  event.preventDefault();
  
  function deleteGist(){
    ghWrapper.deleteGist(id)
    window.location.reload();
  }
  deleteGist()
  alert("gist usunięty!")
  
}


render(){
    return(
      <div> 
        <h1>LISTA GISTÓW</h1>
        
        <ol>
            {this.state.gists.map(gist => (
              <div key={gist.id} className="gistname"><li><p>Nazwa: {gist.description}</p><p>ID: {gist.id}<button onClick={this.mySubmitHandler.bind(this, gist.id)}>X</button></p></li></div>
            ))}
          </ol>
          
      </div>
      
      );
  }
  };
  