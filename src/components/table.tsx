import { FC } from "react";

interface TableProps {
  basicSalary: number;
  grossEarnings: number;
  grossDeductions: number;
  employeeEPF: number;
  apit: number;
}

const Table: FC<TableProps> = ({
  basicSalary,
  grossEarnings,
  grossDeductions,
  employeeEPF,
  apit,
}) => {
  return (
    <table className="w-full mt-5">
      <thead className="text-textgray text-sm ">
        <tr className="">
          <th className="text-left">Item</th>
          <th className="text-right">Amount</th>
        </tr>
      </thead>
      <tbody className="text-base ">
        <tr>
          <td className="text-left pt-4 ">Basic Salary</td>
          <td className="text-right">{basicSalary}</td>
        </tr>
        <tr>
          <td className="text-left">Gross Rarning</td>
          <td className="text-right">{grossEarnings}</td>
        </tr>
        <tr>
          <td className="text-left">Gross Deduction</td>
          <td className="text-right">{grossDeductions}</td>
        </tr>
        <tr>
          <td className="text-left">Employee EPF(8%)</td>
          <td className="text-right">{employeeEPF}</td>
        </tr>
        <tr>
          <td className="text-left">APIT</td>
          <td className="text-right">{apit}</td>
        </tr>
      </tbody>
      <tr className="border border-gray rounded-lg">
        <th className="text-left p-3 ">Net Salary (Take Home)</th>
        <th className="text-right p-">{}</th>
      </tr>
      <thead className="text-textgray text-sm ">
        <tr className="">
          <th className="text-left">Contribution from the Employer</th>
          <th className="text-right"></th>
        </tr>
      </thead>
      <tr>
        <td className="text-left">Employeer EPF (12%)</td>
        <td className="text-right"></td>
      </tr>
      <tr>
        <td className="text-left">Employeer EPF (3%)</td>
        <td className="text-right"></td>
      </tr>
      <br />
      <tr>
        <td className="text-left">CTC (Cost to Company)</td>
        <td className="text-right"></td>
      </tr>
    </table>
  );
};

export default Table;
