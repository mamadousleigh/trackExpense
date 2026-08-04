import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContex } from "../Context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContex);
  return (
    <div className="mt-3">
      <h2 className="capitalize text-2xl  border-b-amber-50 p-2 shadow">
        history
      </h2>
      <ul>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
