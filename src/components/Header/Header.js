import React from 'react';
import './Header.styl';
import logo from '../../assets/logo.svg';

const header = () => (
  <header>

    <img src={logo} alt="Star Wars" className="Logo" />

    <h1>
      See information about all the planets from the best movie series of all time!
    </h1>

    <h3>
      Click in any planet to see more information.
    </h3>

  </header>
);

export default header;
