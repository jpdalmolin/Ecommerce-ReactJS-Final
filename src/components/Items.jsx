import React from 'react'
import Card from 'react-bootstrap/Card'
import {Row } from 'react-bootstrap'

import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'



export const handleCount=(cant)=>{
  alert("Usted agrego " +cant+ " a su carrito !");

}

export const Items = ({nombre,id,image,precio}) => {

    return (
      <>
      
   <Container fluid="md">
      <Row>
      <Col>
    <Card style={{ width: '18rem' }}>
    <Link to={`/detail/${id}`}>
     <Card.Img variant="top" src={image} />
     </Link>
     <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
    Precio {precio}
    <Link to={`/detail/${id}`}><Button variant="primary">Ver más</Button></Link>
  </Card.Body>
 
</Card>
</Col>
</Row>
</Container>
    
</>
    )
  }
  export default Items