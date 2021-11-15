import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './component/navbar'
import MyFooter from './component/footer'
import MyJumbotron from './component/jumbotron'
import BookList from './component/bookList'
import WarningSign from './component/warningSign'
import MyBadge from './component/myBadge'
import bookData from './db/scifi.json'
import MainComponent from './component/mainComponent';
import { Container, Row, Col } from 'react-bootstrap';

import CommentsList from './component/CommentsList'


function App() {
    return ( 
       
    < div >
        <MyNavBar / >
        <MyJumbotron / >
            <WarningSign title="Pay Attention!"/>
<MyBadge color="primary" text="SALE 50%" />
<Container>
    <Row>
        <Col >
            <h1>Books Area</h1>
            <BookList books={bookData}/>
        </Col>


    </Row>
</Container>




        
             <MyFooter / >
        </div>
    );
}

export default App;