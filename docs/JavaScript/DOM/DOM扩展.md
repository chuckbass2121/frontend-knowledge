# querySelector()
querySelector()方法接收 CSS 选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配
项则返回 null。

在 Document 上使用 querySelector()方法时，会从文档元素开始搜索；

在 Element 上使用querySelector()方法时，则只会从当前元素的后代中查询。

用于查询模式的 CSS 选择符可繁可简，依需求而定。如果选择符有语法错误或碰到不支持的选择符，
则 querySelector()方法会抛出错误。

下面是一些例子：
```js
// 取得<body>元素
let body = document.querySelector("body"); 
// 取得 ID 为"myDiv"的元素
let myDiv = document.querySelector("#myDiv"); 
// 取得类名为"selected"的第一个元素
let selected = document.querySelector(".selected"); 
// 取得类名为"button"的图片
let img = document.body.querySelector("img.button"); 

```

# querySelectorAll()
接收一个用于查询的参数，但它会返回所有匹配的节点，而不止一个。
这个方法返回的是一个 NodeList 的静态实例。
```js
// 取得 ID 为"myDiv"的<div>元素中的所有<em>元素
let ems = document.getElementById("myDiv").querySelectorAll("em"); 
// 取得所有类名中包含"selected"的元素
let selecteds = document.querySelectorAll(".selected"); 
// 取得所有是<p>元素子元素的<strong>元素
let strongs = document.querySelectorAll("p strong");
```

# getElementsByClassName()
接收一个参数，即包含一个或多个类名的字符串，返回类名中包含相应类的元素的 NodeList
```js
// 取得所有类名中包含"username"和"current"元素
// 这两个类名的顺序无关紧要
let allCurrentUsernames = document.getElementsByClassName("username current"); 
// 取得 ID 为"myDiv"的元素子树中所有包含"selected"类的元素
let selected = document.getElementById("myDiv").getElementsByClassName("selected");
```

# classList 属性
- add(value)，向类名列表中添加指定的字符串值 value。如果这个值已经存在，则什么也不做。
- contains(value)，返回布尔值，表示给定的 value 是否存在。
- remove(value)，从类名列表中删除指定的字符串值 value。
- toggle(value)，如果类名列表中已经存在指定的 value，则删除；如果不存在，则添加。
```
<div class="bd user disabled">...</div>
```
```js
// 删除"disabled"类
div.classList.remove("disabled"); 
// 添加"current"类
div.classList.add("current"); 
// 切换"user"类
div.classList.toggle("user"); 
// 检测类名 
if (div.classList.contains("bd") && !div.classList.contains("disabled")){ 
 // 执行操作
}
// 迭代类名
for (let className of div.classList){ 
 doStuff(className); 
}
```

# 自定义数据属性
>HTML5 允许给元素指定非标准的属性，但要使用前缀 data-以便告诉浏览器，这些属性既不包含
与渲染有关的信息，也不包含元素的语义信息。

>定义了自定义数据属性后，可以通过元素的 dataset 属性来访问。
元素的每个 data-name 属性在 dataset 中都可以通
过 data-后面的字符串作为键来访问（例如，属性 data-myname、data-myName 可以通过 myname 访
问，但要注意 data-my-name、data-My-Name 要通过 myName 来访问）。

```js
// <div id="myDiv" data-appId="12345" data-myname="Nicholas"></div> 
// 本例中使用的方法仅用于示范
let div = document.getElementById("myDiv"); 
// 取得自定义数据属性的值
let appId = div.dataset.appId; 
let myName = div.dataset.myname; 
// 设置自定义数据属性的值
div.dataset.appId = 23456; 
div.dataset.myname = "Michael"; 
// 有"myname"吗？
if (div.dataset.myname){ 
 console.log(`Hello, ${div.dataset.myname}`);
}
```

# scrollIntoView()
```js
// 确保元素可见
document.forms[0].scrollIntoView();
```
