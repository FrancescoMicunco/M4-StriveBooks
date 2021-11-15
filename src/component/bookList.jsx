import { Container, Row, Form, Col } from 'react-bootstrap'
import SingleBook from '../component/singleBook.jsx'
import {Component} from 'react'
import CommentsList from './CommentsList.jsx'


class Booklist extends Component{

state={
      itemState : '',
      id:''
    }

render(){
        return(
        <>
<Container>
    <Row>
<Form >
  <Form.Group className="mb-3" >
    <Form.Label>Search by Title</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter title" 
    value = {this.state.itemState}
    onChange={
        e=>{this.setState({itemState:e.target.value})}
    }
        />
     </Form.Group>
 
</Form>

    </Row>

</Container>


{/* // display section */}
<Container>
<Row>
    <Col sx={12} md={9}>
        <Row>
            {
    this.props.books.filter(b=>b.title.includes(this.state.itemState))
    .map(e=>
        
        <Col md={4}>
           <SingleBook book={e}/> 
        </Col> 
    
   )}
        </Row>
    </Col>
    <Col sx={12} md={3}>
    <h1>Comments</h1>
    <ul>


<CommentsList id={this.state.id}/>
</ul>
    </Col>



</Row>

</Container>
</>  
)

  
}


}


 

export default Booklist