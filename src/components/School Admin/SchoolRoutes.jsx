import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import StudentInformation from './StudentInformation/StudentInformation';
import TeacherInformation from './Teacher Information/TeacherInformation';
import FinancialReport from './FinancialReport/FinancialReport';
// import Extra from './components/Extra';
import Login from './login';
const SchoolRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studentinformation" element={<StudentInformation />} />
          <Route path="/teacherinformation" element={<TeacherInformation />} />
          <Route path="/financialreport" element={<FinancialReport />} />
          {/* <Route path="/studentinformation" element={<StudentInformation />} />
          <Route path="/teacherinformation" element={<TeacherInformation />} />
          <Route path="/financialreport" element={<FinancialReport />} />
          <Route path="/extra" element={<Extra />} /> */}
        </Routes>
      </Router>
    );
  };
  
  export default SchoolRoutes;