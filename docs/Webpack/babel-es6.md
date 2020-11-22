# babel-es6

- babel-loader -> babel和webpack通信的桥梁 
- @babel/core -> babel的核心包，作用是把es6转成 -> AST -> ES5
- @babel/preset-env -> 转 es6+语法 
- @babel/polyfill -> 转 es6+新api 

- @babel/plugin-transform-runtime -> 转译语法层时**提取**辅助函数，解决转译api层出现的全局变量污染
- @babel/runtime -> babel 转es6+语法时的辅助函数
- @babel/runtime-corejs3 -> babel 转es6+新api时的corejs实现

```js
rules: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugin: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        corejs: 3,
                    },
                ],
            ],
        },
    },
  },
];

```


1. 转 es6+语法 
@babel/preset-env

babel 是通过 plugin 和 preset 来转换es6代码的
plugin 是一个一个的
preset 是多个plugin的集合

在转译时babel会在每个文件中加入很多辅助函数，
可以使用 @babel/plugin-transform-runtime 来解决。
引用 @babel/runtime 中提供的函数


 
2. 转 es6+新api 
@babel/polyfill 

@babel/polyfill 默认会把所有es6的新api打包
可以通过配置useBuiltIns: 'usage'，来只打包代码中用的新api

@babel/polyfill 污染全局变量，从新定义了promise等。
可以使用 @babel/plugin-transform-runtime 来解决
引用 @babel/runtime-corejs3 中提供的函数

