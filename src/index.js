import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithHubWrapper from './App.js';
import GithHubWrapper from './App.js';
import reportWebVitals from './reportWebVitals';
import App from './appp';
import App from './appp';
class GistForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { content: ''}; 
    this.state = { nazwa: ''};
    this.state = { public: ''}
  }
 
  constructor(props){
    super(props);
    this.state = { content: ''}; 
    this.state = { nazwa: ''};
    this.state = { public: ''}
  }
 
  mySubmitHandler = (event) => {
    let gistPayload = {
      "description": this.state.nazwa + ".txt",
      "public": this.state.public,
      "files": {
        [this.state.nazwa + ".txt"] : {
          "content": this.state.content
        }
      }

    }
    let token = window.localStorage.getItem('token')
    let ghWrapper = new GithHubWrapper(token)
    let gistPayload = {
      "description": this.state.nazwa + ".txt",
      "public": this.state.public,
      "files": {
        [this.state.nazwa + ".txt"] : {
          "content": this.state.content
        }
      }

    }
    let token = window.localStorage.getItem('token')
    let ghWrapper = new GithHubWrapper(token)
    event.preventDefault();
    function creategist(){
      ghWrapper.createGist(gistPayload).then((response) => console.log(response.data))
    }
    creategist()
    alert("GIST Created!")
  }
  refreshPage = () =>{
    window.location.reload();
    function creategist(){
      ghWrapper.createGist(gistPayload).then((response) => console.log(response.data))
    }
    creategist()
    alert("GIST Created!")
  }
  refreshPage = () =>{
    window.location.reload();
  }
  myChangeHandler = (event) => {
    this.setState({content: event.target.value});
    this.setState({content: event.target.value});
  }
  myChangeHandlerdwa = (event) => {
    this.setState({nazwa: event.target.value});
  myChangeHandlerdwa = (event) => {
    this.setState({nazwa: event.target.value});
  }
  myChangeHandlertrzy = (event) => {
    this.setState({public: event.target.value.toString()});
  }
  myChangeHandlertrzy = (event) => {
    this.setState({public: event.target.value.toString()});
  }
  render() {
    return (
      <div>
       <div className='header'>GITHUB GIST MANAGER</div>
     <form onSubmit={this.mySubmitHandler} className='gistform'>
      <div className='creategist'><b>Create new GIST:</b></div>
      <div className='name'>Name</div>
      <input onChange = {this.myChangeHandlerdwa} className="inputname"></input>
      
      <div className='status'>Status</div>
      <input type="radio" onChange = {this.myChangeHandlertrzy} name="true/false" value="true"/>Public
      <br></br>
      <input type="radio" onChange = {this.myChangeHandlertrzy} name="true/false" value="false"/>Private
      
      <div className="content">Content:</div>
      <textarea className="inputname" name="gistcontent" rows="5" cols="20" onChange={this.myChangeHandler}/>
      <br></br>
      <input type='submit' className='submit' value='Create' onClick={this.refreshPage}/>
      </form>
      </div>
      
      </div>
      
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <GithHubWrapper />
    <GithHubWrapper />
    <GistForm />
   
    <App />
   
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
