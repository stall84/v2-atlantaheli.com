import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConctactInfo from 'components/ContactInfo';


const ToursPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Charters and Tours" />
            <p>This is the Tours Page</p>
            <ConctactInfo />
        </Layout>
    );
};

export default ToursPage;
