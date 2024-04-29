import Home from './components/pages/Home'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Route path='/' exact component={Home} />

    </Router>
    </>
  )
}

export default App
