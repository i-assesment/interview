import { useState } from "react";

export function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  return [expenses, setExpenses];
}
