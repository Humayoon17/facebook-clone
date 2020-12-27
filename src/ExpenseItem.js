import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ExpanseItem({ expense, handleClearBy, handleEdit }) {
  return (
    <>
      <li>
        <div>
          <div className='expanse'>{expense.charge}</div>

          <div className='amount'>{expense.amount}</div>
        </div>
        <div>
          <button
            onClick={() => {
              handleEdit(expense.id);
            }}
            className='btn-edit'
            aria-label='Edit Button'
          >
            <MdEdit />
          </button>

          <button
            onClick={() => {
              handleClearBy(expense.id);
            }}
            className='btn-delete'
            aria-label='Clear Button'
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
}
