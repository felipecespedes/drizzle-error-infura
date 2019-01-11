import React, { Component } from 'react';
import './App.scss';
import Home from './components/home/Home';
import { DrizzleContext } from 'drizzle-react';

class App extends Component {

  render() {
    return (
      <DrizzleContext.Consumer>
        { drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          if (!initialized) {
            return this.renderLoading();
          }

          return this.renderApp(drizzle, drizzleState);
        }}
      </DrizzleContext.Consumer>
    );
  }

  renderApp(drizzle, drizzleState) {
    return (
      <div className="app">
        <Home
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
      </div>
    );
  }

  renderLoading() {
    return 'Loading Drizzle...';
  }
}

export default App;
