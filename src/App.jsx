import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./component/navbar";
import MyFooter from "./component/footer";
import MyJumbotron from "./component/jumbotron";
import BookList from "./component/bookList";
import WarningSign from "./component/warningSign";
import MyBadge from "./component/myBadge";
import bookData from "./db/scifi.json";
import MainComponent from "./component/mainComponent";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <MyJumbotron />
      <WarningSign title="Pay Attention!" />
      <MyBadge color="primary" text="SALE 50%" />
      <h1>Books Area</h1>
      <BookList books={bookData} />
      <Routes>
        <Route path="/registrationForm" element={<registrationForm />} />
        <Route path="/" element={<MainComponent />} />
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
