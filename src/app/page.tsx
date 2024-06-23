"use client";

import { ModalHandler, TextButton, TextInput } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  removeTransaction,
  selectDeductions,
  selectEarnings,
} from "@/slices/transactionSlice";
import { Transaction } from "@/types";
import { useRef, useState } from "react";
import { AddTransactionModal } from "./components/AddTransactionModal";
import { TransactionItem } from "./components/TransactionItem";
import { SalaryCard } from "./components/SalaryCard";

export default function Home() {
  const [basicSalary, setBasicSalary] = useState<number>(0);
  const [type, setType] = useState<"earning" | "deduction">("earning");
  const [selectedTransaction, setSelectedTransaction] = useState<
    Transaction | undefined
  >(undefined);

  const modalRef = useRef<ModalHandler>(null);

  const dispatch = useAppDispatch();

  const earnigs = useAppSelector(selectEarnings);
  const deductions = useAppSelector(selectDeductions);

  const handaleAddTransaction = (type: "earning" | "deduction") => {
    setType(type);
    setSelectedTransaction(undefined);
    modalRef.current?.open();
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    modalRef.current?.open();
  };

  const handleRemoveTransaction = (transaction: Transaction) => {
    dispatch(removeTransaction(transaction));
  };

  return (
    <>
      <div className="p-3 max-w-5xl mx-auto flex flex-col sm:flex-row mt-14 gap-2">
        <div className="bg-secondarybg w-full lg:w-7/12 p-5 border rounded-lg  border-gray">
          <h1 className="text-xl font-semibold ">Calculate Your Salary</h1>
          <div className="mt-4 pt-3">
            <TextInput
              textInputType="number"
              label="Basic Salary"
              value={basicSalary}
              onChange={(value) => setBasicSalary(parseFloat(value))}
            />
          </div>
          <div className="pt-4 ">
            <div className="font-semibold ">
              <h2>Earnings</h2>
            </div>
            <span className="font-normal text-sm text-gray-500">
              Allowance, Fixed Allowance, Bonus and etc
            </span>
            {earnigs.map((earning) => (
              <TransactionItem
                key={earning.id}
                transaction={earning}
                onEdit={handleEditTransaction}
                onRemove={handleRemoveTransaction}
              />
            ))}
            <div className="pt-5">
              <TextButton
                onClick={() => {
                  handaleAddTransaction("earning");
                }}
                text="+ Add New Allowance"
              />
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
            {deductions.map((deduction) => (
              <TransactionItem
                key={deduction.id}
                transaction={deduction}
                onEdit={handleEditTransaction}
                onRemove={handleRemoveTransaction}
              />
            ))}

            <div className="pt-5">
              <button
                className="text-blue hover:opacity-85"
                onClick={() => {
                  handaleAddTransaction("deduction");
                }}
              >
                + Add New Allowance
              </button>
            </div>
          </div>
        </div>
        <SalaryCard basicSalary={basicSalary} />
      </div>
      <AddTransactionModal
        modalRef={modalRef}
        type={type}
        transaction={selectedTransaction}
      />
      ;
    </>
  );
}
