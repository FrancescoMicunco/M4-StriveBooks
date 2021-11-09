import { height } from 'dom-helpers'
import {Card, Container, Row} from 'react-bootstrap'
import books from '../db/scifi.json'

const Latestrelease =()=>(

  <Container >
      <Row >
   {books.map(book =>
    
        <div  className="Col-3 d-flex">

<Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={book.img} />
  </Card>
        </div>
         )}
      </Row>



    </Container>
    
)
     
   


export default Latestrelease