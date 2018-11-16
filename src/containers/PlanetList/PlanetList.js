import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets, selectPlanet } from '../../actions';
import Planet from '../../components/Planet/Planet';
import PlanetSelected from '../PlanetSelected/PlanetSelected';
import './PlanetList.styl';
import { scrollToTop } from '../../helpers';

export class PlanetList extends Component {
  constructor() {
    super();
    this.error = false;
  }

  componentWillMount() {
    this.props.fetchPlanets()
      .catch(() => {
        this.error = true;
      });
  }

  selectPlanet = (planet) => {
    this.props.selectPlanet(planet);
  }

  previousPage = () => {
    this.error = false;

    this.props.fetchPlanets(this.props.previous)
      .then(() => scrollToTop(1))
      .catch(() => {
        this.error = true;
      });
  }

  nextPage = () => {
    this.error = false;

    this.props.fetchPlanets(this.props.next)
      .then(() => scrollToTop(1))
      .catch(() => {
        this.error = true;
      });
  }

  render() {
    return (
      <Fragment>

        <section className="PlanetList">
          {
            this.props.planets.length && !this.loadingPlanets
              ? this.props.planets.map(planet => (
                <Planet
                  planet={planet}
                  key={planet.name}
                  click={() => this.selectPlanet(planet)} />
              ))
              : null
          }

          {
            this.error
              ? (
                <div className="NoData">

                  <h1>
                    Oops!<br />
                    Sorry, looks like something went wrong.<br />
                    We already sent a team of robots to solve the problem.<br />
                    Please try again later.
                  </h1>

                </div>
              )
              : null
          }

          <div className="PageControls">

            <button
              type="button"
              onClick={() => this.previousPage()}
              className="Prev"
              disabled={!this.props.previous}>
              Prev
            </button>

            <button
              type="button"
              onClick={() => this.nextPage()}
              className="Next"
              disabled={!this.props.next}>
              Next
            </button>

          </div>

        </section>

        <PlanetSelected />

      </Fragment>
    );
  }
}

PlanetList.propTypes = {
  planets: PropTypes.array,
  previous: PropTypes.string,
  next: PropTypes.string,
  fetchPlanets: PropTypes.func,
  selectPlanet: PropTypes.func,
};

const mapStateToProps = ({ planetsInfo }) => ({
  planets: planetsInfo.planets,
  previous: planetsInfo.previous,
  next: planetsInfo.next,
});

export default connect(mapStateToProps, { fetchPlanets, selectPlanet })(PlanetList);
