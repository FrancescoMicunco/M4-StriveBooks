import { Container, Row, Form, Col } from "react-bootstrap";
import SingleBook from "../component/singleBook.jsx";
import { Component } from "react";
import CommentsList from "./CommentsList.jsx";
import { useState } from "react";
import SearchForm  from "./SearchForm";
import books from "../db/scifi.json";

const Booklist = () => {
  const [Item, setItem] = useState("");
  const [Id, setId] = useState("");

  return (
    <>
     

      {/* // display section */}
      <Container>
        <Row>
          <Col sx={12} md={9}>
            <Row>
              {books
                .filter((b) => b.title.includes(Item))
                .map((e) => (
                  <Col md={4}>
                    <SingleBook book={e} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col sx={12} md={3}>
            <h1>Comments</h1>
            <ul>
              <CommentsList />
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booklist;
