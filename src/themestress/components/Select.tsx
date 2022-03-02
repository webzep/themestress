import React, {MutableRefObject} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';
import {createStateLayer} from '../core/md/color';
import {Typography} from './Typography';

export interface SelectProps extends ReactHTMLProps<HTMLInputElement> {}

const baseStyles = () => {
  return css`
    cursor: pointer;
    line-height: 1.5;
    height: 48px;
    min-width: 112px;
    max-width: 280px;
    overflow: hidden;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0px;
    text-align: left;
    text-transform: none;
    justify-content: left;

    > span._TextButton-start-icon {
      padding-right: 12px;
      color: var(--sys-color-on-surface-variant);
      > svg {
        fill: var(--sys-color-on-surface-variant);
      }
    }

    > span._TextButton-end-icon {
      padding-left: 12px;
      color: var(--sys-color-on-surface-variant);
      > svg {
        fill: var(--sys-color-on-surface-variant);
      }
    }

    > span._TextButton-label {
      color: var(--sys-color-on-surface);
    }
  `;
};
const hoveredStyle = ({theme}: {theme: Theme}) => {
  return css`
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme}: {theme: Theme}) => {
  return css`
    outline-offset: 0px;
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme}: {theme: Theme}) => {
  return css`
    transform: none;
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.press.opacity,
    )};
  `;
};
const StyledSelect = styled.input<SelectProps>`
  ${baseStyles}

  :not(:disabled):focus-visible {
    ${focusedStyle}
  }

  @media (hover: hover) {
    :not(:disabled):hover {
      ${hoveredStyle}
    }
  }

  :not(:disabled):active {
    ${activeStyle}
  }

  ${props => getMarginAndPadding(props)}
`;

const StyledLabel = styled(Typography)<{padStart?: boolean; padEnd?: boolean}>`
  padding-left: ${({padStart}) => padStart && '36px'};
  padding-right: ${({padEnd}) => padEnd && '36px'};
`;

export const Select: React.FC<SelectProps> = React.forwardRef(
  (props: SelectProps, ref: MutableRefObject<HTMLInputElement>) => {
    return (
      <StyledSelect
        ref={ref}
        className="_Select"
        {...props}
      ></StyledSelect>
    );
  },
);