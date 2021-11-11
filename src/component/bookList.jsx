import { Container, Row, Form, Col } from 'react-bootstrap'
import SingleBook from '../component/singleBook.jsx'
import React from 'react'

/* 
const filterBookList=(arr, query)=>{
arr.filter((b)=>b.title.include(query))
.map((e=>{
return }))}
 */


class Booklist extends React.Component{
render(){
    state={
      let  itemState = ''
    }
    return(
        <>
<Container>
    <Row>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </Row>

</Container>



// display section
<Container>
<Row>
    {
    this.props.books.map(e=>
    (<Col xs={6} md={3}>
       <SingleBook book={e}/> 
    </Col>))
    }
    
</Row>

</Container>
)

    
}

}


 </>

export default Booklist