import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white-100 m-6 pt-6 pb-6 h-screen rounded-lg shadow-2xl font-nunito">
      <div className="flex items-center justify-center mb-8">
        <img src="/softnet.jpg" alt="Softnet Logo" className="w-12 h-auto" />
      </div>
      <nav className="pl-6 pr-0">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'flex items-center text-[#785BB4] font-bold py-3 px-6 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF] ' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-grid mr-3 text-xl"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studentinformation"
              className={({ isActive }) =>
                isActive ? 'text-[15.5px] flex items-center text-[#785BB4] font-bold py-3 px-6 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF]' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-person mr-3 text-xl"></i> Student Information
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teacherinformation"
              className={({ isActive }) =>
                isActive ? 'flex items-center text-[#785BB4] font-bold py-3 px-4 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF]' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-person-circle mr-3 text-xl"></i> Teacher Information
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/financialreport"
              className={({ isActive }) =>
                isActive ? 'flex items-center text-[#785BB4] font-bold py-3 px-6 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF]' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-bank mr-3 text-xl"></i> Financial Report
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? 'flex items-center text-[#785BB4] font-bold py-3 px-6 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF]' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-bell mr-3 text-xl"></i> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/extra"
              className={({ isActive }) =>
                isActive ? 'flex items-center text-[#785BB4] font-bold py-3 px-6 rounded-l-lg rounded-r-none bg-gradient-to-l from-[#D0A9F5] to-[#FFFFFF]' : 'flex items-center text-gray-700 py-3 px-4 rounded-l-lg rounded-r-none hover:bg-gray-200 font-bold'
              }
            >
              <i className="bi bi-gear mr-3 text-xl"></i> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
