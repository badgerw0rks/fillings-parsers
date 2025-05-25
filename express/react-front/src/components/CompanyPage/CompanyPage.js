import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsgaapList from './UsgaapList';

function CompanyPage( {setTitle} ) {
  const { id } = useParams();  // Grabs the id from the URL
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {


     setTitle(companyData?.entityName)
    // Simulate fetching company data by ID (you can replace this with an API call)
    const fetchData = async () => {
      // Example: Fetch data for the company
      const response = await fetch(`http://localhost:3001/company/${id}`);
      const data = await response.json();
      setCompanyData(data);
    };

    fetchData();
  }, [companyData]);  // Re-run when the id changes

  if (!companyData) {
    return <div>Loading...</div>;
  } else {
    //console.log(companyData.facts["us-gaap"])
   
    return (
      <UsgaapList data={companyData.facts["us-gaap"]}></UsgaapList>
    );
  }

 
}

export default CompanyPage;