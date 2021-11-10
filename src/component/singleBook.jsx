import { Card, Col } from 'react-bootstrap';
import {Component} from 'react'

class SingleBook extends Component{
    state = {
        imgItem:"",
        titleitem:""

    }
    
    render(){return(
 SingleBook =(arr)=>(
    
<Col md={2} key={arr.asin}>
                            <Card className="bookCards">
                                <Card.Img variant="top" src={this.state.imgItem.img} height="250px" />
                                <Card.Body>
                                    <Card.Title className="bookTitle">{this.state.title.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
    
    
)


    )}
}





export default SingleBook