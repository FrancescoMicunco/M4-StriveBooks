import Booklist from "./bookList";
import MyJumbotron from "./jumbotron";
import MyBadge from "./myBadge";
import WarningSign from "./warningSign";
import React, { useState, useEffect } from 'react'
import books from '../db/scifi.json'
import {Container, Row, Col} from 'react-bootstrap'



const Home = ()=> {
    
    return (
      <>
        <MyJumbotron />
        <WarningSign />
        <MyBadge />
        <Container>
          <Row>
            <Col md={8}><Booklist  books={books}/></Col>
            <Col md={4} style={{backgroundColor:"gray"}}><h2>Comment section</h2></Col>
          </Row>
        </Container>
        
      </>
    );
}

export default Home
