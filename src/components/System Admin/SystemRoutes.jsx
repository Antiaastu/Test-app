import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SystemLogin from './SystemLogin';

import Users from './Users';
const SystemRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/systemadmin" element={<SystemLogin />} />
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/other-page" element={<OtherPage />} /> Example route */}
        <Route path='/users' element = {<Users/>}/>
      </Routes>
    </Router>
  );
};

export default SystemRoutes;
