import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import PlanetList from './containers/PlanetList/PlanetList';

class App extends Component {
  render() {
    return (
      <Layout>
        <PlanetList />
      </Layout>
    );
  }
}

export default App;
