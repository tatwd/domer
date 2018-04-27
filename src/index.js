import walk from './walk';

const domer = function(...values) {
  let res = [];

  values.forEach(value => {
    if (value === 'html') {
      res.push(document);
      return;
    }

    if (document[value]) {
      res.push(document[value]);
      return;
    }

    let _arr = [];

    walk(document.head, function(node) {
      let actual = null;
      actual = node.nodeType === 1 && node.classList.contains(value) && node;
      actual = actual
        ? actual
        : node.nodeType === 1 &&
          node.tagName.toString().toLowerCase() === value &&
          node;
      if (actual) {
        _arr.push(node);
      }
    });
    if (_arr.length > 0) {
      res.push(_arr.length > 1 ? _arr : _arr[0]);
      return;
    }

    _arr = [];
    walk(document.body, function(node) {
      let actual = null;

      actual = node.nodeType === 1 && node.id === value && node;

      if (!actual) {
        actual = node.nodeType === 1 && node.classList.contains(value) && node;
      }

      if (!actual) {
        actual =
          node.nodeType === 1 && node.tagName.toLowerCase() === value && node;
      }

      if (actual) {
        _arr.push(node);
      }
    });
    res.push(_arr.length > 1 ? _arr : _arr[0]);
    _arr = [];
  });

  return res.length > 1 ? res : res[0];
};

// Ready to walk then DOM
domer.ready = function() {
  const doms = {};

  doms.document = document;
  doms.head = document.head;
  doms.title = document.title;
  doms.body = document.body;

  const spliter = function(value) {
    return value
      .split('-')
      .reduce((acc, item, index) => {
        if (index > 0) {
          item = item[0].toUpperCase().concat(item.substring(1));
        }
        acc.push(item);
        return acc;
      }, [])
      .join('');
  };

  walk(document, function(node) {
    let actual = {};

    actual._dom = node.nodeType === 1 && node.id !== '' && node;

    if (!actual._dom) return;

    actual._dome_name = spliter(node.id);

    if (!doms[actual._dome_name]) {
      doms[actual._dome_name] = actual._dom;
    }

    // TODO: set dom which has class attr
  });

  return doms;
};

export default domer;
