import {Card, Col} from 'react-bootstrap'
import { Component } from 'react'

class SingleBook extends Component{

    state={
        selected : false,
        border:""

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
</Col>                   
</>
     )
    }
  
}





export default SingleBook