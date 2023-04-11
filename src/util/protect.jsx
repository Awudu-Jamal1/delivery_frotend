import { Routes, Route, Link, Navigate } from 'react-router-dom';


const ProtectedRoute = ({  children }) => {
    if (false) {
      return <Navigate to="/signin" replace />;
    }

    return children;
  };

  export default ProtectedRoute