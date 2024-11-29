import { useLocation } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const Results = () => {
  const { state } = useLocation();
  const { aspectCounts } = state;

  const totalAnswers = Object.values(aspectCounts).reduce((a, b) => a + b, 0);
  
  return (
    <div>
      <Container>
        <h1>Your Personality Analysis</h1>
        <p>Based on the answers you provided, here are the ratios for each aspect:</p>
        
        <div>
          {Object.entries(aspectCounts).map(([aspectId, count]) => {
            const ratio = (count / totalAnswers) * 100;
            return (
              <div key={aspectId} style={{ marginBottom: '10px' }}>
                <h3>Aspect {aspectId}</h3>
                <p>Selected {count} times ({ratio.toFixed(2)}%)</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Results;
