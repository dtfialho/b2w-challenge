import React from 'react';
import PropTypes from 'prop-types';

const planet = props => (
  <div>
    {props.planet.name}
  </div>
);

planet.propTypes = {
  planet: PropTypes.object,
};

export default planet;
