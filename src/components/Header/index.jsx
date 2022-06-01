import React from 'react';
import Menu from 'Menu/index';
import propTypes from 'prop-types';
import { HeaderBack, AppMenu, AppName } from './components';

export default function Header({ className }) {
  return (
        <HeaderBack className={className}>
            <AppName>Calculator App</AppName>
            <AppMenu><Menu/></AppMenu>
        </HeaderBack>
  );
}
Header.propTypes = {
  data: propTypes.string,
};
