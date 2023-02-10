# @vkcyan/storage

## 介绍

​	**强化版localStorage，在get set阶段可自动解析value数据类型。**



## 基本用法

### 安装

```bash
npm i @vkcyan/storage
```

### 使用示例

```js
import { setStorage, getStorage, removeStorage } from '@vkcyan/show-toast'

let info = {
  name:'张三',
  age:20
}

setStorage('data', info)

let data = getStorage('data') // 获取到object类型的info 

removeStorage('data') // 删除缓存值

```

## function

| 方法                   | 返回值 | 方法说明                                      |
| ---------------------- | ------ | --------------------------------------------- |
| setStorage(key, value) | void   | 自动解析value类型，并存储到localStorage       |
| getStorage(key)        | any    | 读取localStorage指定的key，并自动解析类型返回 |
| removeStorage(key)     | void   | 删除localStorage的某一个key                   |





