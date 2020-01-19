import React from 'react';
import PropTypes from 'prop-types';

function Food({fav}) {
 
  return <h1>I Like {fav}</h1>;
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="pasta"/>
      <Food fav="pizza"/>
    </div>
  );
  
}

export default App;
