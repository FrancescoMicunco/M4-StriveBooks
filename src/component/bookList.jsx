import { Container, Row, Form, Col } from "react-bootstrap";
import SingleBook from "../component/singleBook.jsx";
import { useState } from "react";


const Booklist = ({books}) => {
  const [Item, setItem] = useState('');
    console.log("Books from booklist",books)
  return (
    <>
<Container>
    <Row>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search by Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={Item}
            onChange={(e) => {
            setItem(e.target.value);
              
            }}
          />
        </Form.Group>
      </Form>
    </Row>
  </Container>
  <h2>Books Title</h2>
 
  <Container>
    <Row >{books.filter(b=>b.title.toLowerCase().includes(Item)).map(b=>
      <Col sx={12} md={3}>
        <SingleBook book={b}/>
      </Col>)}
    </Row>
  </Container>
   
   </>
  )
};

export default Booklist;
