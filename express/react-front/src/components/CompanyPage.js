import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CompanyPage() {
  const { id } = useParams();  // Grabs the id from the URL
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Simulate fetching company data by ID (you can replace this with an API call)
    const fetchData = async () => {
      // Example: Fetch data for the company
      const response = await fetch(`http://localhost:3001/company/${id}`);
      const data = await response.json();
      setCompanyData(data);
    };

    fetchData();
  }, [id]);  // Re-run when the id changes

  if (!companyData) {
    return <div>Loading...</div>;
  } else {
    console.log(companyData)
    return (
      <div>
        {/* <h1>{companyData.name}</h1>
        <p>{companyData.description}</p> */}
        {/* You can display more details from the company data here */}
      </div>
    );
  }

 
}

export default CompanyPage;