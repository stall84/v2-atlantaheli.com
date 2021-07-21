// Apollo GraphQL 'Wrapper' client for the Xola REST API
import * as Polyfillheaders from 'fetch-headers';
// import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink, from, gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

global.Headers = global.Headers || Polyfillheaders;

export const experiencesRestLink = new RestLink({
  uri: `https://xola.com/api/experiences?seller=${process.env.XOLA_SELLER_ID}`,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': `${process.env.XOLA_SELLER_API_KEY}`
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([experiencesRestLink, HttpLink])
});

export const toursQuery = gql`
  query {
    experiences @rest(type: "Experience", path: "") {
      data {
        id
        name
      }
    }
  }
`;
