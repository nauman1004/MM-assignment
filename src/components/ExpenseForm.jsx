import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !amount) {
            alert("Please fill all fields");
            return;
        }

        const newExpense = {
            id: Date.now(),
            name,
            amount: Number(amount),
            category,
        };

        onAddExpense(newExpense);

        setName("");
        setAmount("");
        setCategory("Food");
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Expense name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option>Food</option>
                <option>Travel</option>
                <option>Marketing</option>
                <option>Utilities</option>
                <option>Other</option>
            </select>

            <button type="submit">
                Add Expense
            </button>
        </form>
    );
}

export default ExpenseForm;