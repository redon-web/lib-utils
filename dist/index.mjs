const say = (msg) => {
  return `Hello ${msg}`;
};
const log = (...args) => {
  globalThis?.console.log(...args);
};

export { log, say };
