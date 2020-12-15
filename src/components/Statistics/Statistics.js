import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function Statistics(props) {
  const btnsArray = Object.keys(props).slice(0, 3);
  const { total, positivePercentage } = props;

  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        {btnsArray.map(name => (
          <li key={shortid.generate()}>
            {name.slice(0, 1).toUpperCase() +
              name.slice(1) +
              ': ' +
              props[name]}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive feedback: {Math.round(positivePercentage)}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
