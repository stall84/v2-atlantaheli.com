import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import ConctactInfo from 'components/ContactInfo';

import { GatsbyImage } from 'gatsby-plugin-image';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="North Atlanta Executive Air Service" />
      <HeroBanner />
      {/* <GatsbyImage /> */}
      <Services />
      <hr />
      <Testimonials />
      <ConctactInfo />
    </Layout>
  );
};

export default IndexPage;
