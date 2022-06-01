import styled from 'styled-components';
import { HEADER_COLOR } from '../../constants/index';

export const HeaderBack = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;

  border-bottom: 2px solid;

  background-color: ${HEADER_COLOR};

  display: grid;

  grid-template-areas: 
  "appname appmenu";
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 0.5fr;
`;

export const AppName = styled.header`
  grid-area: appname;
  text-align: left;
  padding: 0 0 0 4px;
  fond-weight: bold;
`;

export const AppMenu = styled.div`
  grid-area: appmenu;
  text-align: right;
  padding: 0 4px 0 0
`;
