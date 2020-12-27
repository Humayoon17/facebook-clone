import React from 'react';
import ExpanseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

export default function ExpenseList({
  expenses,
  handleClearBy,
  handleClearAll,
  handleEdit,
}) {
  return (
    <div className='expense-list'>
      <ul>
        {expenses.map((expense) => {
          return (
            <ExpanseItem
              handleEdit={handleEdit}
              key={expense.id}
              expense={expense}
              handleClearBy={handleClearBy}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button onClick={handleClearAll} className='btn-clear'>
          Clear Expenses
          <MdDelete className='clear-icon' />
        </button>
      )}
    </div>
  );
}
