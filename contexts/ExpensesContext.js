import "react-native-get-random-values";
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const ExpensesContext = createContext({
  expensesById: {},
  idsByCategory: {},
  addExpense: () => {},
  removeExpense: () => {},
});

function ExpensesContextProvider({ children }) {
  const [expensesById, setExpensesById] = useState({});
  const [idsByCategory, setIdsByCategory] = useState({});

  function createExpense(categoryId, amount, note = "", date) {
    const expense = {
      id: uuid(),
      categoryId: categoryId,
      amount: amount,
      note: note,
      date: date || new Date().toISOString(),
    };

    return expense;
  }

  function addExpense(categoryId, amount, note = "", date) {
    const newExpense = createExpense(categoryId, amount, (note = ""), date);

    setExpensesById((prev) => ({ ...prev, [newExpense.id]: newExpense }));

    setIdsByCategory((prev) => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), newExpense.id],
    }));
  }

  function removeExpense(id, categoryId) {
    setExpensesById((prev) => {
      const { [id]: removed, ...rest } = prev;

      setIdsByCategory((prevCategories) => {
        const newIdsByCategory = [...prevCategories];
        newIdsByCategory[categoryId] = newIdsByCategory[categoryId].filter(
          (expenseId) => expenseId !== id
        );
        return newIdsByCategory;
      });

      return rest;
    });
  }

  const value = {
    expensesById: expensesById,
    idsByCategory: idsByCategory,
    addExpense: addExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
