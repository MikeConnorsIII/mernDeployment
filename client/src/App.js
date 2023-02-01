import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Update from './components/Update';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
        
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
