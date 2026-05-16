I built a modern Expense Tracker application using React and Vite. The application allows users to add expenses with categories, view total expenses, track category-wise spending, and remove entries dynamically. I also implemented a live currency conversion feature that converts the total expense amount into multiple currencies in real time.

The project follows a component-based architecture using reusable React components such as ExpenseForm, ExpenseList, SummaryPanel, CategoryBreakdown, and CurrencyConverter. State management was handled using React Hooks including useState and useEffect without using any third-party state management libraries.

For live exchange rates, I used the Frankfurter API to fetch real-time currency conversion data. Loading and error handling were implemented to ensure the UI remains stable even if the API request fails.

One of the main challenges was creating a clean and responsive user interface while maintaining consistent spacing and layout across desktop and mobile screens. I improved the design using custom CSS, gradients, glassmorphism effects, hover animations, and responsive layouts without relying on external UI templates.

With more time, I would add data persistence using local storage or a backend database, charts for expense analytics, dark mode support, edit functionality for expenses and also improve the user interface.
