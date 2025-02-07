import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Transaction } from "../../utils/types";

export type SetTransactionApprovalFunction = (params: {
  transactionId: string;
  newValue: boolean;
}) => Promise<void>;

type TransactionsProps = { transactions: Transaction[] | null };

type TransactionPaneProps = {
  transaction: Transaction;
  loading: boolean;
  setTransactionApproval: SetTransactionApprovalFunction;
  modifiedTransactions: Record<string, boolean>;
  setModifiedTransactions: Dispatch<SetStateAction<Record<string, boolean>>>;
};

export type TransactionsComponent = FunctionComponent<TransactionsProps>;
export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>;
