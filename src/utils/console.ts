const messagePrefix = '[buyi-ui]';
export const error = (messageType: string, message: string) => {
  console.error(messagePrefix, `  [${messageType}]`, message);
};

export const warn = (messageType: string, message: string) => {
  console.warn(messagePrefix, `  [${messageType}]`, message);
};

export const log = (message: string) => {
  console.log(messagePrefix, message);
};
