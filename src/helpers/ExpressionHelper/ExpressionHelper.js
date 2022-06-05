import { inputNumber } from './InputNumber';
import { inputOperation } from './InputOperation';

export function ExpresionHelper(temp, isAnswer, reAnswer, expres, dispatch, writepad, equals) {
  const operstr = '/*-+%.';
  const numsstr = '0123456789';

  switch (operstr.includes(temp)) {
    case true: {
      inputOperation(operstr, expres, temp, isAnswer, reAnswer, dispatch, writepad);
      break;
    }
    case false: {
      inputNumber(numsstr, isAnswer, dispatch, equals, writepad, reAnswer, temp);
      break;
    }
    default: {
      return 0;
    }
  }
}
