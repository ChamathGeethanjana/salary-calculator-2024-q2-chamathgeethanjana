"use client";

import { useState } from "react";

const SalaryCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState(0);

  return (
    <div className="p-3 max-w-5xl mx-auto flex flex-col sm:flex-row mt-14 gap-2">
      <div className="bg-gray-100 w-full lg:w-7/12 p-4 border rounded-lg ">
        <h1 className="text-xl font-semibold ">Calculate Your Salary</h1>
        <div className="my-4 pt-3">
          <div className="font-semibold pb-4">
            <h2>Basic salary</h2>
          </div>
          <div>
            <input
              className="w-1/2 p-2 border rounded-md pt-3"
              type="number"
              value={basicSalary}
              onChange={(e) => setBasicSalary(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="pt-4 ">
          <div className="font-semibold ">
            <h2>Earnings</h2>
          </div>
          <span className="font-normal text-sm text-gray-500 ">
            Allowance, Fixed Allowance, Bonus and etc
          </span>
          <div className="pt-5">
            <button className="text-blue-600 hover:opacity-85">
              + Add New Allowance
            </button>
          </div>
        </div>
        <hr className="mt-5 " />
        <div className="pt-4 ">
          <div className="font-semibold ">
            <h2>Deductions</h2>
          </div>
          <span className="font-normal text-sm text-gray-500 ">
            Salary Advance, Loan Deductions, and all
          </span>

          <div className="pt-5">
            <button className="text-blue-600 hover:opacity-85">
              + Add New Allowance
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-full lg:w-5/12 p-3">
        <h1 className="text-xl font-semibold ">Your Salary</h1>
      </div>
    </div>
  );
};

export default SalaryCalculator;
