import React, { Component, Fragment } from 'react';
import Planet from '../../components/Planet/Planet';
import PlanetSelected from '../PlanetSelected/PlanetSelected';

export class PlanetList extends Component {
  state = {
    planets: [
      'Tatooine',
      'Alderaan',
    ],
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.state.planets.map(planet => <Planet planetName={planet} />)}
        </div>
        <PlanetSelected />
      </Fragment>
    );
  }
}

export default PlanetList;
