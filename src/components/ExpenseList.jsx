import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) {
        return (
            <div className="empty-content">
                <h3>No expenses added yet</h3>

                <p>
                    Start tracking your spending by adding
                    your first expense.
                </p>
            </div>
        );
    }

    return (
        <div className="expense-list">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ExpenseList;