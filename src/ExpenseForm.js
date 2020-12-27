import React from 'react';
import { MdSend } from 'react-icons/md';

export default function ExpenseForm({
  charge,
  handleCharge,
  amount,
  handleAmount,
  handleSubmit,
  edit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <div className='form-center'>
          <div className='form-input'>
            <label htmlFor='charge'>Charge</label>
            <input
              value={charge}
              onChange={handleCharge}
              type='text'
              name='charge'
              id='charge'
              className='charge-input'
              placeholder='e.g. rent'
            />
          </div>
          <div className='form-input'>
            <label htmlFor='amount'>Amount</label>
            <input
              value={amount}
              onChange={handleAmount}
              type='number'
              name='amount'
              id='amount'
              className='amout-input'
              placeholder='e.g. 1000'
            />
          </div>
        </div>
      </div>
      <button type='submit' className='btn-submit'>
        {edit ? 'Edit' : 'Submit'} <MdSend className='send-icon' />
      </button>
    </form>
  );
}
