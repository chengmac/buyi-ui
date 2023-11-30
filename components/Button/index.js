function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["disabled", "type", "size", "icon", "children", "className", "loading", "linkUrl", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import classnames from 'classnames';
import React, { useContext } from 'react';
import { ConfigContext } from "../../context";
import { warn } from "../../utils/console";
import Icon from "../Icon";
import "./button.less";
var ButtonTypes = ['default', 'primary', 'dashed', 'link'];
var Button = function Button(_ref) {
  var _classnames, _classnames2;
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    size = _ref.size,
    icon = _ref.icon,
    children = _ref.children,
    className = _ref.className,
    loading = _ref.loading,
    linkUrl = _ref.linkUrl,
    onClick = _ref.onClick,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefix = getPrefixCls('btn');
  var classList = classnames(prefix, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "-").concat(type), type), _defineProperty(_classnames, "".concat(prefix, "-").concat(size), size), _classnames), (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefix, "-icon"), (loading || icon) && children), _defineProperty(_classnames2, "".concat(prefix, "-icon-only"), (loading || icon) && !children), _classnames2), className);
  var clickHandle = function clickHandle(e) {
    if (loading) return false;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  if (typeof icon === 'string') {
    warn('Button', 'icon类型不对');
  }
  var iconNode = icon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "-icon-container")
  }, icon);
  var buttonNode = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    className: classList
  }, restProps, {
    onClick: clickHandle
  }), iconNode, loading && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "-icon-container")
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "icon-reload",
    className: "".concat(prefix, "-icon-loading")
  })), type === 'link' && !disabled ? /*#__PURE__*/React.createElement("a", {
    href: linkUrl,
    target: "_blank",
    rel: "noreferrer"
  }, children) : /*#__PURE__*/React.createElement("span", null, children));
  return buttonNode;
};
export default Button;