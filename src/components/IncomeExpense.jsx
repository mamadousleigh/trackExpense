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
    <div className="flex mt-3 flex-1 justify-around uppercase font-bold text-2xl  bg-white p-2 shadow rounded w-full  max-w-md  ">
      <div>
        <h2 className="text-sm font-bold uppercase sm:text-base">income</h2>
        <p className="text-green-500 font-bold font-mono text-xl">${income}</p>
      </div>
      <div>
        <h2 className="text-sm font-bold uppercase sm:text-base">expense</h2>
        <p className="text-red-500 font-bold font-mono text-2xl">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
