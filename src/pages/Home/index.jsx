import React from 'react';
import {
  MainPage, StyledControlePanel, StyledDisplay, StyledKeypad,
} from './components';

export default function Home() {
  return (<MainPage>
    <StyledDisplay />
    <StyledControlePanel />
    <StyledKeypad />
  </MainPage>);
}
