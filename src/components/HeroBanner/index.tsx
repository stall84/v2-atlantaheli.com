import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';
import { GatsbyImage } from 'gatsby-plugin-image';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}



const HeroBanner: React.FC = () => {
  const { markdownRemark, bgImage } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
      bgImage: file(relativePath: { eq: "helosbg.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
  const backgroundImage = bgImage.childImageSharp.gatsbyImageData;
  console.log('BG: ', backgroundImage)
  return (
    <>
      <GatsbyImage image={backgroundImage} alt="Backgroun Image" />
      <Banner
        title={heroBanner.title}
        subtitle={heroBanner.subtitle}
        content={heroBanner.content}
        linkTo={heroBanner.linkTo}
        linkText={heroBanner.linkText}
        bgImg={backgroundImage}
      />
    </>
  );
};

export default HeroBanner;
