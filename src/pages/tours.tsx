import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConctactInfo from 'components/ContactInfo';
// import TourInfo from 'components/TourInfo';

import { useEffect, useState } from 'react';
import TourInfo from 'components/TourInfo';


interface XolaExperienceArray {
    toursArray: [any];
}


const ToursPage: React.FC = () => {

    const [toursList, setToursList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    /**
     * @todo Create an object structure for toursList state and set the state in the useEffect fetch below with ONLY the props we want (name, desc, price, etc)
     */

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



    return (
        <Layout>
            <SEO title="Charters and Tours" />
            <p>This is the Tours Page</p>
            {
                !toursList && <h1>Loading...</h1>
            }
            {
                errorMsg && <h1>{errorMsg}</h1>
            }
            {
                toursList && <h1>Success!!</h1>
            }
            {/* <TourInfo /> */}
            <ConctactInfo />
        </Layout>
    );
};

export default ToursPage;
