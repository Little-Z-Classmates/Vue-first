# 这个是一个牛逼的项目
## 很牛逼的项目
### 就问你怕不怕,哈哈哈~~~~用心去感受
### 我是有灵魂的程序员,我的代码优美而且富有诗意
### 丫的,编不下去了~~~
## [ 开源协议 ](https://blog.csdn.net/constzl/article/details/80411788)

### 开发问题 : 运行时 vue 组件中的 created 钩子 中执行了两次
```text
BUG : 原因是index.html 中引入了 两次bundle.js , 就会执行两次代码,因为放在了浏览器内存中执行,会自动加一个bundle.js文件
解决方法 :  去除我们自己的 bundle.js , 用自动加的就行
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
### 开发问题 : 组件之间过渡效果 另一个到的时候,是往下走的
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
### 注意问题 : comment.vue 点击发表时候 数据传入服务器, 调用获取数据方法会覆盖,为了防止数据覆盖, 可以拿到返回值 0,后手动拼接一个对象在评论数组的前面
```javascript
   var cmtObj = { 
       username : "匿名用户",
        add_time : Date.now(),
        content : this.textareaMsg
    }
    this.datalist.unshift( cmtObj )
```
### 注意问题 : 注意全局配置 POST 的emulateJSON
```javascript
Vue.http.options.emulateJSON = true;
```
### 开发问题 : PhtotList.vue 导入mui.js 报错, mui.js 里面三个参数没有使用严格模式,webpack 打包 的bundle.js 中启用了严格模式
```text
把webpack 中严格模式禁用 , 使用插件
```
### 开发问题 : PhtotList.vue 导入mui.js 后, 下面导航栏无法点击 
```text
   解决方法 :   加入
   方法一 :  mui('body').on( 'tap' , 'a' , function(){
                 document.location.href=this.href;
            } )
   方法二 : 与下面导航栏的类名冲突, 可以在App.vue 中提取MUI mui-tab-item类  的样式,修改为咱们自己的类.
```
### 开发问题 : PhtotList.vue 第一次打开这个页面, 无法滚动,必须重新刷新下
```text
   mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
   解决方法 : 放入到 vm 实例中的 mounted(){}钩子函数中去,需要元素被渲染完 到DOM中时候,再在顶部列表使用滚动方法,
   因为第一次去到这个页面, Vue会渲染这些元素,但是再次刷新,根据Vue特性, 就地复用,不用重新渲染,这些个元素早就在页面上,
   所以这个滚动方法能注册到 , 元素上.
```
### 开发问题 : PhtotList.vue : MUI.js 的 Unable to preventDefault inside passive event listener due to target being treated as passive
```text
   这是这个 MUI 内部自带的坑 , 它没根据google 来更新自己这个bug , 这个bug 忽略
```
### 开发问题 : Photo.vue 渲染类别名字的时候, 用v-bind 绑定class , 选中的active 样式,初始化类名是 '全部'才有的
```text
   解决问题 : 用 v-bind 的三元表达式,id为0 绑定 active 类
```
### 开发问题 : Photo.vue Mint 懒加载 没有 加载小图标
```text
   解决问题 : Mint 使用全部导入
```
### 开发问题 : 什么时候用 html , 什么时候用组件
```text
一般vue,就一个 index.html 了
```
### 优化 : 轮播图 提取为组件 
```text
因为这个东西多个组件都需要调用,所以需要封装为组件
作为子组件 , props 里面接受一个 从父组件传过来的 lunbotuList 数组
```
### 开发问题 :轮播图 提取为组件 的时候 , 有些页面需要图片宽高100%, 有些则是只需要高度100%
```text
我们可以给 让 父组件传 一个 属性给 子组件 ,属性值是布尔值, :isfull="true/false"
子组件拿到后, 用这个布尔值 ,传入 操作绑定的 class 属性的 full 样式, 这个是样式就是 宽度是否为100%
```


