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
	

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


