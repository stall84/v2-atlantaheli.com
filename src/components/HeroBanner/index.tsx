import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import styled from 'styled-components';
import tw from 'tailwind.macro';

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
  const sanityBackground = convertToBgImage(sanityBG.bgImage.asset.gatsbyImageData);
  console.log('Sanity BG: ', typeof sanityBackground);
  return (

    <BackgroundImage
      Tag='section'
      {...sanityBackground}
      preserveStackingContext
      className="heroBanner"
    >
      <Banner
        title={heroBanner.title}
        subtitle={heroBanner.subtitle}
        content={heroBanner.content}
        linkTo={heroBanner.linkTo}
        linkText={heroBanner.linkText}
        bgImg={backgroundImage}
      />
    </BackgroundImage>

  );
};

const StyledHeroBanner = styled(HeroBanner)`
min-height: 500px;


`;
export default StyledHeroBanner;
