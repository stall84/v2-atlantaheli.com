import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConctactInfo from 'components/ContactInfo';

import { toursQuery } from '../apollo/xola-client';
import { useQuery, gql } from '@apollo/client';




const ToursPage: React.FC = () => {

    const { loading, error, data } = useQuery(toursQuery);

    return (
        <Layout>
            <SEO title="Charters and Tours" />
            <p>This is the Tours Page</p>
            {loading && <h3>Loading Query...</h3>}
            {error && <h3>Error: ${error.message}</h3>}
            {data && console.log(data)}
            <ConctactInfo />
        </Layout>
    );
};

export default ToursPage;
