import "./App.scss";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./contents/home/Home";
import Contacts from "./contents/contacts/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="Velocity-Templete/" element={<Home />}></Route>
          <Route path="Velocity-Templete/contact" element={<Contacts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
