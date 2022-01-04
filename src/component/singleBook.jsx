import { Card, Col } from "react-bootstrap";
import React, { useState } from "react";

const SingleBook = ({book}) => {
  console.log("this is props on single book", book)
//   const [Selected, setSelected] = useState(false);
  const [border, setborder] = useState("");
  const [isActive, setisActive] = useState();
  const [Id, setId] = useState("");
  const [comments, setcomments] = useState([]);

  // ================  RENDER AREA

  return (
    
    <>
      <Col sx={6} md={3}>{book.map(book=>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            </Card.Body>
        </Card>)}
      </Col>
    </>
  );
};
export default SingleBook;
