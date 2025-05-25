import React from 'react'
import ScrollableList from './ScrollableList';



export default function Companies(props) {

  const { companies } =props;







return companies === null ?  <p>Loading</p>  : <ScrollableList  companies={Object.values(companies)}></ScrollableList>

}
