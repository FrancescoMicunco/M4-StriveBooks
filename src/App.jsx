import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './component/navbar'
import MyFooter from './component/footer'
import MyJumbotron from './component/jumbotron'
import Latestrelease from './component/latestRelease'
import warningSign from './component/warningSign';
import BookList from './component/bookList'
import SingleBook from './component/singleBook';

function App() {
    return ( < div >
        <MyNavBar / >
        <MyJumbotron / >
        <BookList />
        
        <Latestrelease / >


        <MyFooter / >

        </div>




    );
}

export default App;