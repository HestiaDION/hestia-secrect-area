import './styles/App.css'

import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token')); // Inicia com o token do localStorage

  const login = () => {
      setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    setIsAuthenticated(false); // Atualiza o estado de autenticação
  };

  return (
      <BrowserRouter>
          <Routes>
              <Route 
                  path="/" 
                  element={isAuthenticated ? <Home onLogout={logout}/> : <Navigate to="/login" />} 
              />
              <Route 
                  path="/login" 
                  element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={login} />} 
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App
