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
### 注意 : 可以改进入ip地址
```text
  "scripts": {
    "dev2": "webpack-dev-server --open --port 3002 --contentBase src --host 172.16.18.1 "
  }, 可以改进入ip地址, --host
```
### 注意 : 把mui numbox,也就是(数字输入框)封装成组件
```text
MUI 中明确表示 : mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
1. import 导入 MUI 的 JS
2. 在export default 中 mounted 钩子函数写入 : mui(Selector).numbox(),
但是我在GoodsInfo 中导入了 全部的 Mui-ui了
```
### 注意 : 组件中可以操作界面上的任意, 但是Vue不推荐, 购物车图标位置可以通过DOM拿到
```text
!!!!! 在组件中 操作DOM , 可以拿到任何你想拿到的 DOM ,但 Vue不推荐操作DOM, 但是不涉及到 Vue数据绑定之类的 就可以
```
### 开发问题 : 
##### 1.在 GoodsInfo 上一层中打开GoodsInfo,库存数量无法显示,需要刷新一下
![](F:\06-Front-end-Job-class\myLearn\vue\vue_code\Snipa.png)

```text
原因 :  注册的时候 选择器没加 ‘.'
```
### 开发问题 : 小球点击问题,多次点击就乱跳动
```text
我把点击事件,加到 afterEnter事件里面就不行,因为会秒执行,求解?
需要加到 leaveEnter事件里面 
原因： afterEnter 执行时机是 enter执行之后执行，enter已经执行之后，但是此时 动画还没完成， 但是enter 事件已经完成，所以再afterEnter中更换状态不行，需要再动画结束的时候更换状态，——> leaveEnter 中 
```
### 开发问题 : 想数据异步传入 子组件 GoodsInfo 的 库存数量
```text
用 watch 监听 
```
### 开发细节 : goodsinfo 的 数据 传回父组件 GoodsInfo 
```text
思路 : 每次点击 加入购物车, 应该会拿到一个 实时的 子组件数字框 的对应数值
1. 可以定义一个data数据 num, 初始值为1, 只要 数字框的不进行 '+' '-' 操作,一直为 1,加入购物车之间中操作的应该是 data的num数据
2. 只要数字框进行加减了, 父组件定义一个方法 加一个参数, 传回子组件, 子组件进行调用, 传回变更的值
2.1 子组件拿到了父组件的方法, 执行时机为 值改变的时候, 注册的是input元素的 onchange 事件,
2.2 得到了执行时机, 可以通过给 这个input元素 加一个 ref属性,拿到DOM, 得到input 元素的 value 属性的值,进行操作,完成!!
```
### 开发细节 : store 数据存储到 本地存储中 localStorage
```text
1. 存储时机 : 在每次添加到 shopCar 之后, 就把 添加之后的shopCar 传入到 localStrorage中
2. 获取时机 : 因为main.js 是执行每次页面打开都会执行的 脚本文件, 放在main.js 中最适合不过
```
### 开发细节 : ShopcarContainer 
```text
<mt-switch v-model="IdAndSelected[item.id]"></mt-switch>
从 store 中得到 "id : 开关值" 键值对的对象,到 ShopcarContainer 中,
思考怎么同步上去 : 因为已经存储到咱们的data 中的 IdAndSelected 数据中, 
mt-switch 的v-model 数据绑定,从item中得到id,再取值,IdAndSelected[item.id],就得对应的数据
```
### 开发细节 : mt-switch 有值改变事件
```text
change 事件就可以对应的修改 store 里面的数据
```





