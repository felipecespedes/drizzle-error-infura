import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

  static propTypes = {
    drizzle: PropTypes.object.isRequired,
    drizzleState: PropTypes.object.isRequired
  };

  state = {
    dataKey: null
  };

  render() {
    const { MyStringStore } = this.props.drizzleState.contracts;
    const myString = MyStringStore.myString[this.state.dataKey];

    return (
      <h1>{myString && myString.value}</h1>
    );
  }

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;
    const dataKey = contract.methods['myString'].cacheCall();

    this.setState({ dataKey });
  }

}

export default Home;
