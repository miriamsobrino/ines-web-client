import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(
          'https://ines-web-server.vercel.app/verify-token',
          {
            credentials: 'include',
          }
        );

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    verifyToken();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      const response = await fetch(
        'https://ines-web-server.vercel.app/logout',
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (response.ok) {
        setIsLoggedIn(false);
        navigate('/admin');
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
