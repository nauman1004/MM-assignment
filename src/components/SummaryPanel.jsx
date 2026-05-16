function SummaryPanel({ expenses }) {
    const totalExpenses = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return (
        <div className="summary-panel">
            <div className="summary-card">
                <h3>Total Expenses</h3>

                <p>₹{totalExpenses.toLocaleString()}</p>
            </div>

            <div className="summary-card">
                <h3>Total Entries</h3>

                <p>{expenses.length}</p>
            </div>
        </div>
    );
}

export default SummaryPanel;