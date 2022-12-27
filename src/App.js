import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ManageClient from "./Assests/ManageClient"
import AllClients from "./client/AllClients"
import { Home } from "./Home";
function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route exact path="/assets" element={<ManageClient />} />
          <Route exact path="/clients" element={<AllClients />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
