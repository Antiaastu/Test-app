import React from "react";
import TotalRevenueChart from "./TotalRevenueChart";
import TotalExpensesChart from "./TotalExpensesChart";
import BoughtMaterialsChart from "./BoughtMaterialsChart";
import TotalRevenueBarChart from "./TotalRevenueBarChart";
import ExpensesByBranchChart from "./ExpensesByBranchChart";
import RevenueCollectedByCashChart from "./RevenueCollectedByCashChart";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
// import './index.css';
const FinancialReport = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white-800 ">
          <TotalRevenueChart />
          <TotalExpensesChart />
          <BoughtMaterialsChart />
          <TotalRevenueBarChart />
          <ExpensesByBranchChart/>
          <RevenueCollectedByCashChart/>
        </div>
      </main>
      
    </div>
    
  );
};

export default FinancialReport;
