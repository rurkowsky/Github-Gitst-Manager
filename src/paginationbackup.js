import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './App.css'
 
function App() {
 const [gistsPerPage] = useState(5);
 const [offset, setOffset] = useState(1);
 const [gists, setAllgists] = useState([]);
 const [pageCount, setPageCount] = useState(0)
 
 const getgistData = (data) => {
   return (
     data.map(gist => <div key={gist.id}>
      <p> Gist ID: {gist.id}</p>
      <p> Nazwa: {gist.description}</p>
     </div>
     ) 
   ) 
 }
 
 const getAllgists = async () => {
  let token = "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"
   const res = await axios.get('https://api.github.com/users/rurkowsky/gists',{
    responseType: 'json',
    headers: {
      'Accept': 'application/vnd.github.v3.full+json',
      'Authorization': 'token ' + token
    }, 
  }) 
  
   const data = res.data;
   console.log(data)
   const slice = data.slice(offset - 1 , offset - 1 + gistsPerPage)
   
   
   const gistData = getgistData(slice)
 console.log(gistData)
  
   setAllgists(gistData)
   setPageCount(Math.ceil(data.length / gistsPerPage))
 }
 
 const handlePageClick = (event) => {
   const selectedPage = event.selected;
   setOffset(selectedPage + 1)
 };
 
 useEffect(() => {
   getAllgists()
 }, [offset])
 
 return (
   <div className="main-app">
    
    
     {gists}
 
    
     <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"} />
   </div>
 );
}
 
export default App;




function submitHandler( id, event ){
  let token = "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"
  let ghWrapper = new GithHubWrapper(token)
  
    ghWrapper.deleteGist(id)
  
  alert("gist usunięty!")
  event.preventDefault();
}