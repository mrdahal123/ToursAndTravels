import Home from "./component/Home.js";
import Services from "./component/Services.js";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>


    </Router>
    </>
  );
}

export default App;
