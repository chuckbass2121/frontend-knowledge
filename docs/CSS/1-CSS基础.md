# 选择器
## 选择器分类

- 元素选择器
```css
a {}
```

- 伪元素选择器
```css
::before {}
::after {}
```

- 类选择器
```css
.className {}
```

- 属性选择器
```css
[type=radio] {}
```  
- 伪类选择器
```css
:hover {}
```  
- id选择器
```css
#id {}
```  
- 组合选择器
  
  - 后代选择器(以空格 分隔)
    ```css
    div p {}
    ``` 
  - 子元素选择器(以大于 > 号分隔）
    ```css
    div > p {}
    ```  
  - 相邻兄弟选择器（以加号 + 分隔）
    ```css
    div + p {}
    ```  
  - 普通兄弟选择器（以波浪号 ～ 分隔）
    ```css
    div ~ p  {}
    ``` 

- 否定选择器
```css
:not(.link) {}
```  

- 通用选择器
```css
* {}
```

## 选择器权重

## 按选择器分
1. `!important` 优先级最高
1.  ID 选择器（0100）
2.  类选择器 / 伪类选择器 / 属性选择器 （0010）
3.  元素选择器 / 伪元素选择器 / 关系选择器（0001）
4.  通配选择器（0000）

## 按css位置分
```内联样式 > <style>css</style> > 外联样式```


## 选择器查找顺序
浏览器是从右向左解析CSS选择器的，因为速度快。
比如有如下css选择器，浏览器先找 .hello的元素，然后去验证上面是否有div 和 .body的。
```
.body div .hello{
  color:red;
}

<body class="body" id="body">
  <div>
    <a class="hello"></a>
  </div>
</body>
```


## 伪元素 vs 伪类
注意伪元素是双冒号：：，可以显示在页面上的
伪类的单冒号：， 表示一个元素的状态，不可以显示在页面

# 非布局样式
- 字体，字重，颜色，大小，行高
- 背景，边框
- 滚动，换行
- 粗体，斜体，下划线
- 其他
- 
## 非布局样式之字体
- 字体族
  - 衬线字体：serif 例如，宋体
  - 非衬线字体：sans-serif 例如，黑体
  - monospace：等宽字体
  - cursiv：手写体
  - fantasy：花体

- 多字体fallback
  
  字体fallback就是当你指定的字体不存在时，系统会自动选择一个。

  ```css
    .chinese {
      font-family: "PingFang SC", "Microsoft Yahei", monospace;
    }
  ```

  "PingFang SC", "Microsoft Yahei" 是具体的字体名称，要加引号。
  
  Monospace 是字体族，不要加引号，如果前面两个字体找不到的话，系统会从Monospace 字体族中找一个具体字体显示。


- 网络字体，自定义字体
  ```css
    @font-face {
      font-family: "IF";
      src: url("./IndieFlow.ttf"); 
    }

    .custome-font {
      font-family: IF;
    }
  ```

  **note**: url("./IndieFlower.ttf")可以是本地字体，也可以是网络字体。如果url("./IndieFlower.ttf"); 是网络上的字体要注意跨域的问题。

- iconfont
  
  原理是使用自定义字体显示成图标的样子。
  https://www.iconfont.cn/

## 非布局样式之行高
## 非布局样式之背景
## 非布局样式之边框
## 非布局样式之滚动
## 非布局样式之文本折行
## 非布局样式之装饰属性