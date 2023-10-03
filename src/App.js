import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element = {<HomePage/>}/>
        <Route path='/page/:page'  element = {<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
