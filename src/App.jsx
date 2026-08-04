import React from "react";
import Balance from "./components/Balance";
import { GlobalProvider } from "./Context/GlobalState";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col px-4 py-6 items-center">
      <GlobalProvider>
        <div className="w-full sm:max-w-md max-w-md lg:max-w-lg justify-center">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
