##安装
npm i -g anydoor

##使用方法
anydoor -p 9999

##原理是在 package.json 中的 bin 字段指定可执行文件的路径
比如 
```
"bin": {
  "anydoor": "./bin/anydoor"
}
```

在项目根目录下建立 bin 文件夹，
bin 文件夹下建立 anydoor 文件

在 anydoor 中 
```j
#！/usr/bin/env node
require('../src/index')
```

#当全局安装 anydoor 时，会把 anydoor 的包加到全局的 node_modules 中
同时把这个命令加在 C:\Users\userName\AppData\Roaming\npm 中
比如是 anydoor 和 anydoor.cmd

anydoor 和 anydoor.cmd 就是到 anydoor 的包中去执行。
