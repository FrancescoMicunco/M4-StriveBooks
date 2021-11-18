import { Card, Col } from "react-bootstrap";
import React, { useState } from "react";

const SingleBook = (props) => {
//   const [Selected, setSelected] = useState(false);
  const [border, setborder] = useState("");
  const [isActive, setisActive] = useState();
  const [Id, setId] = useState("");
  const [comments, setcomments] = useState([]);

  // RENDER AREA

  return (
    <>
      <Col sx={6}>
        <Card
          onClick={() => {
            setSelected(!Selected);
            setId(props.book.asin);
          }}
          style={{ setborder: props.Selected ? "3px solid gray" : "none" }}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
            </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default SingleBook;
