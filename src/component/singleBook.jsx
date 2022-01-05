import { Card, } from "react-bootstrap";
import React, { useState } from "react";
import CommentArea from "./CommentArea";

const SingleBook = ({book}) => {


 const [selected, setSelected] = useState(false);
 const [asin, setAsin] = useState("");
 

  // ================RENDER AREA

  return (
    
    <>
        <Card onClick={()=> {setSelected(!selected); setAsin(book.asin); console.log("This is asin of selected book",asin)}}        
style={{border: selected ? "2px solid gray" : "none"}}

       >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
           </Card.Body>
        </Card>
        <div style={{display: selected ? "block" : "none"}}>
        
        <CommentArea asin={asin}/>
      </div>
    </>
  );
};
export default SingleBook;
