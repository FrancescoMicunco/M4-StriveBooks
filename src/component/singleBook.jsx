import { Card, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import CommentArea from "./CommentArea";

const SingleBook = ({book}) => {
 
 const [selected, setSelected] = useState(false);
  const [border, setborder] = useState("");
  const [isActive, setisActive] = useState(false);
  const [Id, setId] = useState("");
  const [comments, setcomments] = useState([]);

  // ================RENDER AREA
console.log("State of single book", selected)
  return (
    
    <>
        <Card onClick={()=> setSelected(!selected)}        
style={{border: selected ? "2px solid gray" : "none"}}

       >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>

            
            </Card.Body>
        </Card>
        <div style={{display:selected?"display-block":"display-none"}}>
        <Button>+ comment</Button>
        <CommentArea />
      </div>
    </>
  );
};
export default SingleBook;
