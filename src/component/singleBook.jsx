import { Card, } from "react-bootstrap";
import React, { useState } from "react";
import CommentArea from "./CommentArea";

const SingleBook = ({book}) => {
 
 const [selected, setSelected] = useState(false);
  const [border, setborder] = useState("");
  const [isActive, setisActive] = useState(false);
  const [id, setId] = useState("");
  const [comments, setcomments] = useState([]);

  // ================RENDER AREA

  return (
    
    <>
        <Card onClick={()=> {setSelected(!selected); setId(book.asin)}}        
style={{border: selected ? "2px solid gray" : "none"}}

       >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>

            
            </Card.Body>
        </Card>
        <div style={{display: selected ? "block" : "none"}}>
        
        <CommentArea id={id}/>
      </div>
    </>
  );
};
export default SingleBook;
