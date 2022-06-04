class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

class RemainderDivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue % this.valueToDivide;
  }

  undo(currentValue) {
    return 0;
  }
}

const operationPriorities = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2,
};

const numsteck = [];
const opsstack = [];

function preor(value, oper) {
  switch (oper) {
    case '+': {
      return new AddCommand(value);
    }
    case '-': {
      return new SubtractCommand(value);
    }
    case '*': {
      return new MultiplyCommand(value);
    }
    case '/': {
      return new DivideCommand(value);
    }
    case '%': {
      return new RemainderDivideCommand(value);
    }
  }
}

const calculator = new Calculator();

export default function mycalc(mathstr) {
  try {
    mathstr = mathstr.split(' ').filter((x) => x !== '').map((item) => {
      if (/^\.\d+$/.test(item)) {
        return (0 + item)
      }
      return item
    });
    for(let i = 0; i < mathstr.length; i++){
      if(/^\d+$|^\d+\.\d+$/.test(mathstr[i]) && mathstr[i + 1] === '('){
        mathstr.splice(i + 1, 0, '*')
        i++
      }

    }

    function helper(position) {
      if (opsstack[opsstack.length - 1] === '-' && opsstack[opsstack.length - 2] === '(' && mathstr[position - 3] === '(') {
        calculator.executeCommand(new AddCommand(parseFloat(0)));

        calculator.executeCommand(preor(parseFloat(numsteck[numsteck.length - 1]), opsstack[opsstack.length - 1]));
        numsteck.pop();
      } else {
        calculator.executeCommand(new AddCommand(parseFloat(numsteck[numsteck.length - 2])));

        calculator.executeCommand(preor(parseFloat(numsteck[numsteck.length - 1]), opsstack[opsstack.length - 1]));
        numsteck.pop();
        numsteck.pop();
      }

      numsteck.push(parseFloat(calculator.value));
      opsstack.pop();
      calculator.value = 0;
    }

    for (let i = 0; i < mathstr.length; i++) {
      if (!isNaN(parseFloat(mathstr[i]))) numsteck.push(mathstr[i]);

      if (opsstack.length) {
        if (operationPriorities[opsstack[opsstack.length - 1]] >= operationPriorities[mathstr[i]] && mathstr[i] != '(' && mathstr[i] != ')') {
          helper(i);
        }
        if (mathstr[i] === ')') {
          if (mathstr[i - 2] === '(') {
            mathstr.pop()
            opsstack.pop()
            mathstr.splice(mathstr.length - 2, 1)
            continue;
          }

          for (let j = opsstack.length - 1; j > 0; j--) {
            helper(i);
            if (opsstack[j - 1] === '(') {
              opsstack.pop();
              break;
            }
          }
        }
      }
      if (mathstr[i] !== ')' && isNaN(parseFloat(mathstr[i]))) opsstack.push(mathstr[i]);
    }

    while (opsstack.length > 0) {
      helper();
    }

    const res = numsteck[0];
    numsteck.length = 0;
    
    return parseFloat(res).toFixed(3);
  } catch (error) {
    console.log(error);
  } finally {
    numsteck.length = 0;
    opsstack.length = 0;
    calculator.value = 0;
  }
}
