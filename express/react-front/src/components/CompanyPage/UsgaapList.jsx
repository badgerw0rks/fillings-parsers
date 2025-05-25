import React, { useState } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const UsgaapList = ({ data }) => {
    const [index, setIndex] = useState(-1)

    console.log(index)
    const c = Object.values(data)

    
    //console.log(data)
  return (
    <Container fluid>
      <Row>
        <Col>
        <Card style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <ListGroup variant="flush">
            {c.map((d, index) => (
            <ListGroup.Item  key={index} action onClick={() => {setIndex(index)}} >
                {d.label}
            </ListGroup.Item>
            ))}
        </ListGroup>
        </Card>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
 
  );
};

export default UsgaapList;