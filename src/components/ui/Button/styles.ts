import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
  hover?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-black text-indigo-900`};

  ${({ primary }) => (primary ? tw`bg-lightRed` : tw`text-black`)};

  ${({ block }) => block && tw`w-full`};

  ${({ hover }) => hover && tw`hover:bg-teal-500`};
`);
