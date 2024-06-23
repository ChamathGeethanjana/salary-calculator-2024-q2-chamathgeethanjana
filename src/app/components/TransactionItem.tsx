import { IconButton } from "@/components";
import { Transaction } from "@/types";
import { parseNumberFormat } from "@/utils/number-format";
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
    <div
      key={transaction.id}
      className="flex justify-between items-center my-4"
    >
      <div className="flex space-x-2">
        <h1>{transaction.name}:</h1>
        <span>{parseNumberFormat(transaction.amount)}</span>

        {transaction.type === "earning" && transaction.isEPFandETP && (
          <span className="flex items-center text-xs text-gray-500">
            <MdCheck className="text-primary" /> EPF/ETF
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
