import './App.css';
import Home from './Home';
import Today from './Today';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/today" element={<Today />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
