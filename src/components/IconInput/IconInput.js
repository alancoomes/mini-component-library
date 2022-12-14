import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--bottomBorderSize': 1 + 'px',
    '--fontSize': 14/16 + 'rem',
    '--height' : 1.5 + 'rem',
    '--paddingLeft': 24 + 'px',
  },
  large: {
    '--bottomBorderSize': 2 + 'px',
    '--fontSize': 18/16 + 'rem',
    '--height': (36/16) + 'rem',
    '--paddingLeft': 36 + 'px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size]
  const iconSize = size === 'small' ? 16 : 24  ;
  const iconStrokeWidth = size === 'small' ? 1 : 2;
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{'--size': iconSize + 'px'}}>
      <Icon size={iconSize} strokeWidth={iconStrokeWidth} id={icon}></Icon>
    </IconWrapper>
    <TextInput id={label} {...delegated} width={width} style={styles}>
    </TextInput>
  </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    color: inherit;
    width: var(--size);
    height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height);
  font-size: var(--fontSize);
  /* width: var(--width); */
  width: ${p => p.width + 'px'};
  border: none;
  border-bottom: var(--bottomBorderSize) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }


`;


export default IconInput;
