import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Maps from "./pages/mappage";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  //const currentuser = null;
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/maps" element={<Maps />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
