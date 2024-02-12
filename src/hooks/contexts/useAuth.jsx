import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};

/** A component that provides authentication context and state to its children. */
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: 'name', mail: 'mail', isBotaniste: true });

  /**
   * Return true if the user is authenticated and his allowed actions calculated, false otherwise
   */
  const isAuthenticated = () => !!user;

  /**
   * Check if the user is a botaniste
   */
  const isBotaniste = () => user.isBotaniste;

  /**
   * Get the current session
   */
  const login = () => {
    setUser({ name: 'name', mail: 'mail', isBotaniste: true });
  };

  /**
   * Clear the current session
   */
  const logout = () => {
    setUser(null);
  };

  const providedValuesMemo = useMemo(
    () => ({
      isAuthenticated,
      user,
      isBotaniste,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={providedValuesMemo}>{children}</AuthContext.Provider>;
}

/** A custom hook that provides access to the authentication context. */
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
