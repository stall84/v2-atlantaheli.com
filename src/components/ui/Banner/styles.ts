import styled from 'styled-components';
import tw from 'tailwind.macro';
import bg from '../../../assets/images/atl-bg-1-2.jpeg';

export const Banner = styled.section`
  ${tw`bg-cover bg-no-repeat bg-top bg-fixed border-b border-indigo-100`};
  background-image: url(${bg});
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const Title = styled.h1`
  ${tw`uppercase mb-5 text-xl font-bold w-full text-center`};
`;