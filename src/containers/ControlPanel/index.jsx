import React, { useState } from 'react';
import History from 'History/index';
import propTypes from 'prop-types';
import { StyledButton, StyledDiv } from './components';

export default function ControlPanel({ className }) {
  const [display, setDisplay] = useState(false);

  function clickHandle() {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }

  return (
    <StyledDiv className={className}>
      <StyledButton onClick={(e) => clickHandle(e)}>History</StyledButton>
      {display === true ? <History /> : <div>History hidden</div>}
    </StyledDiv>

  );
}
ControlPanel.propTypes = {
  data: propTypes.string,
};
