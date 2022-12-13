/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--innerPadding': 0 + 'px',
    '--borderRadius': 4 + 'px',
    '--innerHeight': 8 + 'px',
  },
  medium: {
    '--innerPadding': 0 + 'px',
    '--borderRadius': 4 + 'px',
    '--innerHeight': 12 + 'px',
  },
  large: {
    '--innerPadding': 4 + 'px',
    '--borderRadius': 8 + 'px',
    '--innerHeight': 16 + 'px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return (<ProgressDiv style={styles} role='progressbar' aria-valuemin='0' aria-valuemax='100' aria-valuenow={value}>
    <VisuallyHidden>{value}</VisuallyHidden>
    <BarWrapper style={styles}>
    <Bar style={styles} value={value}></Bar>
    </BarWrapper>
  </ProgressDiv>);
  // return (<Progress id="loadingLabel" max="100" style={styles} value={value}>{value}</Progress>);
};

const ProgressDiv = styled.div`
  border-radius: var(--borderRadius); 
  overflow: hidden;
  width: 100%;
  padding: var(--innerPadding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const Bar = styled.div`
    width: ${p => p.value + '%'};
    background-color: ${COLORS.primary};
    height: var(--innerHeight);
    border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
    overflow: hidden;
    border-radius: 4px;
`;

const Progress = styled.progress`

  border-radius: var(--borderRadius); 
  width: 370px;

&::-webkit-progress-bar {
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--innerPadding);
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
}
&::-webkit-progress-value {
  background-color: ${COLORS.primary};
  border-top-left-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
}
`;




export default ProgressBar;
