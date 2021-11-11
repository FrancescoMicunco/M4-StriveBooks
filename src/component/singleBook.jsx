import {Card, Col, Form} from 'react-bootstrap'
import { Component } from 'react'


class SingleBook extends Component{

    state={
        selected : false,
        border:"",
        isActive: false

    }
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
<div className="d-flex mb-5" >


    <h5 className="mr-3" style={{ display : this.state.selected? 'block' :'none' }}>
        CommentArea</h5>



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