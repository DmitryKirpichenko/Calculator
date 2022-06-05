import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import History from 'History/index';
import propTypes from 'prop-types';
import { StyledDiv } from './components';

export default function ControlPanel({ className }) {
  return (
    <StyledDiv className={className}>
      History
      <History />
    </StyledDiv>

  );
}
ControlPanel.propTypes = {
  data: propTypes.string,
};
