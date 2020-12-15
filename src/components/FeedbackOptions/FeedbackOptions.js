import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul className={s.buttonList}>
        {options.map(name => (
          <li key={shortid.generate()}>
            <button
              type="button"
              className={s.statisticsBtn}
              onClick={() => {
                onLeaveFeedback(name);
              }}
            >
              {name.slice(0, 1).toUpperCase() + name.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
