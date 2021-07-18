import React from 'react';
import { Link } from 'gatsby';
import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  linkTo: string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, linkTo, center }) => (
  <Styled.InfoBlock center={center}>
    <Link to={linkTo}>
      <Styled.Icon>
        <Icon icon={icon} />
      </Styled.Icon>
      <Styled.Wrapper center={center}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Content>{content}</Styled.Content>
      </Styled.Wrapper>
    </Link>
  </Styled.InfoBlock>
);

export default InfoBlock;
