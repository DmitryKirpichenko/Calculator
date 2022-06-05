export function inputNumber(numsstr, isAnswer, dispatch, equals, writepad, reAnswer, temp) {
  if (numsstr.includes(temp)) {
    if (isAnswer) {
      dispatch(equals(temp));
      reAnswer();
    } else dispatch(writepad(temp));
  } else {
    dispatch(writepad(` ${temp} `));
  }
}
