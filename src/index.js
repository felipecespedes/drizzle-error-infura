import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Web3  from 'web3';

// import drizzle functions and contract artifact
import { Drizzle } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import MyStringStore from './contracts/MyStringStore.json';

const wsURL = 'wss://rinkeby.infura.io/ws/v3/edbb6443afb34c65ba6f2455dc7143c3';
const contractAddress = '0xd2f594b44d5d624c74f292622bd340514846cae7';
const web3 = new Web3(new Web3.providers.WebsocketProvider(wsURL));

// let drizzle know what contracts we want
const options = {
  contracts: [
    {
      contractName: 'MyStringStore',
      web3Contract: new web3.eth.Contract(MyStringStore.abi, contractAddress)
    }
  ],
  web3: {
    fallback: {
      type: 'ws',
      url: wsURL
    }
  }
};

// setup the drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App/>
  </DrizzleContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
