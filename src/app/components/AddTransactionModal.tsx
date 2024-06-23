import { FC } from "react";
import { Transaction } from "@/types";
import { Formik } from "formik";
import { Button, TextInput, Modal, ModalHandler } from "@/components";
import { VALIDATION } from "@/config";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/hooks";
import { addTransaction, updateTransaction } from "@/slices/transactionSlice";

interface AddTransactionModalProps {
  modalRef: React.RefObject<ModalHandler>;
  type: "earning" | "deduction";
  transaction?: Transaction;
}

export const AddTransactionModal: FC<AddTransactionModalProps> = ({
  modalRef,
  type,
  transaction,
}) => {
  const initialState: Transaction = transaction ?? {
    id: uuidv4(),
    name: "",
    amount: 0,
    isEPFandETP: false,
    type: type,
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (values: Transaction) => {
    values = { ...values, amount: parseFloat(values.amount.toString()) };

    if (transaction) {
      dispatch(updateTransaction(values));
    } else {
      dispatch(addTransaction(values));
    }
    modalRef.current?.close();
  };

  const title = type === "earning" ? "Add new Earning" : "Add new Deduction";

  return (
    <Modal ref={modalRef} title={title}>
      <Formik
        initialValues={initialState}
        validationSchema={VALIDATION.earningValidation}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <div className="flex flex-col gap-4 ">
            <TextInput
              label="Name"
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              isError={!!errors.name}
              message={errors.name}
            />
            <TextInput
              label="Amount"
              onChange={handleChange("amount")}
              onBlur={handleBlur("amount")}
              value={values.amount}
              isError={!!errors.amount}
              message={errors.amount}
            />

            {type === "earning" && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setFieldValue("isEPFandETP", e.target.checked);
                  }}
                  checked={values.isEPFandETP}
                  className="mr-2"
                />
                <span>EPF and ETF</span>
              </div>
            )}

            <div className="flex justify-end space-x-2">
              <Button onClick={() => modalRef.current?.close()}>Cancel</Button>
              <Button onClick={handleSubmit}>Add</Button>
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
};
