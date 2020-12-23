# 路由模式

## hash模式
```jsx
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}
```

## H5 history 模式
```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}
```

# 路由参数

每一个匹配的路由component中都可以获取到：

- match 获取传递过来的动态参数
- location 获取url信息
- history 可以用来做跳转

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// All route props (match, location and history) are available to User
function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(
  <Router>
    <Route path="/user/:username" component={User} />
  </Router>,
  node
);
```

# 动态路由
```
<Route path="/project/:id">
  <Project />
</Route>

function Project() {
  const { id } = useParams();
}
```

# 路由跳转
1. Link
```js
<Link to="/about">About</Link>
```
2. history
```js
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

# 懒加载
```js
import React, { lazy, Suspense } from "react";
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import("../application/Recommend/"));

const routes = [
    {
        path: "/search",
        exact: true,
        key: "search",
        component: SuspenseComponent(SearchComponent)
    }
]
```