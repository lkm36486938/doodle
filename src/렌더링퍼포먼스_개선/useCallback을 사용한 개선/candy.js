import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function Candy() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];
  const [candies, setCandies] = React.useState(initialCandies);

  //   const dispense = (candy) => {
  //     setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  //   };

  // useCallback
  const dispense = useCallback((candy) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  }, []);

  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});
