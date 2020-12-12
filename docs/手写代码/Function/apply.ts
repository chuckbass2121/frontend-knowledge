Function.prototype.Apply = function (context = window, args) {
  context.fn = this;
  const result = context.fn(...args);
  // @ts-ignore
  delete context.fn;
  return result;
};
