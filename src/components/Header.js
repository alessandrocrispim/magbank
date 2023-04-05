import React from 'react'

const Header = ({text, color}) => {
  return (
    <div>
      <h1 style={{color: color}}>{text}</h1>
    </div>
  );
};

export default Header
