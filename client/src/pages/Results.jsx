import { useLocation } from 'react-router-dom';

function Results() {
  const { state } = useLocation(); // Get the passed state
  const { percentages } = state || {}; // Destructure percentages

  return (
    <div className='results'>
      <h1>Results</h1>
      <div>
        {percentages && percentages.length > 0 ? (
          percentages.map(({ id, percentage }) => (
            <div key={id}>
              <p>Option {id}: {percentage}%</p>
            </div>
          ))
        ) : (
          <p>No options met the threshold of 3 selections.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
