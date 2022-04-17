import styled from 'styled-components'

export const MainKeypad = styled.div`

   display: grid;
   align-items: center;

   grid-template-rows: 1fr 1fr 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-row-gap: 10px;
   grid-column-gap: 10px;

`
export const Key = styled.div`
    border: 1px solid;
    width: 50px;
    heigth: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
    border-color: #a4c2db;
    }

`
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

`