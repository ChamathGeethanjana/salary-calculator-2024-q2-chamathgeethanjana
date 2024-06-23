"use client";

import { useState } from "react";
import { NumberInput } from "../components/input.number";
import { TextButton } from "../components/text.button";
import Table from "../components/table";

export default function Home() {
  const [basicSalary, setBasicSalary] = useState(100000);
  const [earnings, setEarnings] = useState(0);

  return (
    <div className="p-3 max-w-5xl mx-auto flex flex-col sm:flex-row mt-14 gap-2">
      <div className="bg-secondarybg w-full lg:w-7/12 p-5 border rounded-lg  border-gray">
        <h1 className="text-xl font-semibold ">Calculate Your Salary</h1>
        <div className="mt-4 pt-3">
          <div className="font-semibold">
            <h2>Basic salary</h2>
          </div>
          <NumberInput
            value={basicSalary}
            onChange={(value) => setBasicSalary(value)}
          />
        </div>
        <div className="pt-4 ">
          <div className="font-semibold ">
            <h2>Earnings</h2>
          </div>
          <span className="font-normal text-sm text-gray-500 text-textgray">
            Allowance, Fixed Allowance, Bonus and etc
          </span>
          <div className="pt-5">
            {/* <TextButton onClick={} text="+ Add New Allowance" /> */}
            <button className="text-blue hover:opacity-85">
              + Add New Allowance
            </button>
          </div>
        </div>
        <hr className="mt-5 border-gray" />
        <div className="pt-4 ">
          <div className="font-semibold ">
            <h2>Deductions</h2>
          </div>
          <span className="font-normal text-sm text-gray-500  text-textgray">
            Salary Advance, Loan Deductions, and all
          </span>

          <div className="pt-5">
            <button className="text-blue hover:opacity-85">
              + Add New Allowance
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-full lg:w-5/12 p-5  border-gray">
        <h1 className="text-xl font-semibold ">Your Salary</h1>
        <Table basicSalary={basicSalary} />
      </div>
    </div>
  );
}
