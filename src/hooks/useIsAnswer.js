import { useState } from 'react';

export function useIsAnswer() {
  const [isAnswer, setIsAnswer] = useState(false);

  function reAnswer() {
    // eslint-disable-next-line no-unneeded-ternary
    setIsAnswer(isAnswer === false ? true : false);
  }

  return [isAnswer, reAnswer];
}
