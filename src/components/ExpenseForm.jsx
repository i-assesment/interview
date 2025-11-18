const ExpenseForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Expense Name" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
