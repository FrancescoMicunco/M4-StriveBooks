import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './component/navbar'
import MyFooter from './component/footer'
import MyJumbotron from './component/jumbotron'
import BookList from './component/bookList'
import WarningSign from './component/warningSign'
import MyBadge from './component/myBadge'
import bookData from './db/scifi.json'



function App() {
    return ( 
       
    < div >
        <MyNavBar / >
        <MyJumbotron / >
            <WarningSign title="Pay Attention!"/>
<MyBadge color="primary" text="SALE 50%" />

        <BookList books={bookData}/>
             <MyFooter / >
        </div>
    );
}

export default App;