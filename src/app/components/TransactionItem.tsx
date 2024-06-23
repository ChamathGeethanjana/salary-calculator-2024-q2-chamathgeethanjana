import { IconButton } from "@/components";
import { Transaction } from "@/types";
import { FC } from "react";

import { MdModeEdit, MdClose, MdCheck } from "react-icons/md";

interface TransactionItemProps {
  transaction: Transaction;
  onRemove: (transaction: Transaction) => void;
  onEdit: (transaction: Transaction) => void;
}

export const TransactionItem: FC<TransactionItemProps> = ({
  transaction,
  onRemove,
  onEdit,
}) => {
  return (
    <div key={transaction.id} className="flex justify-between items-center">
      <div className="flex">
        <h1>{transaction.name}</h1>
        <span>{transaction.amount}</span>

        {transaction.type === "earning" && transaction.isEPFandETP && (
          <span className="text-xs text-gray-500">
            <MdCheck /> PF/ETF
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <IconButton
          icon={<MdModeEdit />}
          onClick={() => {
            onEdit(transaction);
          }}
        />
        <IconButton
          icon={<MdClose />}
          onClick={() => {
            onRemove(transaction);
          }}
        />
      </div>
    </div>
  );
};
