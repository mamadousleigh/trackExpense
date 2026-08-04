import React, { useContext } from "react";
import { GlobalContex } from "../Context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContex);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((prevAmount, item) => (prevAmount += item), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((prevAmount, item) => (prevAmount += item), 0) * -(1).toFixed(2);
  return (
    <div className="flex mt-3 gap-20 uppercase font-bold text-2xl  bg-white p-2 shadow rounded  max-w-md justify-center ">
      <div>
        <h2>income</h2>
        <p className="text-green-500 font-bold font-mono text-3xl">${income}</p>
      </div>
      <div>
        <h2>expense</h2>
        <p className="text-red-500 font-bold font-mono text-3xl">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
