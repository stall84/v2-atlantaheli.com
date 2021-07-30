import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col justify-center h-full border-b border-indigo-100`};
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const Title = styled.h1`
  ${tw`uppercase mb-5 sm:text-3xl text-white w-full text-center`};
`;