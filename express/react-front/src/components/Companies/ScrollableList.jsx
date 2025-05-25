import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ScrollableList = ({ companies }) => {
   
  return (
    <Card style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <ListGroup variant="flush">
        {companies.map((company, index) => (
          <ListGroup.Item  key={index}  
          as={Link}
          to={'/company/'+company.cik_str}
          action>
            {company.title} {company.ticker}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ScrollableList;