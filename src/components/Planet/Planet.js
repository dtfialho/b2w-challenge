import React from 'react';
import PropTypes from 'prop-types';

const planet = props => (
  <div>
    {props.planetName}
  </div>
);

planet.propTypes = {
  planetName: PropTypes.string,
};

export default planet;
