import React, { useState } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(stateGood => stateGood + 1);
        break;

      case 'neutral':
        setNeutral(stateNeutral => stateNeutral + 1);
        break;

      case 'bad':
        setBad(stateBad => stateBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return (good / countTotalFeedback()) * 100;
    }
  };

  return (
    <div>
      <FeedbackOptions
        options={Object.keys(feedbacks)}
        onLeaveFeedback={onLeaveFeedback}
      />

      {Object.values(feedbacks).reduce((acc, value) => {
        return acc + value;
      }) === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
}
