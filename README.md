## Installation

* `git clone https://github.com/LevanisART/shopify-storefront-app.git` this repository
* `cd storefront-api-examples`
* `cd react-js-buy`
* `npm install`

## Configuring

If you would like to connect your store to this example, open up `src/index.js` and update the `domain` and `storefrontAccessToken`:

```js
const client = Client.buildClient({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
```

## Running

Start a local server:

```
npm start
```

* Visit your app at [http://localhost:3000](http://localhost:3000).

## Further Reading / Useful Links

* [React](https://facebook.github.io/react/)
* [JS Buy SDK](https://github.com/Shopify/js-buy-sdk)


<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />