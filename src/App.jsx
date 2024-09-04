import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/School Admin/Dashboard/Dashboard';
// import StudentInformation from './components/School Admin/StudentInformation/StudentInformation';
// import TeacherInformation from './components/School Admin/Teacher Information/TeacherInformation';
// import FinancialReport from './components/School Admin/FinancialReport/FinancialReport';
// import Extra from './components/Extra';
// import Login from './components/School Admin/login';
import SchoolRoutes from './components/School Admin/SchoolRoutes';
import SystemRoutes from './components/System Admin/SystemRoutes';
const App = () => {
  return (
    <>
    <SchoolRoutes />
    <SystemRoutes />
    </>
  );
};

export default App;
