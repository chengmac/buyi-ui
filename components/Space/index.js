function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classnames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from "../../context";
import SpaceItem from "./Item";
import "./space.less";
var Space = function Space(_ref) {
  var _classnames;
  var children = _ref.children,
    align = _ref.align,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
    size = _ref.size,
    wrap = _ref.wrap;
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefix = getPrefixCls('space');
  var sizeCls = typeof size === 'string' && size;
  var style = typeof size === 'number' ? {
    gap: size
  } : {};
  var classList = classnames(prefix, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "-align-").concat(align), align), _defineProperty(_classnames, "".concat(prefix, "-").concat(direction), direction), _defineProperty(_classnames, "".concat(prefix, "-").concat(sizeCls), size), _defineProperty(_classnames, "".concat(prefix, "-wrap"), wrap), _classnames));
  var initItem = children.map(function (child, index) {
    var key = "space-".concat(index);
    return /*#__PURE__*/React.createElement(SpaceItem, {
      key: key,
      itemClassName: "".concat(prefix, "-item")
    }, child);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classList,
    style: style
  }, initItem);
};
export default Space;