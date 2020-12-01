# documentElement
document 节点表示每个文档的根节点。在这里，根节点的唯一子节点是<html>元素，我们称之
为文档元素（documentElement）。文档元素是文档最外层的元素，所有其他元素都存在于这个元素之
内。每个文档只能有一个文档元素。

# Node类型
DOM Level 1 描述了名为 Node 的接口，这个接口是所有 DOM 节点类型都必须实现的。

1. Node.ELEMENT_NODE（1）
2. Node.ATTRIBUTE_NODE（2） 
3. Node.TEXT_NODE（3） 
4. Node.CDATA_SECTION_NODE（4） 
5. Node.ENTITY_REFERENCE_NODE（5） 
6. Node.ENTITY_NODE（6） 
7. Node.PROCESSING_INSTRUCTION_NODE（7） 
8. Node.COMMENT_NODE（8） 
9. Node.DOCUMENT_NODE（9） 
10. Node.DOCUMENT_TYPE_NODE（10） 
11. Node.DOCUMENT_FRAGMENT_NODE（11） 
12. Node.NOTATION_NODE（12）

操作node的方法：
- appendChild
- insertBefore
- replaceChild
- removeChild
- cloneNode
- normalize
```js
// 转化nodeList类数组为数组
let arrayOfNodes = Array.from(someNode.childNodes);
```

# document 类型
浏览器解析完这个页面之后，文档只有一个子节点，即<html>元素。这个元素既可以通过
documentElement 属性获取，也可以通过 childNodes 列表访问，如下所示：
```js
let html = document.documentElement; // 取得对<html>的引用
alert(html === document.childNodes[0]); // true 
alert(html === document.firstChild); // true
// 读取文档标题
let originalTitle = document.title;
let url = document.URL; 
// 取得域名
let domain = document.domain; 
// 取得来源
let referrer = document.referrer;
// 取得对这个<div>元素的引用
let div = document.getElementById("myDiv"); 
// 取得页面中所有的<img>元素
let images = document.getElementsByTagName("img");
// 取得所有单选按钮
let radios = document.getElementsByName("color");

// document.write() 在页面渲染期间通向文档中输出内容
document.write("<strong>" + (new Date()).toString() + "</strong>"); 

// 如果是在页面加载完之后再调用 document.write()，则输出的内容会重写整个页面，
window.onload = function(){ 
 document.write("Hello world!"); 
}; 
```
 
# Element 类型
Element 表示XML或HTML元素，对外暴露出访问元素标签名、子节点和属性的能力。
- nodeType 等于 1；
- nodeName 值为元素的标签名；
- nodeValue 值为 null；
- parentNode 值为 Document 或 Element 对象；
- 子节点可以是 Element、Text、Comment、ProcessingInstruction、CDATASection、EntityReference 类型。

标准属性：id, className, title, lang, dir
```
<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr" data-customer-attr="customer"></div> 
```
```js
let div = document.getElementById("myDiv");
alert(div.tagName); // "DIV"

// 这个元素中的所有属性都可以使用下列 JavaScript 代码读取：
let div = document.getElementById("myDiv"); 
alert(div.id); // "myDiv" 
alert(div.className); // "bd" 
alert(div.title); // "Body text" 
alert(div.lang); // "en" 
alert(div.dir); // "ltr"

// getAttribute() 可以获取标准属性也可以获得自定义属性。主要用于取得自定义属性的值。
alert(div.getAttribute("data-customer-attr")); // "customer" 

// 创建新元素
document.createElement('div')
```

# Attr 类型
属性是存在于元素 attributes 属性中的节点。Attr 节点具有以下特征：
- nodeType 等于 2
- nodeName 值为属性名；
- nodeValue 值为属性值；
- parentNode 值为 null；
- 在 HTML 中不支持子节点；
```js
let attr = document.createAttribute("align"); 
attr.value = "left"; 
element.setAttributeNode(attr); 
alert(element.attributes["align"].value); // "left" 
alert(element.getAttributeNode("align").value); // "left" 
alert(element.getAttribute("align")); // "left"
```

# Text 类型
包含按字面解释的纯文本，也可能包含转义后的 HTML 字符，但不含 HTML 代码。
- nodeType 等于 3；
- nodeName 值为"#text"；
- nodeValue 值为节点中包含的文本；
- parentNode 值为 Element 对象；
- 不支持子节点。

```js
// 创建新文本节点
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element);

// 合并同胞文本节点
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
let anotherTextNode = document.createTextNode("Yippee!"); 
element.appendChild(anotherTextNode); 
document.body.appendChild(element); 
alert(element.childNodes.length); // 2 
element.normalize(); 
alert(element.childNodes.length); // 1 
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"

// 拆分文本节点，与normalize相反
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element); 
let newNode = element.firstChild.splitText(5); 
alert(element.firstChild.nodeValue); // "Hello" 
alert(newNode.nodeValue); // " world!" 
alert(element.childNodes.length); // 2 
```