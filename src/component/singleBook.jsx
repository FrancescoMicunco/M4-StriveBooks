import { Card, Col } from 'react-bootstrap';
import book from '../db/scifi.json'

const SingleBook =([{book}])=>(
<Col md={2} key={book.asin}>
                            <Card className="bookCards">
                                <Card.Img variant="top" src={this.book.img} height="250px" />
                                <Card.Body>
                                    <Card.Title className="bookTitle">{this.book.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

    
)

export default SingleBook