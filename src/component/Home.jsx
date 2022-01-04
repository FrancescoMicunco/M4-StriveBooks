import Booklist from "./bookList";
import MyJumbotron from "./jumbotron";
import MyBadge from "./myBadge";
// import CommentsArea from "./CommentsArea";
import WarningSign from "./warningSign";
import React, { useState, useEffect } from 'react'
import books from '../db/scifi.json'


const Home = ()=> {
    const [Asin, stateAsin]= useState('')
    const [SelectedAsin, stateSelectedAsin] = useState("");
    const [title, setTitle] = useState('')
    return (
      <>
        <MyJumbotron />
        <WarningSign />
        
        <MyBadge />
        <Booklist  books={books}/>
        {/* <CommentsArea selectedAsin={SelectedAsin} /> */}
      </>
    );
}

export default Home