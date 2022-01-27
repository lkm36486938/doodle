import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const WithUseState = () => {
  const [name, setName] = useState('');

  console.log('re Render..!');

  return (
    <form onSubmit={() => alert(name)}>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default withRouter(WithUseState);
