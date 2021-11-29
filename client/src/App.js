import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './contexts/AppContext';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;