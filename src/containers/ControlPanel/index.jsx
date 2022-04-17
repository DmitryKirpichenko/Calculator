import React, { useState } from 'react'
import { StyledButton, StyledDiv } from './components'
import History from 'History/index'
import propTypes from "prop-types";

export default function ControlPanel({className}) {
    let [display, setDisplay] = useState(false)

    function clickHandle(event) {
        display === false ? setDisplay(true) : setDisplay(false);
    }

    return (
        <StyledDiv className={className}>
            <StyledButton onClick={e => clickHandle(e)}>History</StyledButton>
            {display === true ? <History /> : <div>History hidden</div>}
        </StyledDiv>


    )
}
ControlPanel.propTypes = {
    data: propTypes.string
}