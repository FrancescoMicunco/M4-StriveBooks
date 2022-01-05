import { Card, } from "react-bootstrap";
import React, { useState } from "react";
import CommentArea from "./CommentArea";
import MyBadge from './myBadge'


const SingleBook = ({book}) => {


 const [selected, setSelected] = useState(false);
 const [asin, setAsin] = useState("");
 

  // ================  RENDER AREA

  return (
    
    <>
            <Card   onClick={()=> {setSelected(!selected); setAsin(book.asin)}}        
                    style={{border: selected ? "2px solid gray" : "none"}}>
                <MyBadge text={"-20%"} style={{position:"absolute", top:"0", let:"0"}}/>
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
