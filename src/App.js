import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

// const initialExpenses = [
//   { id: uuidv4(), charge: 'house payment', amount: 8000 },
//   { id: uuidv4(), charge: 'car payment', amount: 560 },
//   { id: uuidv4(), charge: 'shop payment', amount: 12000 },
//   { id: uuidv4(), charge: 'rent', amount: 5000 },
//   { id: uuidv4(), charge: 'house payment', amount: 700 },
// ];

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    const userValue = parseFloat(e.target.value);
    setAmount(userValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (charge.trim() !== '' && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((exp) => {
          return exp.id === id ? { ...exp, charge, amount } : exp;
        });

        setExpenses(tempExpense);
        setEdit(false);

        handleAlert({
          type: 'success',
          text: 'Item updated successfully!',
        });
      } else {
        const newExpense = {
          id: uuidv4(),
          charge,
          amount,
        };

        setExpenses([...expenses, newExpense]);
        handleAlert({
          type: 'success',
          text: 'Item added successfully!',
        });
      }

      setCharge('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: "charge or amount can't be empty value",
      });
    }
  };

  const handleEdit = (id) => {
    let expense = expenses.find((exp) => exp.id === id);

    setCharge(expense.charge);
    setAmount(expense.amount);
    setEdit(true);
    setId(id);

    console.log(id);
  };

  const handleClearBy = (id) => {
    const tempExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(tempExpenses);
    handleAlert({
      type: 'success',
      text: 'Item deleted successfully!',
    });
  };

  const handleClearAll = () => {
    setExpenses([]);
    handleAlert({
      type: 'sucess',
      text: 'All items deleted successfully!',
    });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    });

    setTimeout(() => {
      setAlert({
        show: false,
      });
    }, 5000);
  };

  return (
    <div className='App'>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Badget Calculator</h1>
      <main>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          handleClearAll={handleClearAll}
          handleClearBy={handleClearBy}
          handleEdit={handleEdit}
          expenses={expenses}
        />
      </main>
      <h1>
        total spending:{' '}
        <span>
          {expenses.reduce((acc, curr, ci, sa) => {
            return (acc += curr.amount);
          }, 0)}{' '}
          AFG
        </span>
      </h1>
    </div>
  );
}

export default App;
