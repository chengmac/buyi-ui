export type TitleAsList = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type GridAlign = 'top' | 'bottom' | 'middle' | 'stretch';
export type GridJustify =
  | 'start'
  | 'end'
  | 'middle'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface ComponentStyleProps {
  style?: React.CSSProperties;
}

export interface GapRules {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type LiteralUnion<T extends string> = T | (string & {});
