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

  previousPage = () => {
    this.props.fetchPlanets(this.props.previous);
  }

  nextPage = () => {
    this.props.fetchPlanets(this.props.next);
  }

  render() {
    return (
      <Fragment>

        <section className="PlanetList">

          {
            this.props.planets.length
              ? this.props.planets.map(planet => (
                <Planet
                  planet={planet}
                  key={planet.name}
                  click={() => this.selectPlanet(planet)} />
              ))
              : (
                <div className="NoData">

                  <h1>
                    Oops!<br />
                    Sorry, looks like something went wrong.<br />
                    We already sent a team of robots to solve the problem.<br />
                    Please try again later.
                  </h1>

                </div>
              )
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
