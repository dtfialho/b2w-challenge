import React from 'react';
import PropTypes from 'prop-types';
import './Planet.styl';

const planet = props => (
  <article className="Planet" onClick={props.click}>

    <h1>{props.planet.name}</h1>

    <p><strong>Population:</strong> {props.planet.population}</p>

    <p><strong>Climate:</strong> {props.planet.climate}</p>

    <p><strong>Terrain:</strong> {props.planet.terrain}</p>

  </article>
);

planet.propTypes = {
  planet: PropTypes.object,
  click: PropTypes.func,
};

export default planet;
