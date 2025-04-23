import React from 'react'
import ScrollableList from './ScrollableList';



export default function Companies({ companies }) {

  if(companies == null){
    return(<>Loading</>);
  }

  const c = Object.values(companies)
  //console.log(c.length)
  
  // const companiesItems = c.map(comp => <li className="dropdown-item" key={comp.cik}>{comp.title} {comp.ticker}</li>);
  //const companiesItems = c.map(comp => <Dropdown.Item href="#/action-1" key={comp.cik}>{comp.title} {comp.ticker}</Dropdown.Item>);
  

  return (

   <>
      <ScrollableList companies={c}></ScrollableList>
      {/* <SearchableList items={c}></SearchableList> */}
      </>
  )
}
