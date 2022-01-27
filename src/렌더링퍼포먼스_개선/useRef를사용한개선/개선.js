import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

const WithUseRef = () => {
  const name = useRef();

  console.log('improve re Render..!');

  return (
    <form onSubmit={() => alert(name.current)}>
      <input
        onChange={(e) => {
          name.current = e.target.value;
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default withRouter(WithUseRef);
