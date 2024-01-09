import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<SignUpPage/>}/>

        <Route exact path="/" element={<Dashboard />}/>
        </Routes>

      </BrowserRouter>
      

  );
}

export default App;
