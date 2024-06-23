"use client";

import { ModalHandler, TextButton, TextInput, IconButton } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  removeTransaction,
  selectDeductions,
  selectEarnings,
  resetTransactions,
} from "@/slices/transactionSlice";
import { Transaction } from "@/types";
import { useRef, useState } from "react";
import { AddTransactionModal } from "./components/AddTransactionModal";
import { TransactionItem } from "./components/TransactionItem";
import { SalaryCard } from "./components/SalaryCard";
import { MdRefresh } from "react-icons/md";

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

  const handleReset = () => {
    setBasicSalary(0);
    dispatch(resetTransactions());
  };

  return (
    <>
      <div className="p-3 max-w-5xl mx-auto flex flex-col sm:flex-row mt-14 gap-2">
        <div className="bg-secondarybg w-full lg:w-7/12 p-5 border rounded-lg  border-gray ">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold ">Calculate Your Salary</h1>

            <TextButton onClick={handleReset}>
              <div className="flex items-center gap-1">
                <MdRefresh />
                Reset
              </div>
            </TextButton>
          </div>
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
              >
                + Add New Allowance
              </TextButton>
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
              <TextButton
                onClick={() => {
                  handaleAddTransaction("deduction");
                }}
              >
                + Add New Allowance
              </TextButton>
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
