import { inputDot } from './InputDot';

export function inputOperation(operstr, expres, temp, isAnswer, reAnswer, dispatch, writepad) {
  if (temp !== '.') {
    if ((operstr.includes(expres[expres.length - 2])
    || operstr.includes(expres[expres.length - 1])) && expres[expres.length - 2] !== '.') {
      alert('Wrong expression1');
    } else {
      if (isAnswer) {
        reAnswer();
      }
      dispatch(writepad(` ${temp} `));
    }
  } else {
    inputDot(expres, dispatch, writepad, temp);
  }
}
