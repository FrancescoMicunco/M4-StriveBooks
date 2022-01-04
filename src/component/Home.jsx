import Booklist from "./bookList";
import MyJumbotron from "./jumbotron";
import MyBadge from "./myBadge";
import WarningSign from "./warningSign";
import React, { useState, useEffect } from 'react'
import books from '../db/scifi.json'


const Home = ()=> {
    
    return (
      <>
        <MyJumbotron />
        <WarningSign />
        <MyBadge />
        <Booklist  books={books}/>
      </>
    );
}

export default Home