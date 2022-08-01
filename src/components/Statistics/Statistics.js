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
