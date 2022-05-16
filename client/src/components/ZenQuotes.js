import React from 'react'

function ZenQuotes() {
  
 
     console.log( fetch("https://zenquotes.io/api/random"));
    // .then(response => response.json())
    // .then(data => console.log(data));
  
  
   
   


  return (
    <div>
      <h1>ZenQuotes</h1>
    </div>
  )
}

export default ZenQuotes