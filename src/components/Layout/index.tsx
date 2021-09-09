import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';
import ContactInfo from 'components/ContactInfo';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

interface Props {
  children: React.ReactNode;
  toursArray?: [] | [any] | never[];
}

const Layout: React.FC<Props> = (props) => {

  const [toursList, setToursList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const children = React.Children.map(props.children, (child: any) => {
    return React.cloneElement(child, {
      toursArray: toursList ? toursList : ['testing']
    })
  })

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const tours = await fetch(`${process.env.GATSBY_XOLA_SELLER_ENDPOINT}${process.env.GATSBY_XOLA_SELLER_ID}`, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-VERSION': '2017-06-10',
            'X-API-KEY': `${process.env.GATSBY_XOLA_SELLER_API_KEY}`
          }
        })
        return tours.json();
      }
      catch (error) {
        setErrorMsg('We had an issue retrieving the laterst tours, give us a call at 678-362-3415 for direct booking!')
        console.log('Error retrieving list of tours from Xola: ', error);
      }
    }
    fetchTours()
      .then(response => setToursList(response.data))
      .catch(error => setErrorMsg(error.message))
  }, []);


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
