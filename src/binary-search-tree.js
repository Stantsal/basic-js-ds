const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.elemRoot = null;
  }

  root() {
    return this.elemRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.elemRoot === null) {
        this.elemRoot = newNode;
    } else {
        this.insertNode(this.elemRoot, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data, node = this.elemRoot) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.has(data, node.left);
    } else if (data > node.data) {
      return this.has(data, node.right);
    } else {
      return true;
    }
  }

  find(data, node = this.elemRoot) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this.find(data, node.left);
    } else if (data > node.data) {
        return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data, node = this.elemRoot) {
    if (node === null) {
      return null;

    } else if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;

    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
      return node;

    } else {

        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        } else if(node.right === null) {
          node = node.left;
          return node;
        }

        let newNode = this.min(node.right);
        console.log(newNode);
        node.data = newNode;
        node.right = this.remove(newNode, node.right);
        return node;
  }
}

  min(node = this.elemRoot) {
    if (node.left === null) {
      return node.data;
    }else{
      return this.min(node.left);
  }
  }
  max(node = this.elemRoot) {
    if (node.right === null) {
      return node.data;
     } else {
      return this.max(node.right);
  }
}
}

module.exports = {
  BinarySearchTree
};