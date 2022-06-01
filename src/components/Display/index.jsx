import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ScreenDiv } from './components';

export default function Display({ className }) {
  const expression = useSelector((state) => state.expression.value);
  return (
        <ScreenDiv className={className}>{expression}</ScreenDiv>
  );
}

Display.propTypes = {
  data: propTypes.string,
};
