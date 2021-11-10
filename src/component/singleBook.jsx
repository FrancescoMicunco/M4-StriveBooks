import { Card, Col } from 'react-bootstrap';
import {Component} from 'react'

class SingleBook extends Component{
    state={
        
    }
    
    render(){return(
 SingleBook =(arr)=>(
    
<Col md={2} key={arr.asin}>
                            <Card className="bookCards">
                                <Card.Img variant="top" src={arr.img} height="250px" />
                                <Card.Body>
                                    <Card.Title className="bookTitle">{arr.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
    
    
)


    )}
}





export default SingleBook