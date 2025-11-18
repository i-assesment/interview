import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

const ExpenseTracker = () => {
  return (
    <div>
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
};

export default ExpenseTracker;
