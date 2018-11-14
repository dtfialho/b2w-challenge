import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../../actions';
import Planet from '../../components/Planet/Planet';
import PlanetSelected from '../PlanetSelected/PlanetSelected';
import './PlanetList.styl';

export class PlanetList extends Component {
  componentWillMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <Fragment>

        <section className="PlanetList">
          {this.props.planets.map(planet => <Planet planet={planet} key={planet.name} />)}
        </section>

        <PlanetSelected />
      </Fragment>
    );
  }
}

PlanetList.propTypes = {
  planets: PropTypes.array,
  fetchPlanets: PropTypes.func,
};

const mapStateToProps = ({ planetsInfo }) => ({
  planets: planetsInfo.planets,
  previous: planetsInfo.previous,
  next: planetsInfo.next,
});

export default connect(mapStateToProps, { fetchPlanets })(PlanetList);
