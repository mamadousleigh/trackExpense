import React, { useContext } from "react";
import { GlobalContex } from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContex);
  const amount = transactions.map((transaction) => transaction.amount);
  const totalAmount = amount.reduce(
    (prevAmount, item) => (prevAmount += item),
    0,
  );
  return (
    <div>
      <h1 className="text-center uppercase text-2xl font-bold">
        expense tracker
      </h1>
      <h3 className="text-2xl capitalize">your balance</h3>
      <p className="text-4xl font-bold font-mono">${totalAmount}</p>
    </div>
  );
};

export default Balance;
