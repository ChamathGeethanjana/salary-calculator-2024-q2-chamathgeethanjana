"use client";

import { useAppSelector } from "@/hooks";
import {
  selectTotalDeductions,
  selectTotalAllowedEPFandETP,
  selectTotalEarnings,
} from "@/slices/transactionSlice";
import { getApit } from "@/utils/apit-calculator";
import { parseNumberFormat } from "@/utils/number-format";
import { FC } from "react";

interface SalaryCardProps {
  basicSalary: number;
}

export const SalaryCard: FC<SalaryCardProps> = ({ basicSalary }) => {
  const totalEarnings = useAppSelector(selectTotalEarnings);
  const grossDeductions = useAppSelector(selectTotalDeductions);
  const totalAllowedEPFandETP = useAppSelector(selectTotalAllowedEPFandETP);

  const grossEarnings = basicSalary + totalEarnings - grossDeductions;

  const totalEarningsForEPF = basicSalary + totalAllowedEPFandETP;

  const grossSalaryForEPF = totalEarningsForEPF - grossDeductions;

  const employeeEPF = grossSalaryForEPF * 0.08;

  const employerEPF = grossSalaryForEPF * 0.12;

  const employerETF = grossSalaryForEPF * 0.03;

  const apit = getApit(grossEarnings);

  const netSalary = grossEarnings - employeeEPF - apit;

  const ctc = grossEarnings + employerEPF + employerETF;

  return (
    <div className="border rounded-lg w-full lg:w-5/12 p-5  border-gray">
      <h1 className="text-xl font-semibold ">Your Salary</h1>
      <table className="w-full mt-5">
        <thead className="text-secondary-700 text-sm ">
          <tr className="">
            <th className="text-left">Item</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="text-base ">
          <tr>
            <td className="text-left pt-4 ">Basic Salary</td>
            <td className="text-right">{parseNumberFormat(basicSalary)}</td>
          </tr>
          <tr>
            <td className="text-left">Gross Earning</td>
            <td className="text-right">{parseNumberFormat(grossEarnings)}</td>
          </tr>
          <tr>
            <td className="text-left">Gross Deduction</td>
            <td className="text-right">
              {parseNumberFormat(0 - grossDeductions)}
            </td>
          </tr>
          <tr>
            <td className="text-left">Employee EPF(8%)</td>
            <td className="text-right">{parseNumberFormat(0 - employeeEPF)}</td>
          </tr>
          <tr>
            <td className="text-left">APIT</td>
            <td className="text-right">{parseNumberFormat(0 - apit)}</td>
          </tr>
          <tr className="border border-gray rounded-lg">
            <th className="text-left p-3 ">Net Salary (Take Home)</th>
            <th className="text-right p-">{parseNumberFormat(netSalary)}</th>
          </tr>
        </tbody>
        <thead className="text-secondary-700 text-sm  ">
          <tr className="">
            <th className="text-left">Contribution from the Employer</th>
            <th className="text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">Employeer EPF (12%)</td>
            <td className="text-right">{parseNumberFormat(employerEPF)}</td>
          </tr>
          <tr>
            <td className="text-left">Employeer ETF (3%)</td>
            <td className="text-right">{parseNumberFormat(employerETF)}</td>
          </tr>
          <br />
          <tr>
            <td className="text-left">CTC (Cost to Company)</td>
            <td className="text-right">{parseNumberFormat(ctc)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
