# 关于项目
```
-[Y] 关于接口跨越问题；请安装chrome 跨越插件；或者通过exporess 做代理
-[Y] 本地demo主要应用了vue-cli 一个很强大工具
		npm install -g vue-cli
-[Y] 通过 vue-cli 去初始化创建一个项目比如  vue-elong
		vue init webpack vue-elong  ===> 其中  webpack是可以利用的一个构建工具  可以通过    
		vue-list 来查看 vue-elong 是你自己的项目名
-[Y] 通过上面的创建步骤你可以接着执行如下代码
		cd vue-elong // 进入项目目录
		npm install  // 安装一些node 包工具
		npm run dev  // 启服务
```
# vue-elong

> a vue object about elong for myself

## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目中增加的一些插件以及其他一些应用
1. 数据的请求  安装了vue-resource 然后在项目里面直接this.$http.get...
	[vueResource](https://github.com/pagekit/vue-resource)
	[某博客](http://www.cnblogs.com/axl234/p/5899137.html)

	```
		在main.js中
			import vueResource from 'vue-resource'
			Vue.use(vueResource)
		然后在业务里面直接this.$http.get().then(success,error）

	```
2. swiper 插件下面有说明 不做介绍
3. vue-router 路由的组件

## 在项目中遇到的问题汇总
  * swiper组件的实现  有三种方法
	  ```
	   -[Y] 直接 npm install swiper  直接引用；在某个生命周期中直接初始化即可;

	   -[Y]直接 npm install vue-awesome-swiper 然后引入  swiper swiper-slide ;根据先关情况即可(https://blog.csdn.net/xiaogezl/article/details/69676812)

	   -[N] 尚未解决 : vue-swiper
	  ```
* 路由器的跳转router-link
 	```
	 	<!-- 字符串 -->
	  <router-link to="home">Home</router-link>
	  <!-- 渲染结果 -->
	  <a href="home">Home</a>

	  <!-- 使用 v-bind 的 JS 表达式 -->
	  <router-link v-bind:to="'home'">Home</router-link>

	  <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
	  <router-link :to="'home'">Home</router-link>

	  <!-- 同上 -->
	  <router-link :to="{ path: 'home' }">Home</router-link>

	  <!-- 命名的路由 -->
	  <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

	  <!-- 带查询参数，下面的结果为 /register?plan=private -->
	  <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
 	```

* 在vue里面注入全局方法；module.exports  或者 export default写法已经不能满足；可以在js方法里写入以下内容  ：
	```
	export.install = function ( Vue, options){
		Vue.prototype.store = new store()  // store为自己写的方法
	}
	然后在main.js中写入  :
	import store from './store';
	Vue.use(store)....
	这样在业务代码中就可以直接使用 this.store  无需在每个业务里面单独引入；
	```



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
