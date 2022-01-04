import {Col, Button} from 'react-bootstrap'
// import AddComment from './AddComment'
import CommentsList from '../component/CommentsList'
import { useEffect, useState} from 'react'

const CommentArea = (props)=>{
console.log("this is props from comment area", props.id )
  const [comments, setComments]=useState([])

  const getComments = async (id) => {
    
    let headers = {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2NDEyODIzMTYsImV4cCI6MTY0MjQ5MTkxNn0.6iYNJ5P3WYjLBc_-n0eH4yoCDkgwwlk6NTzKL_OmtiA",
    };

    let res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`+id, {
      headers,
    });
    try {
      if (res.ok) {
        let data = await res.json();
        console.log("those are data",data.comment)
       setComments(data)
      } else {
        alert("bad request");
      }
    } catch (error) {
      console.log("Something wrong on your connection or server connection");
    }
  };

useEffect(()=>{getComments(props.id)}, [])


    return (
          <Col sx={12} >
            <h3>Comments</h3>
            <Button>add</Button>
            <ul>{
               <CommentsList comments={comments} />
              }
            </ul>
          </Col>
   )
}

export default CommentArea
