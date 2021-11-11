import {Component} from 'react'
import {Button, Form} from 'react-bootstrap'

export default class CommentArea extends Component{

state={

}

render=()=>{
    return (
    <div className="mb-3 py-2  text-center" style={{backgroundColor:'yellow'}}>
    
    <Button variant="secondary" size="sm" className="mb-2 ml-2">Add comment</Button>
    <Button variant="primary" size="sm" className="mb-2 ml-2">Comment list </Button>
    <Form.Select aria-label="Default select example" >
  <option>Rating</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
    </div>
    )
}

}