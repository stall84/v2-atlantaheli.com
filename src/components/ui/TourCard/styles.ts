import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  topPad?: boolean;
}

export const TourCard = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-2 bg-white rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${tw`flex flex-col justify-center m-1 items-center`};
  ${({ center }) => center && tw`text-center`};
  ${({ topPad }) => topPad && tw`pt-4`}
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold text-center`};
`;

export const Content = styled.p`
  ${tw`mt-1 text-black text-center`};
`;

export const Link = styled.a<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center items-center`};
`