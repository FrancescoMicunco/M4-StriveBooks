import { Container, Row, Form, Col } from "react-bootstrap";
import SingleBook from "../component/singleBook.jsx";
import { useState } from "react";


const Booklist = ({books}) => {
  console.log(books)

    
  return (
    <>

  <h2>Books Title</h2>
  <Container>
    <Row >{books.map(b=>
      <Col sx={12} md={3}>
        <SingleBook book={b}/>
      </Col>)}
    </Row>
  </Container>
   
   </>
  )
};

export default Booklist;
