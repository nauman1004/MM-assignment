function CategoryBreakdown({ expenses }) {
    const breakdown = {};

    expenses.forEach((expense) => {
        if (breakdown[expense.category]) {
            breakdown[expense.category] += expense.amount;
        } else {
            breakdown[expense.category] = expense.amount;
        }
    });

    return (
        <div className="breakdown-card">
            <h2>Category Breakdown</h2>

            {Object.keys(breakdown).length === 0 ? (
                <p>No data available</p>
            ) : (
                Object.entries(breakdown).map(([category, amount]) => (
                    <div
                        className="breakdown-item"
                        key={category}
                    >
                        <span>{category}</span>

                        <span>₹{amount.toLocaleString()}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default CategoryBreakdown;