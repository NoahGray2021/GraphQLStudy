import React from 'react';
import gql from 'graphql-tag';

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default query
