import React from 'react';
import { Columns } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      Newest Releases
    <SelectHide value={value} onChange={onChange}>
      {children}
    </SelectHide>
    <IconWrapper>
    <Icon id='chevron-down'></Icon>
    </IconWrapper>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  width: fit-content;
  text-align: center;
`;

const SelectHide = styled.select`
opacity: 0;
position: absolute;
z-index: 1;
`;

const IconWrapper = styled.div`
  display: inline-block;
  font-weight: 900;
`;

export default Select;
