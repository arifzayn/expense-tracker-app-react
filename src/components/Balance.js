import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Current Balance</h4>
      <h1>${total}</h1>
    </>
  );
}
