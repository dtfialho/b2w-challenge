import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets, selectPlanet } from '../../actions';
import Planet from '../../components/Planet/Planet';
import PlanetSelected from '../PlanetSelected/PlanetSelected';
import './PlanetList.styl';

export class PlanetList extends Component {
  componentWillMount() {
    this.props.fetchPlanets();
  }

  selectPlanet = (planet) => {
    this.props.selectPlanet(planet);
  }

  render() {
    return (
      <Fragment>

        <section className="PlanetList">
          {this.props.planets.map(planet => (
            <Planet
              planet={planet}
              key={planet.name}
              click={() => this.selectPlanet(planet)} />
          ))}
        </section>

        <PlanetSelected />
      </Fragment>
    );
  }
}

PlanetList.propTypes = {
  planets: PropTypes.array,
  fetchPlanets: PropTypes.func,
  selectPlanet: PropTypes.func,
};

const mapStateToProps = ({ planetsInfo }) => ({
  planets: planetsInfo.planets,
  previous: planetsInfo.previous,
  next: planetsInfo.next,
});

export default connect(mapStateToProps, { fetchPlanets, selectPlanet })(PlanetList);
