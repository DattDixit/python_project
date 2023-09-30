import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Prediction from './Pages/Prediction';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/predict" Component={Prediction}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/about" Component={About}/>
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
