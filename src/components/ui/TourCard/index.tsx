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
    {/* <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon> */}
    <Styled.Wrapper center={center}>
      <Link to={`https://checkout.xola.com/index.html#seller/${process.env.GATSBY_XOLA_SELLER_ID}/experiences/${id}?openExternal=true`}>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Content>{description}</Styled.Content>
        <h3>${price} - per person</h3>
        <Button>Click to book!</Button>
      </Link>
    </Styled.Wrapper>

  </Styled.TourCard>
);

export default TourCard;
