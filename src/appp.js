import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './index.css';
import GithHubWrapper from './App.js';
function App() {
 const [gistsPerPage, setGistsPerPage] = useState('3');
 const [pageNumber, setPageNumber] = useState(0);
 const [gists, setAllgists] = useState([]);
 const [pageCount, setPageCount] = useState(0)
 const [value, setfilterValue] = useState('All')


 const getgistData = (filteredArr) => {
   return (
     filteredArr.map(gist => <div key={gist.id}>
       <div className='gistclass'>
      <div className='gists'> Gist ID: {gist.id}</div>
      <div className='gists'> Name: {gist.description}      <button onClick={mySubmitHandler.bind(this, gist.id)}>X</button></div>
      <div className='gists'>Public: {gist.public.toString()}</div>
      </div>
     </div>
     ) 
   ) 
 }
 


  var mySubmitHandler = (id, event) => {
  mySubmitHandler = mySubmitHandler.bind(this); 
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
 

 const getAllgists = async () => {
  let token = window.localStorage.getItem('token')
   const res = await axios.get('https://api.github.com/users/rurkowsky/gists',{
    responseType: 'json',
    headers: {
      'Accept': 'application/vnd.github.v3.full+json',
      'Authorization': 'token ' + token
    }, 
  })
   
  
   const data = res.data;

   const pagesVisited = pageNumber * gistsPerPage;
   switch (value) {
    case 'All':
      var filteredArr = data.filter(function(gist) {
        return gist.public === false, true;
      });
     
      break;
      
      case 'Private':
         filteredArr = data.filter(function(gist) {
    return gist.public === false;
  });
  
 
        break;
  
        case 'Public':
           filteredArr = data.filter(function(gist) {
    return gist.public === true;
  });
  

          break;
      
    default:
      break;
  }
  const filteredArrr = filteredArr
   const slice = filteredArrr.slice(pagesVisited, pagesVisited + gistsPerPage)
   const gistData = getgistData(slice)

   setAllgists(gistData)
   setPageCount(Math.ceil( filteredArrr.length / gistsPerPage))
   
 }
 useEffect(() => {
   getAllgists()
 }, [pageNumber, value, gistsPerPage])//uruchmi się ponownie gdy zmieni się pageNumber


 
function handlePageClick( {selected: selectedPage} ) {
  setPageNumber(selectedPage);
}
 var onChange = (event) => {
  setfilterValue(event.target.value);
}

var onChangedwa = (event) => {
  setGistsPerPage(event.target.value)
}

 return (
   <div className='list'>
      <div className='filter'>Filter</div>
      <select onChange={onChange}>
      <option value="All" >All</option>
      <option value="Public" >Public</option>
      <option value="Private" >Private</option>
      </select>
      <div className='filter'>PerPage</div>
      <select onChange={onChangedwa}>
      <option value="3" >3</option>
      <option value="5" >5</option>
      <option value="10" >10</option>
      </select>
     {gists}

     <ReactPaginate
       previousLabel={"poprzednia"}
       nextLabel={"następna"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       activeClassName={"paginationn"} />
   </div>
 );
}
 
export default App;