#!/usr/bin/env node
// linked list

// courtesy Raul melo - linked list using factory function in js

function Node(data) {
  let element = data;
  let next = null;
  return { element, next };
}

function LinkedList() {
  let head = null;
  let length = 0;
  return {
    append,
    indexOf,
    insertAt,
    remove,
    removeAt,
    toString,
  };
  function append(element) {
    const node = Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {}
      currentNode.next = node;
      console.log(currentNode.next.value);
    }
    length++;
  }
  function indexOf(element) {
    let nodeIndex = 0;
    let currentNode = head;
    while (currentNode) {
      if (element === currentNode.element) {
        return nodeIndex;
      }
      nodeIndex++;
      currentNode = currentNode.next;
    }
    return -1;
  }
  function insertAt(position, element) {
    const isPositionInTheRange = position > -1 && position <= length;
    if (!isPositionInTheRange) {
      return false;
    }
    const node = Node(element);
    let currentNode = head;
    const isHeadPosition = position === 0;
    if (isHeadPosition) {
      node.next = currentNode;
      head = node;
    } else {
      let previousNode = null;
      let index = 0;
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = node;
      node.next = currentNode;
    }
    length++;
    return true;
  }
  function removeAt(position) {
    const isPositionInTheRange = position > -1 && position < length;
    if (!isPositionInTheRange) {
      return null;
    }
    let currentNode = head;
    if (position === 0) {
      head = currentNode.next;
    } else {
      let index = 0;
      let previousNode = null;
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode;
  }
  function removeAt(position) {
    const isPositionInTheRange = position > -1 && position < length;
    if (!isPositionInTheRange) {
      return null;
    }
    let currentNode = head;
    if (position === 0) {
      head = currentNode.next;
    } else {
      let index = 0;
      let previousNode = null;
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
  function remove(element) {
    const elementIndex = indexOf(element);
    return removeAt(elementIndex);
  }
  function toString() {
    let result = "";
    let current = head;
    while (current) {
      result += `${current.element}${current.next ? ", " : ""}`;
      current = current.next;
    }
    return result;
  }
}
const linkedList = LinkedList();
linkedList.append(1);
linkedList.append(10);
linkedList.append(-1);
linkedList.append(40);
linkedList.append(-123);
console.log(linkedList.toString()); // 1, 10, -1, 40, -123
console.log(linkedList.removeAt(3)); // 40
console.log(linkedList.toString()); // 1, 10, -1, -123
console.log(linkedList.indexOf(1)); // 0
console.log(linkedList.remove(1)); // 1
console.log(linkedList.toString()); // 10, -1, -123
