import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './component/navbar'
import MyFooter from './component/footer'
import MyJumbotron from './component/jumbotron'
import Latestrelease from './component/latestRelease'
import warningSign from './component/warningSign';

function App() {
    return ( < div >
        <MyNavBar / >
        <MyJumbotron / >

        <Latestrelease / >


        <MyFooter / >

        </div>




    );
}

export default App;