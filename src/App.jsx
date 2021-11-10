import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './component/navbar'
import MyFooter from './component/footer'
import MyJumbotron from './component/jumbotron'
import Latestrelease from './component/latestRelease'
import warningSign from './component/warningSign';
import BookList from './component/bookList'
import SingleBook from './component/singleBook';
import WarningSign from './component/warningSign'
import MyBadge from './component/myBadge'


function App() {
    return ( < div >
        <MyNavBar / >
        <MyJumbotron / >
            <WarningSign title="Pay Attention!"/>
<MyBadge color="primary" text="SALE 50%" />
        {/* <BookList /> */}
        
        <Latestrelease / >


        <MyFooter / >

        </div>




    );
}

export default App;