- redux-thunk
- redux-saga


# redux-thunk 的原理
```js
const thunk = ({dispatch, getState}) => next => action => {
  if(typeof action === 'function'){
    return action(dispatch, getState);  
  }
  return next(action);
}
```

# redux-saga
使用Generator
