/**
 * Walk the DOM
 * @param {HTMLElement} node
 * @param {function} func
 */
export default function walk(node, func) {
  func(node);

  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
}
