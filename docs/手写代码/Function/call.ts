Function.prototype.Call = function (context = window, ...args: any) {
  context.fn = this;
  const result = context.fn(...args);
  // @ts-ignore
  delete context.fn;
  return result;
};
