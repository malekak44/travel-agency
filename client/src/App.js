import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import { useGlobalContext } from './contexts/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <section>
      <h1>Loading...</h1>
    </section>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;