import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
 

  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute