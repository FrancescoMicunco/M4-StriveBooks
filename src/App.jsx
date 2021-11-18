import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./component/navbar";
import MyFooter from "./component/footer";
import Home from "./component/Home";
import bookData from "./db/scifi.json";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Registration from "./component/Registration";


function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
