import PropTypes from 'prop-types';
export const Statistics = ({ options, data, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        {options.map(option => (
          <li key={option}>
            {option}: {data[option]}
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p>Positiv Feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
