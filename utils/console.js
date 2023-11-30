var messagePrefix = '[buyi-ui]';
export var error = function error(messageType, message) {
  console.error(messagePrefix, "  [".concat(messageType, "]"), message);
};
export var warn = function warn(messageType, message) {
  console.warn(messagePrefix, "  [".concat(messageType, "]"), message);
};
export var log = function log(message) {
  console.log(messagePrefix, message);
};