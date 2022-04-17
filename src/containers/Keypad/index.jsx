import React, {useState} from "react";
import { MainKeypad, Key } from "./components";
import { KEYS } from "Constants/index";
import { useSelector, useDispatch } from "react-redux";
import { clearstr, writepad, equals } from "Redux/expressionSlice";
import {addentry } from "Redux/hisrorySlice";
import mycalc from "../../utils/calculatorLogic";
import propTypes from "prop-types";

export default function Keypad (className){

    const expres = useSelector((state) => state.expression.value)
    const history = useSelector((state) => state.history.value)
    const dispatch = useDispatch()
    


    function keypadHandle(event){
        if(event.target.classList.contains('mainKeypad')) return;
        switch(event.target.textContent){
            case 'CE':{
                dispatch(clearstr())
                break;
            }
            case 'C':{
                dispatch(equals(expres.slice(0, expres.length -1)))
                break;
            }
            case '=':{
                try {
                    let temp = expres
                    console.log(expres)
                    let answer = mycalc(expres.toString()).toString();
                    console.log(answer)

                    let t = dispatch(equals(answer))
                    dispatch(addentry(temp + ' =\n' + t.payload))
                    

                } catch (error) {
                    alert('Wrong expression')
                    console.log(error)
                }
                
                break;
            }
            default:{
                let temp = event.target.textContent
                let operstr ='/*-+%'
                let numsstr ='0123456789'
                
                if(operstr.includes(temp)){
                    if(operstr.includes(expres[expres.length - 2]) || operstr.includes(expres[expres.length - 1])){
                        alert('Wrong expression')
                    }else{
                        dispatch(writepad(' ' + temp + ' '))
                    }
                    
                }else{
                    if(numsstr.includes(temp)) dispatch(writepad(temp))
                    else{
                        dispatch(writepad(' ' + temp + ' '))
                    }
                }


            }
        }
        
    }

    return(
        <MainKeypad className={`mainKeypad ${className}`} onClick={(event) => keypadHandle(event)}>
            {KEYS.map((elem, ind) =><Key key={ind}>{elem}</Key>)}
        </MainKeypad>
    )
}

