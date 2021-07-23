import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import LinkedInfoBlock from 'components/ui/LinkedInfoBlock';
// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';


import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

// interface Contact {
//   node: {
//     id: string;
//     frontmatter: {
//       title: string;
//       content: string;
//       icon: IconProps;
//     };
//   };
// }
// interface SanityContact {
//   node: {
//     id: string,
//     contact_type: string;
//     contact_value: string;
//     contact_icon: IconProps;
//     contact_link: string;
//   }
// }
interface XolaExperienceArray {
  toursArray: [any];
}

interface XolaExperience {
  id: string;
  name: string;
  description: string;
  photoLink?: string;
  cancellationPolicy?: string;
  price: number;
  priceType?: string;
}


const TourInfo: React.FC<XolaExperienceArray> = ({ toursArray }) => {


  return (
    <Container section>
      <TitleSection title="Tours and Charters" subtitle="Our best packages" center />
      {/* {
        loading && <HourGlass />
      } */}

    </Container>
  );
};

export default TourInfo;
