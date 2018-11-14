import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions';
import Planet from '../../components/Planet/Planet';
import PlanetSelected from '../PlanetSelected/PlanetSelected';

export class PlanetList extends Component {
  componentWillMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.props.planets.map(planet => <Planet planet={planet} />)}
        </div>
        <PlanetSelected />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ planetsInfo }) => ({
  planets: planetsInfo.planets,
  previous: planetsInfo.previous,
  next: planetsInfo.next,
});

export default connect(mapStateToProps, { fetchPlanets })(PlanetList);
