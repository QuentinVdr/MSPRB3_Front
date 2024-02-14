import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};

/** A component that provides authentication context and state to its children. */
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: 'name', mail: 'mail', isBotanist: true });

  /**
   * Return true if the user is authenticated and his allowed actions calculated, false otherwise
   */
  const isAuthenticated = () => !!user;

  /**
   * Check if the user is a botaniste
   */
  const isBotanist = () => user.isBotanist;

  /**
   * Get the current session
   */
  const login = () => {
    setUser({ name: 'name', mail: 'mail', isBotanist: true });
  };

  /**
   * Clear the current session
   */
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isBotanist, login, logout }}>{children}</AuthContext.Provider>
  );
}

/** A custom hook that provides access to the authentication context. */
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
