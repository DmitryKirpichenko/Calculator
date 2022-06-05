export function inputDot(expres, dispatch, writepad, temp) {
  const tempExpres = `${expres}.`;
  if (/\d+\.\d+\.|\d+\.\./.test(tempExpres)) {
    alert('Wrong expression!!!!');
  } else dispatch(writepad(`${temp}`));
}
