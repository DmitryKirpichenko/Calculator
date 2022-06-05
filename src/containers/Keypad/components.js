import styled from 'styled-components';
import { KEY_COLOR } from '../../constants';

export const MainKeypad = styled.div`

   display: grid;
   justify-items: center;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   margin: 0 0 0 0;
`;
export const Key = styled.div`
    border: 1px solid;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #${KEY_COLOR};
    :hover {
    border-color: #a4c2db;
    }

`;
export const LongKey = styled.div`
    border: 1px solid;
    width: 100%;
    heigth: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
    border-color: #a4c2db;
    }

`;
