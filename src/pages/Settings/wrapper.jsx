import React from 'react';
import { useDispatch } from 'react-redux';
import SettingsComponent from './index.jsx';
import { clearhistory } from '../../redux/hisrorySlice';
import { switchTheme } from '../../redux/themeSlice';

export default function Settings() {
  const dispatch = useDispatch();

  return (
    <SettingsComponent
    clearhistory={() => dispatch(clearhistory())}
    switchTheme={(name) => dispatch(switchTheme(name))}/>
  );
}
