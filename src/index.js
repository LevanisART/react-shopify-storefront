import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './App.css';

const client = Client.buildClient({
  storefrontAccessToken: '99cbc67666042ab0facb1de50ebad6af',
  domain: 'karma-store-test-2.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
