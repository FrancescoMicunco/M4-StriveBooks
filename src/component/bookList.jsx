import { Container, Row, Form, Col } from "react-bootstrap";
import SingleBook from "../component/singleBook.jsx";
import { useState } from "react";
import books from "../db/scifi.json";

const Booklist = (props) => {
  

    
  return (
    <>
      {/* // display section */}
      <Container>
        <Row>
          <Col sx={12} md={9}>
            <Row>
              {books
                .filter((b) => b.title.includes())
                .map((e) => (
                  <Col md={4}>
                    <SingleBook book={e} asin={books.asin} setId={setId} />
                  </Col>
                ))}
            </Row>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Booklist;
