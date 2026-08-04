import React, { useContext, useState } from "react";
import { GlobalContex } from "../Context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContex);

  // states
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };
  return (
    <div className="mt-3">
      <h2 className="capitalize text-2xl  border-b-amber-50 p-2 shadow">
        AddTransaction
      </h2>
      <form onSubmit={onSubmit}>
        <label className="text-2xl font-bold" htmlFor="TEXT">
          Text
        </label>
        <input
          className="flex bg-white w-full p-2 rounded shadow"
          type="text"
          onChange={handleText}
          value={text}
          placeholder="Enter text...."
        />

        <label className="text-2xl font-bold" htmlFor="AMOUNT">
          Amount
          <span className="flex font-light font-mono">
            (negative-expense,positive-income)
          </span>
        </label>
        <input
          className="flex bg-white w-full p-2 rounded shadow"
          type="number"
          onChange={handleAmount}
          value={amount}
          placeholder="Enter amount"
        />
        <button className="bg-blue-400 w-full p-2 mt-3 capitalize text-2xl text-white rounded cursor-pointer">
          add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
