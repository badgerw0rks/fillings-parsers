import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';



export default function Companies({ companies }) {

  if(companies == null){
    return(<></>);
  }

  const c = Object.values(companies)
  console.log(c.length)
  
  // const companiesItems = c.map(comp => <li className="dropdown-item" key={comp.cik}>{comp.title} {comp.ticker}</li>);
  const companiesItems = c.map(comp => <Dropdown.Item href="#/action-1" key={comp.cik}>{comp.title} {comp.ticker}</Dropdown.Item>);
  

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>{companiesItems}</Dropdown.Menu>
      </Dropdown>
  )
}
