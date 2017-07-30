import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // locash.jsに依存しているが、requireされていない
  // globalに _ 変数が存在している前提
  element.innerHTML = _.join(['hello', 'webpack']);

  return element;
}

document.body.appendChild(component());
