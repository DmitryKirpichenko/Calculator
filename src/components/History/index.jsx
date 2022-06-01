import React from 'react';

import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledUl } from './components';

export default function History({ className }) {
  const history = useSelector((state) => state.history.value);
  return (
        <StyledUl className={className}>
            {history.map((elem, ind) => <li key={ind}>{elem}</li>)}
        </StyledUl>
  );
}

History.propTypes = {
  data: propTypes.string,
};
