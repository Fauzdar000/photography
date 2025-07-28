import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Dummyproject from './navbar/navbar.jsx';
import CarouselHome from './pages/Home';
import Aboutus from './pages/Aboutme.jsx';
import Photography from './pages/photograpy.jsx';
import Loader from './loader/Loader.jsx';

function AppWrapper() {
  const location = useLocation(); // 👈 Track the route
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second loader
    return () => clearTimeout(timer);
  }, [location.pathname]); // 👈 Only run when route changes

  return (
    <>
      <Dummyproject />
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<CarouselHome />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
