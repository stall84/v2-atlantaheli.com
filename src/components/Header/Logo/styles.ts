import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-black hover:text-indigo-900`};
`;

export const Text = styled.h1`
  ${tw`text-md sm:text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-24 h-12 sm:w-32 sm:h-16 mr-2 sm:mt-1 rounded-full`};

  img {
    ${tw`h-full w-full rounded-full border border-red`};
  }
`;
