import Booklist from "./bookList";
import MyJumbotron from "./jumbotron";
import MyBadge from "./myBadge";
import CommentsArea from "./CommentsArea";
import WarningSign from "./warningSign";
import React, { useState, useEffect } from 'react'



const Home = ()=> {
    const [Asin, stateAsin]= useState('')
const [SelectedAsin, stateSelectedAsin] = useState("");
    return (
      <>
        <MyJumbotron />
        <WarningSign />
        <MyBadge />
        <Booklist asin={Asin} selectedAsin={SelectedAsin} />
        <CommentsArea selectedAsin={SelectedAsin} />
      </>
    );
}

export default Home