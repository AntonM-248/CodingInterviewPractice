class Stack {
  array = [];
  numElements = 0;
  push(element) {
    this.array.push(element);
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  isEmpty() {
    return this.array.length == 0;
  }
  clear() {
    this.array = [];
  }
}