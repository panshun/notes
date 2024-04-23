# 1.初识Pinia

## Pinia官网

英文官网：https://pinia.vuejs.org/

中文网站：https://pinia.web3doc.top/

gitHub：

## Pinia是什么

pinia 是Vue的集中式状态管理器，它允许跨页面/组建共享状态。

## Pinia与Vuex的区别

pinia是vuex的替代者，以后为vue的官网存储库。pinia 相当于vuex的优点。

- vue2和vue3都支持，pinia中只有state、getter、action，抛弃了vuex中的mutation；
- pinia中的action支持同步和异步，vuex不支持；
- 支持typescript
- 无需创建模块的嵌套，vuex中数据过多会通过分模块的方式进行管理，pinia中的每个模块都是独立的，互不影响；
- pinia体积非常小；
- pinia支持插件方式扩展自身功能；
- pinia支持服务端渲染。

# 2.Pinia使用安装

##  安装

可以使用你自己喜欢的包管理工具安装：

```
yarn add pinia
# // 或者使用npm
npm install pinia

```

## 使用

### 引入

创建一个pinia（根存储），并将其传递给应用实例：

```js
// vue3中main中
import {createAPP} from 'vue'
import {createPinia} from 'pinia'
import APP from './APP.vue'

const pinia = createPinia()
const app = createAPP(APP)

app.use(pinia)
app.mount('#app')
```

```js
// vue2中main中
import {createPinia, PiniaVuePlugin}  form 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
  el: '#app',
  // 其他选项...
  // ...
  // 注意同一个 `pinia` 实例可以在多个 Vue 应用程序中使用
  // 同一个页面
  pinia,
})
```

### 创建store

可以随意创建任意都个store文件，创年文件用`defineStore()`方法，第一个参数为storeId，需要保持全局唯一性，第二个参数接受一个函数或者一个对象，包括`state`、`getters` 、`action`三个选项。(`defineStore()` accepts two distinct values for its second argument: a Setup function or an Options object.)

```typescript
import {defineStore} from 'pinia'

// main is the name of the store, it is unique across your aplication
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore('main',{
  // a function that returns a new fresh state 变量
  state: () => {
    return {
      count: 0,
    	name: 'store',
      isAdmin: false
    }
	},
  // optional getters 计算属性
  getters: {
    // getters receive the state as frist parameter
    doubleCounter: (state)=> {
      state.count*2
		},
    // use getters in other getters
    doubleCounterPlusOne():number {
      return this.doubleCounter + 1
		}
	},
  // optional getters 方法
  actions: {
    reset() {
      // 在store中“this”指的是这个store这个实例
      this.count = 0
    }
	}
})
```

### 组件中使用

```typescript
// 引入store实例
import useMainStore from '@/store/main'
// 提取store中的属性为响应式
import storeToRefs from 'pinia'
// 引入响应
import {toRefs} from 'vue'
export default defineComponent({
  setup() {
    const main = useMainStore()
    // extract specific store properties 从store中提取特定的属性
    //  ❌ const {counter, doubleCounter} = main
    // 'count'和' doubleCount '是响应式引用 或者使用 toRefs
    const {count, doubleCounter} = storeToRefs(main)
    const {count, doubleCounter} = ToRefs(main)
    
    // 方法可以直接道出
    const { reset } = main
    return {
      // 提供对模版中整个储存的访问
      main,
      // 仅仅提供对特定状态和getter的访问
      count,
      doubleCounter，
      reset
    }
	}
})
```

## API风格的选择

### 选项式（Option Stores）

`option Stores`  和vue的 的`option API` 类似，我们可以传递一个带有`state`、`action`、`getters` 的Options对象。

```js
export const useCounterStore = defineStroe('counter', {
	state: () => ({
		count: 0,
		name: 'Eduardo'
	}),
	getters: {
		doubleCount: (state) => {
			state.count * 2
		}
	},
	action: {
		increment() {
			this.count ++ 
		}
	}
})
```

You can think of `state` as  the `data` of the store, `getters` as the`computed ` properties of the store, and `action ` as the `methods`.

Option Store should feel intuitive (直观) and simple to get started with.

### 组合式 （Setup Stores）

There is also another possible syntax to define stores, Similar to the Vue Composition APIs <font color=#FF0000 >setup function</font>, we can pass in a function that defines reactive properties and methods, and returns an Object with the properties and methods we want to expose（暴露）。

```js
export const useCounterStore = defineStore('counter', () => {
  // 用ref()变成属性状态
	const count = ref(0)
	const name = ref('Eduardo')
  // 用computed 变成getters	
	const doubleCount = computed(() => {
		count.value * 2
	})
  // 用function 变成 action
	function increment() {
    count.value ++ 
	}
})
```

Setup stores bring a lot more flexibility than option stores

### 如何选择

As with (就像)Vues composition API and Opton API, Pick the one that you feel the most comfortable with, if you are not sure, try Option Stores first.

# 3.State的使用

state 是store的核心，在pinia中state被定义为一个返回初始状态的函数。

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: 'Eduardo',	
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})

```

## state取值

```js
// 组件中
import useUserStore form '@/store/user'

const user = useUserStore()
// 取值
user.name
// 修改
user.name = 'new value'
```

## state的响应式解构

```js
// 组件中
import useUserStore form '@/store/user'
// 引入toRefs函数或者使用storeToRefs
import {toRefs} from 'vue'
// 或
import storeToRefs from 'pinia'
const user = useUserStore()
const {name, count，isAdmin} = toRefs(user)
// 或
const {name, count, isAdmin} = storeToRefs(user)
// 取值
user.name
// 修改
user.name = 'new value'
```

## state的重置

```js
// 选项式API下的state重置
const store = useStore()
store.$reset()
```

```js
// setup api下不能使用 $reset 方法
// 会报错： Store "xxx" is built using the setup syntax and does not implement $reset()
 
 
// 需要在main.ts文件中给pinia设置$reset
import { createPinia } from 'pinia'
 
const app = createApp(App)
const pinia = createPinia();
    
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState))
  }
})
 
app.use(pinia)
```

## state的修改

除了用 `store.count++` 直接改变 store，你还可以调用 `$patch` 方法。它允许你用一个 `state` 的补丁对象在同一时间更改多个属性：

```js
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})

```

同时，$patch` 方法也接受一个函数来组合方式实现变更。

```js
store.$pathc((state) => {
	state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

两种变更 store 方法的主要区别是，`$patch()` 允许你将多个变更归入 devtools 的同一个条目中。同时请注意，**直接修改 `state`，`$patch()` 也会出现在 devtools 中**，而且可以进行 time travel (在 Vue 3 中还没有

## state的替换

```js
// this doesn't actually replace `$state`
store.$state = { count: 24 }
// it internally calls `$patch()`:
store.$patch({ count: 24 })

```

## state订阅更新（$subscribe使用）

```js
import useStore from '@/stores'
 
const store = useStore()
store.$subscribe((mutation, state) => {
    // mutation：是记录state变化信息的对象
    // state：是store的state对象
    console.log(mutation, state)
    
    // import { MutationType } from 'pinia'
    mutation.type // 'direct' | 'patch object' | 'patch function'
    
    // 与 cartStore.$id 相同，
    mutation.storeId // 'cart'
    
    // 仅适用于 mutation.type === 'patch object'
    mutation.payload // 补丁对象传递给 to cartStore.$patch()
  
    // 每当它发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('cart', JSON.stringify(state))
})
```

注意事项：

$subscribe() 与 watch()的区别

$subscribe是$patch执行就会触发（无论值是否真的改变了），而watch是监听对象（值）改变才会触发。

# 4.getters的使用

`getters`可以理解为`store`中`state`计算属性

```javascript
采用setup aoi的形式（组合式api）
 
定义：
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 
export const userStore = defineStore('user', () => {
  const nick = ref('小明');
  const codes = ref([80]);
 
  // 此处即为getters
  const msg = computed(() => {
    return '昵称：' + nick.value + ', 得分：' + codes.value
  })
  
  return { nick, codes, msg }
})
 
使用：
import { userStore } from '@/stores/user';
import { toRefs } from 'vue';
const user = userStore()
const { nick, codes, msg } = toRefs(user);
 
<div>{{msg}}</div> // 此处为 pinia中的msg信息
```

# 5.action的使用

`actions`可以理解为`store`中的`methods`（也就是函数）

```javascript
采用setup aoi的形式（组合式api）
 
定义：
import { ref } from 'vue'
import { defineStore } from 'pinia'
 
export const userStore = defineStore('user', () => {
  const codes = ref(58);
 
  // 定义actions
  function renderCode () {
    codes.value = Math.floor(Math.random() * 100)
  }
  return { codes, renderCode }
})
 
使用：
import { userStore } from '@/stores/user';
import { toRefs } from 'vue'
const { renderCode } = toRefs(userStore());
<button @click="renderCode">随机数字</button>
```

# 6.pinia持久化储存

使用插件pinia-plugin-persistedstate：[pinia-plugin-persistedstate - npm (npmjs.com)](https://www.npmjs.com/package/pinia-plugin-persistedstate)

```javascript
使用：
main.ts
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
 
 
具体的stores.ts文件
方法一：
直接设置 `persist: true` 即可
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 
export const userStore = defineStore('user', () => {
  const nick = ref('小明');
  const codes = ref(58);
 
  const msg = computed(() => {
    return '昵称：' + nick.value + ', 得分：' + codes.value
  })
  const moreMsg = computed(() => {
    return msg.value + ' | ' + (codes.value >= 60 ? '合格' : '不合格')
  })
 
  function renderCode() {
    codes.value = Math.floor(Math.random() * 100)
  }
  return { nick, codes, msg, moreMsg, renderCode }
}, {
  persist: true
})
 
方法二：
具体设置
import { defineStore } from 'pinia'
 
export const useStore = defineStore('store',() => {
  const nick = ref('小明');
  const codes = ref(58);
  return { nick, codes }
}, {
     persist: {
        storage: sessionStorage, // 设置存储位置，sessionStorage浏览器关闭就会清空，默认是localStorage
        paths: ['someState'],  // 需要持久话存储的数据
     },
})
```

# 组件外的store

## 单页面应用

在用 `app.use(pinia)` 安装 pinia 插件后，对 `useStore()` 的任何调用都会正常执行：

```javascript
import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()

```

## Vue Router 的导航守卫中

```javascript
import { createRouter } from 'vue-router'
import 
const router = createRouter({
  // ...
})

// ❌ 由于引入顺序的问题，这将失败
const store = useStore()

router.beforeEach((to, from, next) => {
  // 我们想用这里的 store
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  // ✅ 这样做是可行的，因为路由器在安装完之后就会开始导航。
  // Pinia 也将被安装。
  const store = useStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})

```



