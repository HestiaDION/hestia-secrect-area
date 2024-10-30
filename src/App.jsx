import './styles/App.css'

import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para autenticar o usuário
  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/" /> : <Login onLogin={login} />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
