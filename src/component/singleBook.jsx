import {Card, Col, Form, Button} from 'react-bootstrap'
import { Component } from 'react'



class SingleBook extends Component{

    state={
        selected : false,
        border:"",
        isActive: false,
        id:'',
        comments:[]
    }


    // COMPONENT DI MOUNT
  componentDidMount =  ()=>{
      this.fetchFunction()
}

fetchFunction=async ()=>{
const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4"
}
}
)
try{
    if(res.ok){

const books = await res.json()
this.setState({comments:books})
    }else{console.log("something wrong!")}
}catch(error){console.log("Some about connection create an error")}

}

// RENDER AREA 

    render=()=>{
        return(
<>

                <Col sx={3}>
<Card onClick={()=>
this.setState({selected:!this.state.selected})} 

style={{ border : this.state.selected? '3px solid gray' :'none' }}>
  <Card.Img variant="top" src={this.props.book.img} />
  <Card.Body>
    <Card.Title>{this.props.book.title}</Card.Title>
      </Card.Body>
</Card>
<div className="mb-5" >

<div style={{ display : this.state.selected? 'block' :'none' }}>
    <h5 className="mr-3" style={{backgroundColor:'yellow'}}>  CommentArea</h5>
    
    
    <Button variant="primary" size="sm" onClick={(e)=>
this.setState({id:this.props.book.id})}>
      Comment list
    </Button>{' '}
   
   
   
    <Button variant="secondary" size="sm">Add comment</Button>
</div>


    <Form.Select aria-label="Default select example" style={{ display : this.state.selected? 'block' :'none' }}>
  <option>Rating</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>

</div>

</Col>                   
</>
     )
    }
  
}





export default SingleBook