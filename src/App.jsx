import { useState, useEffect } from "react";

import "./styles/app.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CategoryBreakdown from "./components/CategoryBreakdown";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  function addExpense(expense) {
    setExpenses((prev) => [
      ...prev,
      expense,
    ]);
  }

  function deleteExpense(id) {
    setExpenses((prev) =>
      prev.filter(
        (expense) => expense.id !== id
      )
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="app-title">
          ExpenseFlow
        </h1>

        <p className="app-subtitle">
          Smart finance tracking dashboard
        </p>
      </div>

      <ExpenseForm
        onAddExpense={addExpense}
      />

      <div className="dashboard-section">
        <SummaryPanel
          expenses={expenses}
        />

        <h2 className="section-title">
          Recent Expenses
        </h2>

        <div className="content-grid">
          <ExpenseList
            expenses={expenses}
            onDelete={deleteExpense}
          />

          <CategoryBreakdown
            expenses={expenses}
          />
        </div>
      </div>

      <div className="currency-section">
        <h2 className="section-title">
          Currency Insights
        </h2>

        <CurrencyConverter
          expenses={expenses}
        />
      </div>


    </div>
  );
}

export default App;