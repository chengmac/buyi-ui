import React from 'react';
var SpaceItem = function SpaceItem(_ref) {
  var children = _ref.children,
    itemClassName = _ref.itemClassName;
  console.log(children);
  return /*#__PURE__*/React.createElement("div", {
    className: itemClassName
  }, children);
};
export default SpaceItem;