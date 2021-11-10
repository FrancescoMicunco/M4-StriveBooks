import {Card, Col} from 'react-bootstrap'

const SingleBook = (props)=>(
<Col sx={3}>
<Card >
  <Card.Img variant="top" src={props.book.img} />
  <Card.Body>
    <Card.Title>{props.book.title}</Card.Title>
    
  </Card.Body>
</Card>
</Col>
)

export default SingleBook