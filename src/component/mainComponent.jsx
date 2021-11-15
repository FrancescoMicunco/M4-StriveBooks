import BookList from './bookList'
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bookData from '../db/scifi.json'



class MainComponent extends Component{
render=()=>{
    return(
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <BookList books={bookData}/>
                    </Col>
                <Col xs={12} md={4}>Comments area</Col>
            </Row>
        </Container>
    )
}
}

export default MainComponent