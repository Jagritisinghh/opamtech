import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import CourseDetail from './components/CourseDetail';
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<SignUpPage/>}/>

        <Route exact path="/" element={<Dashboard />}/>
        <Route element={<ProtectedRoute />}>
        <Route exact path="/coursedetail" element={<CourseDetail />}/>
          </Route>


        </Routes>

      </BrowserRouter>
      

  );
}

export default App;
