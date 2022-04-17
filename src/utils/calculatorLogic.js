class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}

class RemainderDivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue % this.valueToDivide
    }

    undo(currentValue) {
        return 0
    }
}

let IdontKnow = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2
}

let numsteck = []
let opsstack = []

function preor(value, oper) {
    switch (oper) {
        case '+': {
            return new AddCommand(value)
        }
        case '-': {
            return new SubtractCommand(value)
        }
        case '*': {
            return new MultiplyCommand(value)
        }
        case '/': {
            return new DivideCommand(value)
        }
        case '%': {
            return new RemainderDivideCommand(value)
        }
    }
}

const calculator = new Calculator()

export default function mycalc(mathstr) {

    try {
        mathstr = mathstr.split(' ').filter((x) => x !== '')
        console.log(mathstr)

        function helper(position) {
            if (opsstack[opsstack.length - 1] === '-' && opsstack[opsstack.length - 2] === '(' && mathstr[position - 3] === '(') {
                calculator.executeCommand(new AddCommand(parseFloat(0)))

                calculator.executeCommand(preor(parseFloat(numsteck[numsteck.length - 1]), opsstack[opsstack.length - 1]))
                numsteck.pop()
            } else {
                calculator.executeCommand(new AddCommand(parseFloat(numsteck[numsteck.length - 2])))

                calculator.executeCommand(preor(parseFloat(numsteck[numsteck.length - 1]), opsstack[opsstack.length - 1]))
                numsteck.pop()
                numsteck.pop()
            }

            numsteck.push(parseFloat(calculator.value))
            opsstack.pop()
            calculator.value = 0
        }

        for (let i = 0; i < mathstr.length; i++) {
            if (!isNaN(parseFloat(mathstr[i]))) numsteck.push(mathstr[i])

            if (opsstack.length) {
                if (IdontKnow[opsstack[opsstack.length - 1]] >= IdontKnow[mathstr[i]] && mathstr[i] != '(' && mathstr[i] != ')') {

                    helper(i)
                }
                if (mathstr[i] === ')') {
                    for (let j = opsstack.length - 1; j > 0; j--) {
                        helper(i)
                        if (opsstack[j - 1] === '(') {
                            opsstack.pop()
                            break;
                        }
                    }
                }
            }
            if (mathstr[i] !== ')' && isNaN(parseFloat(mathstr[i]))) opsstack.push(mathstr[i])
        }

        while (opsstack.length > 0) {
            helper()
        }

        let res = numsteck[0]
        numsteck.length = 0
        return res
    } catch (error) {
        console.log(error)
    } finally { 
        numsteck.length = 0
        opsstack.length = 0
        calculator.value = 0
    }


}