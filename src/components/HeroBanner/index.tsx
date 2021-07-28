import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}



const HeroBanner: React.FC = () => {
  const { markdownRemark, bgImage, sanityBG } = useStaticQuery(graphql`
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
      sanityBG: sanityImages {
        bgImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
  const backgroundImage = bgImage.childImageSharp.gatsbyImageData;
  const sanityBackground = sanityBG.bgImage.asset.gatsbyImageData;
  console.log('Sanity BG: ', sanityBackground);
  return (
    <>
      <GatsbyImage image={sanityBackground} alt="Background Image" />
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
