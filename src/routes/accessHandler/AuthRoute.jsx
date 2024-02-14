import { useAuth } from '@hooks/contexts/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * Component used to check if the user is authenticated
 * @returns children routes if authenticated else redirect to the login page
 */
const AuthRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default AuthRoute;
