/**
 *Implementation Of Stack in JavaScript ES6
 */
class Stack {
    constructor() {
        this._storage = {};
        this._position = -1;
    }
    top() {
        return this._position;
    }
    push(value) {
        this._position++;
        this._storage[this._position] = value;
        console.log('pushed ', value);

    }
    pop() {
        if (this._position > -1) {
            var val = this._storage[this._position];
            delete this._storage[this._position];
            this._position--;
            return val;

        }

    }

}
module.exports = Stack;
let browserHistory = new Stack();
browserHistory.push('Netflix.com');
browserHistory.push('test');
browserHistory.push('test2');
browserHistory.push('test3');
console.log(browserHistory.pop());

//Implementation of Push Operation
