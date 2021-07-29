import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './App';
import reportWebVitals from './reportWebVitals';
class GistForm extends React.Component {
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Gist utworzony! ");
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <p><b>Utwórz nowy gist:</b></p>
      <input type='text' onChange={this.myChangeHandler}/>
      <input type='submit'/>
      </form>
    );
  }
}
class SimpleForm2 extends React.Component {
  render() {
    return (
      <form>
        <b>SimpleForm</b>
        Name:
        <input type="text"/>
      </form>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
    <GistForm />
    <SimpleForm2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
