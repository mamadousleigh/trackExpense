import { useContext } from "react";
import { GlobalContex } from "../Context/GlobalState";
import { MdDelete } from "react-icons/md";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContex);
  return (
    <div
      className={
        transaction.amount < 0
          ? "border-r-4 border-r-red-500 rounded-lg"
          : "border-r-4 border-r-green-500 rounded-lg"
      }
    >
      <li className="bg-white my-2 p-2 shadow rounded-lg flex justify-between capitalize">
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="text-lg hover:text-red-500 hover:transition-colors cursor-pointer"
          onClick={() => deleteTransaction(transaction.id)}
        >
          <MdDelete />
        </button>
      </li>
    </div>
  );
};
