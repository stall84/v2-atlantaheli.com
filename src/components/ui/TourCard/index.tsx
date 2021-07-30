import React from 'react';
import { Link } from 'gatsby';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';
import Button from '../Button';

// interface Props extends Styled.StyledProps {
//   title: string;
//   content: React.ReactNode;
//   icon: IconProps;
//   linkTo: string;
// }

// interface NewProps extends Styled.StyledProps {
//   id: string;
//   name: string;
//   description: string;
//   photoLink?: string;
//   cancellationPolicy?: string;
//   price: number;
//   priceType?: string;
// }

interface XolaExperience extends Styled.StyledProps {
  id: string;
  name: string;
  description: string;
  photoLink?: string;
  cancellationPolicy?: string;
  price: number;
  priceType?: string;
}


const TourCard: React.FC<XolaExperience> = ({ id, center, name, description, price, priceType, photoLink, cancellationPolicy }) => (
  <Styled.TourCard center={center}>
    <img src={`${process.env.GATSBY_IMG_TEST}${photoLink}_723x542.jpg`} />
    <Styled.Wrapper center={center}>
      <Styled.Link center target="_blank" href={`https://checkout.xola.com/index.html#seller/${process.env.GATSBY_XOLA_SELLER_ID}/experiences/${id}?openExternal=true`}>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Content>{description}</Styled.Content>
        <Styled.Wrapper topPad>
          <Styled.h3>${price} - per person</Styled.h3>
          <Button>Click to book!</Button>
        </Styled.Wrapper>
      </Styled.Link>
    </Styled.Wrapper>

  </Styled.TourCard>
);

export default TourCard;
