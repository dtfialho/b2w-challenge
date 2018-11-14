import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';
import { selectPlanet } from '../../actions';
import './PlanetSelected.styl';

export class PlanetSelected extends Component {
  constructor(props) {
    super(props);
    this.selectedPlanetContainer = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.planet) {
      TweenMax.to(this.selectedPlanetContainer.current, 0.5, { autoAlpha: 1 });
    }
  }

  close = () => {
    TweenMax.to(this.selectedPlanetContainer.current, 0.5, { autoAlpha: 0 });
    this.props.selectPlanet(false);
  }

  render() {
    return (
      <section className="SelectedPlanet" ref={this.selectedPlanetContainer}>

        {this.props.planet ? (

          <div className="SelectedPlanet-Wrapper">

            <div className="close" onClick={this.close}>&times;</div>

            <div className="SelectedPlanet-Content">

              <h1>{this.props.planet.name}</h1>

              <p className="AppearsIn">
                This planet appears in {this.props.planet.films.length} film{this.props.planet.films.length > 1 ? 's' : null}
              </p>

              <p>
                <strong>Population:</strong> {this.props.planet.population}
              </p>

              <p>
                <strong>Climate:</strong> {this.props.planet.climate}
              </p>

              <p>
                <strong>Terrain:</strong> {this.props.planet.terrain}
              </p>

              <p>
                <strong>Diameter:</strong> {this.props.planet.diameter} km
              </p>

              <p>
                <strong>Gravity*:</strong> {this.props.planet.gravity}
              </p>

              <p>
                <strong>Rotation period:</strong>
                {
                  this.props.planet.rotation_period !== 'unknown'
                    ? ` ${this.props.planet.rotation_period} hours`
                    : 'unknown'
                }
              </p>

              <p>
                <strong>Orbital period:</strong>
                {
                  this.props.planet.orbital_period !== 'unknown'
                    ? ` ${this.props.planet.orbital_period} days`
                    : 'unknown'
                }
              </p>

              <div className="Info">
                <p>
                  <small>
                    * A number denoting the gravity of this planet,
                     where &quot;1&quot; is normal or 1 standard G.
                      &quot;2&quot; is twice or 2 standard Gs.
                      &quot;0.5&quot; is half or 0.5 standard Gs.
                  </small>
                </p>
              </div>

            </div>

          </div>

        ) : null }
      </section>
    );
  }
}

PlanetSelected.propTypes = {
  planet: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  selectPlanet: PropTypes.func,
};

const mapStateToProps = ({ planetsInfo }) => ({
  planet: planetsInfo.selected,
});

export default connect(mapStateToProps, { selectPlanet })(PlanetSelected);
