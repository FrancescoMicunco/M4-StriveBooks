import {Col, Button} from 'react-bootstrap'
// import AddComment from './AddComment'
import CommentsList from '../component/CommentsList'
import { useEffect, useState} from 'react'

const CommentArea = (asin)=>{
const [comments, setComments]=useState([])


let headers = {
  Authorization:
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2NDEyODIzMTYsImV4cCI6MTY0MjQ5MTkxNn0.6iYNJ5P3WYjLBc_-n0eH4yoCDkgwwlk6NTzKL_OmtiA",
};
const url = "https://striveschool-api.herokuapp.com/api/comments/"




useEffect(()=>{
  const getComments = async ()=>{
  const res = await fetch(url, {headers})
  try {if(res.ok){
  const comments= await res.json()
  setComments(comments)
}    
  } catch (error) {
    console.log("something goes wrong")
  }}
  
  
  getComments()}, [])

   return (
          <Col sx={12} >
            <h3>Comments</h3>
            <Button>add</Button>
            <ul>
              {
                comments.filter(i=>i.elementId===`${asin.asin}`).map(e=>
                  <li>{e.comment}</li>)

                  // <CommentsList comments={comments} asin={asin.asin}/>
              }
             </ul>
          </Col>
   )
}

export default CommentArea
