import Booklist from "./bookList";
import MyJumbotron from "./jumbotron";
import MyBadge from "./myBadge";
import CommentsList from "./CommentsList";
import WarningSign from "./warningSign";


const Home = ()=> {

    return (
        <>
        <MyJumbotron />
        <WarningSign />
        <MyBadge />
        <Booklist />
        <CommentsList />
</>
    )
}

export default Home