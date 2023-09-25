import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [budget, setBudget] = useState(1000);  // Start with a budget of 1000

    useEffect(() => {
        // Fetch transactions from Plaid API
        axios.get('/api/transactions')
            .then(response => {
                const transactions = response.data;
                setTransactions(transactions);

                // Calculate the total amount of all transactions
                const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);

                // Subtract the total amount from the budget
                const newBudget = budget - totalAmount;

                // Check if the budget goes below zero
                if (newBudget < 0) {
                    console.warn('Budget is below zero!');
                }

                setBudget(newBudget);
            })
            .catch(error => {
                console.error('Error fetching transactions', error);
            });
    }, []);

    const deleteTransaction = (id) => {
        // Delete transaction from Plaid API
        axios.delete(`/api/transactions/${id}`)
            .then(response => {
                // Remove the deleted transaction from state
                const newTransactions = transactions.filter(transaction => transaction.id !== id);
                setTransactions(newTransactions);

                // Update the budget
                const deletedTransactionAmount = transactions.find(transaction => transaction.id === id).amount;
                setBudget(budget + deletedTransactionAmount);
            })
            .catch(error => {
                console.error(`Error deleting transaction with id ${id}`, error);
            });
    };

    return (
        <div>
            <p>Budget: {budget}</p>

            {transactions.map(transaction => (
                <div key={transaction.id}>
                    <p>{transaction.name}</p>
                    <p>{transaction.amount}</p>
                    <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Transactions;
