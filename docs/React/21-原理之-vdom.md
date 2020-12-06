# 为什么需要vdom(虚拟DOM)

**React elements are easy to traverse, don’t need to be parsed, and of course they are much lighter than the actual DOM elements—they’re just objects!**

由于构建和操作DOM对象是耗时的，原生DOM对象上有很多不需要的属性。

react element 只需关注，type，props，key，ref，children

```js
// ReactElement对象
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };
  return element;
};
```

构建好vdom，然后生成真实的DOM。
JSX -> vdom -> diff -> DOM


# vdom diff 算法
只比较同一层，不跨级比较
tag不同，则直接删除重建，不再深度比较
tag相同，比较是否有不同的属性。有则替换。

## key
tag和key都相同，则跳过比较。复用原来的dom。