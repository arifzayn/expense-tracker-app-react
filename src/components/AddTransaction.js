import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Detail of Transaction"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Enter transaction amount"
            value={transactionAmount || ""}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
