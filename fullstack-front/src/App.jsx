import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
