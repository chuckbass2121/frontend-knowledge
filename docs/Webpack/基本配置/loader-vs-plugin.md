## loader 和 plugin 的区别

*   loader：由于 webpack 只能识别 js，loader 相当于翻译官的角色，帮助 webpack 对其他类型的资源进行转译的预处理工作；
    
    比如图片，css等。
    
*   plugins：plugins 拓展了 webpack 的功能，由于 webpack 运行时会广播很多事件，plugin 可以监听这些事件，然后通过 webpack 提供的 API 来改变输出结果。

    plugin是在打包的某个阶段运行的。相当于生命周期方法

    比如打包前使用 clean-webpack-plugin 除dist目录， 打包后使用 html-webpack-plugin把打包生成的js自动 引入到这个HTML中。

- html-webpack-plugin：
作用是在打包结束后，自动生成一个html文件，并把打包生成的js自动
引入到这个HTML中

- clean-webpack-plugin：
作用是在打包前清除dist目录





