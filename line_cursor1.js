/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The class representing a line cursor.
 * A line cursor traverses the blocks as if they were
 * lines of code in a text editor. 
 * Previous and next go up and down lines. In and out go
 * through the elements in a line.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */
'use strict';


/**
 * Class for a line cursor.
 * This will allow the user to get to all nodes in the AST by hitting next or
 * previous.
 * @constructor
 * @extends {Blockly.BasicCursor}
 */
Blockly.LineCursor = function() {
  Blockly.LineCursor.superClass_.constructor.call(this);
};
Blockly.utils.object.inherits(Blockly.LineCursor, Blockly.BasicCursor);


/**
 * Find the next node in the pre order traversal.
 * @return {Blockly.ASTNode} The next node, or null if the current node is
 *     not set or there is no next value.
 * @override
 */
Blockly.LineCursor.prototype.next = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getNextNode_(curNode, this.validLineNode_);

  // Skip the input or next value if there is a connected block.
  if (newNode && (newNode.getType() == Blockly.ASTNode.types.INPUT ||
      newNode.getType() == Blockly.ASTNode.types.NEXT) &&
      newNode.getLocation().targetBlock()) {
    newNode = this.getNextNode_(newNode, this.validLineNode_);
  }
  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};

/**
 * For a basic cursor we only have the ability to go next and previous, so
 * in will also allow the user to get to the next node in the pre order traversal.
 * @return {Blockly.ASTNode} The next node, or null if the current node is
 *     not set or there is no next value.
 * @override
 */
Blockly.LineCursor.prototype.in = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getNextNode_(curNode, this.validInLineNode_);

  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};

/**
 * Find the previous node in the pre order traversal.
 * @return {Blockly.ASTNode} The previous node, or null if the current node
 *     is not set or there is no previous value.
 * @override
 */
Blockly.LineCursor.prototype.prev = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getPreviousNode_(curNode, this.validLineNode_);
  
  if (newNode && (newNode.getType() == Blockly.ASTNode.types.INPUT ||
    newNode.getType() == Blockly.ASTNode.types.NEXT) &&
    newNode.getLocation().targetBlock()) {
    newNode = this.getPreviousNode_(newNode, this.validLineNode_);
  }

  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};

/**
 * For a basic cursor we only have the ability to go next and previous, so
 * out will allow the user to get to the previous node in the pre order traversal.
 * @return {Blockly.ASTNode} The previous node, or null if the current node is
 *     not set or there is no previous value.
 * @override
 */
Blockly.LineCursor.prototype.out = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getPreviousNode_(curNode, this.validInLineNode_);

  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;

};

/**
 * Meant to traverse by lines of code. This is blocks, statement inputs and
 * next connections.
 * @param {Blockly.ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @private
 */
Blockly.LineCursor.prototype.validLineNode_ = function(node) {
  if (!node) {
    return false;
  }
  var isValid = false;
  var location = node.getLocation();
  var type = node && node.getType();
  if (type == Blockly.ASTNode.types.BLOCK) {
    if (location.outputConnection == null){
        isValid = true;
    }
  } else if (type == Blockly.ASTNode.types.INPUT && 
      location.type == Blockly.NEXT_STATEMENT) {
    isValid = true;
  } else if (type == Blockly.ASTNode.types.STACK){
    isValid = true;  
  }
    else if (type == Blockly.ASTNode.types.NEXT) {
    isValid = true;
  }
  return isValid;
};

/**
 * Meant to traverse within a block. These are fields and input values.
 * @param {Blockly.ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @private
 */
Blockly.LineCursor.prototype.validInLineNode_ = function(node) {
  var isValid = false;
  var type = node && node.getType();
  if (type == Blockly.ASTNode.types.OUTPUT ||
      type == Blockly.ASTNode.types.INPUT ||
      type == Blockly.ASTNode.types.FIELD ||
      type == Blockly.ASTNode.types.NEXT ||
      type == Blockly.ASTNode.types.PREVIOUS ||
      type == Blockly.ASTNode.types.WORKSPACE) {
    isValid = true;
  }
  return isValid;
};


Blockly.LineCursor.prototype.onBlocklyAction = function(action) {
      var handled = Blockly.LineCursor.superClass_.onBlocklyAction.call(this, action);
  // Don't handle if the parent class has already handled the action.
  if (!handled && action.name === 'tooltip') {
    // Gets the current node.
    var currentNode = this.getCurNode();
    // Gets the source block from the current node.
    var currentBlock = currentNode.getSourceBlock();
    try {
        var screenReader = document.getElementById("screenReader");
        screenReader.innerHTML = currentBlock.tooltip()
    }
    catch {
        var screenReader = document.getElementById("screenReader");
        screenReader.innerHTML = currentBlock.tooltip 
  }
  }
  if (!handled && action.name === 'info') {
    // Gets the current node.
    var currentNode = this.getCurNode();
    // Gets the source block from the current node.
    var currentBlock = currentNode.getSourceBlock();
    var text = currentBlock.toString();
    var text = text.replaceAll('?', 'blank')
    var screenReader = document.getElementById("screenReader");
    screenReader.innerHTML = text
  }
  if (!handled && action.name === 'delete') {
    // Gets the current node.
      Blockly.Events.setGroup(true);
      var block = this.getCurNode().getSourceBlock();
      block.dispose(true, true);
      Blockly.Events.setGroup(false);
      var screenReader = document.getElementById("screenReader");
      screenReader.innerHTML = 'block deleted'
  }
}