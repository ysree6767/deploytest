import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn1 from './SignIn1';
import SignIn2 from './SignIn2';
import SignIn3 from './SignIn3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in-1" element={<SignIn1 />} />
        <Route path="/sign-in-2" element={<SignIn2 />} />
        <Route path="/sign-in-3" element={<SignIn3 />} />
        <Route path="/" element={<SignIn1 />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
