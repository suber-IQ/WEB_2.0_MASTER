import './App.css'
import Navbar from './components/Navbar/Navbar'
import { 
  BrowserRouter as Router, // Use BrowserRouter as an alias for Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App;
