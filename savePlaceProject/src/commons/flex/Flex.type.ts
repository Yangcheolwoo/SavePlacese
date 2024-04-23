
import { BasisFlex } from '@/commons/variant/Type.ts';
import { ReactNode } from 'react';

interface BasisFlexProps extends BasisFlex {
  gap?: number;
  width?: number;
  height?: number;
  padding?: number | string;
  children: ReactNode;
}

export type {BasisFlexProps}