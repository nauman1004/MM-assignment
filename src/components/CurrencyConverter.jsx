import { useEffect, useState } from "react";

function CurrencyConverter({ expenses }) {
    const [rates, setRates] = useState({});

    const [selectedCurrency, setSelectedCurrency] =
        useState("USD");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] = useState("");

    const totalExpenses = expenses.reduce(
        (sum, expense) =>
            sum + expense.amount,
        0
    );

    useEffect(() => {
        async function fetchRates() {
            try {
                setLoading(true);

                setError("");

                const response = await fetch(
                    "https://open.er-api.com/v6/latest/INR"
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch exchange rates"
                    );
                }

                const data = await response.json();

                setRates(data.rates || {});
            } catch (err) {
                setError(
                    "Unable to load exchange rates"
                );
            } finally {
                setLoading(false);
            }
        }

        fetchRates();
    }, []);

    const convertedAmount =
        rates[selectedCurrency]
            ? (
                totalExpenses *
                rates[selectedCurrency]
            ).toFixed(2)
            : "0.00";

    return (
        <div className="currency-card">
            <select
                value={selectedCurrency}
                onChange={(e) =>
                    setSelectedCurrency(
                        e.target.value
                    )
                }
            >
                <option value="USD">USD</option>

                <option value="EUR">EUR</option>

                <option value="GBP">GBP</option>

                <option value="JPY">JPY</option>

                <option value="CAD">CAD</option>

                <option value="INR">INR</option>
            </select>

            {loading && (
                <p className="loading-text">
                    Loading exchange rates...
                </p>
            )}

            {error && (
                <p className="error-text">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <div className="conversion-result">
                    <p className="conversion-label">
                        Converted Total
                    </p>

                    <h3>
                        {selectedCurrency}{" "}
                        {Number(
                            convertedAmount
                        ).toLocaleString()}
                    </h3>
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;