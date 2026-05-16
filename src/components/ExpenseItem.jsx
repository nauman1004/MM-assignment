function ExpenseItem({ expense, onDelete }) {
    const categoryColors = {
        Food: "#22c55e",
        Travel: "#3b82f6",
        Marketing: "#f59e0b",
        Utilities: "#8b5cf6",
        Other: "#6b7280",
    };
    return (
        <div className="expense-card">
            <div className="expense-left">
                <h3>{expense.name}</h3>

                <p
                    className="expense-category"
                    style={{
                        backgroundColor:
                            categoryColors[expense.category],
                    }}
                >
                    {expense.category}
                </p>
            </div>

            <div className="expense-right">
                <h3>₹{expense.amount.toLocaleString()}</h3>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(expense.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ExpenseItem;