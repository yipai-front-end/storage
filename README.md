# @yipai-front-end/storage

## 介绍

​ **强化版 localStorage，在 get set 阶段可自动解析 value 数据类型。**

## 基本用法

### 安装

```bash
npm i @yipai-front-end/storage
```

### 使用示例

```js
import { setStorage, getStorage, removeStorage } from '@yipai-front-end/storage'

let info = {
  name: '张三',
  age: 20,
}

setStorage('data', info)

let data = getStorage('data') // 获取到object类型的info

removeStorage('data') // 删除缓存值
```

## function

| 方法                   | 返回值 | 方法说明                                         |
| ---------------------- | ------ | ------------------------------------------------ |
| setStorage(key, value) | void   | 自动解析 value 类型，并存储到 localStorage       |
| getStorage(key)        | any    | 读取 localStorage 指定的 key，并自动解析类型返回 |
| removeStorage(key)     | void   | 删除 localStorage 的某一个 key                   |
