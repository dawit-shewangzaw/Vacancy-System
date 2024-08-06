import './App.css';
import Forgot from './Layouts/Forgot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Layouts/LogIn';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={<Forgot/>}/>
        <Route path='' element={<LogIn/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;