# 这个是一个牛逼的项目
## 很牛逼的项目
### 就问你怕不怕,哈哈哈~~~~用心去感受
### 我是有灵魂的程序员,我的代码优美而且富有诗意
### 丫的,编不下去了~~~
## [ 开源协议 ](https://blog.csdn.net/constzl/article/details/80411788)

### 开发问题 : 运行时 vue 组件中的 created 钩子 中执行了两次
```text
解决方法 : 还没解决方法
```
### 开发问题 : 组件之间过渡效果屏幕下边 宽度上有滚动条
```text
解决方法 : 在父元素身上加 overfolow-X:hidden , 不能加Y轴的
如果高度会超出页面
```
### 开发问题 : 组件之间过渡效果从同一边进入进出
```text
解决方法 : 把 .v-enter 和 .v-leave-to 分开写
```
### 开发问题 : 组件之间过渡效果 另一个到的时候,是网下走的
```text
解决方法 :.v-leave-to 离开时候加一个 position : absolute
```
### 注意问题 : 全局的路由进行配置
```text
vue-resource 之后配置
Vue.http.options.root = "根路径"
```
### 注意问题 : comment.vue 的数据拼接
```text
!!!  this.datalist = this.datalist.concat(results.body.message)
```





