import React from 'react';

const Alert = ({ text, type }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Alert;
