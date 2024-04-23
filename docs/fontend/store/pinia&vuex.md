# Pinia&Vuex的区别

## 安装方式

- pinia

```javascript
npm install pinia
# or
yarn add pinia

```

- vuex

```javascript
npm install vuex
# or
yarn add vex
```

## 挂载方式

### pinia

- main.js引入

```javascript
import { createAPP } form "vue"
import APP form "./APP.vue"
import {createPinia } form "pinia"
const pinia = createPinia()

const app = createAPP()
app.use(APP)
app.use(pinia)
app.mount("#app")
```

- src下创建store文件夹

在src文件夹下创建store/user.js

```javascript
import { definedStore } form "pinia"

export const useUserStore = defineStore('user', {
  // state 被定义为返回一个初始状态的函数
  state: () => {
    return {
      // 用于存储数据
      userName: '张三'
    }
  },
  getters: {
    // 计算属性
	},
  action: {
    // 同步和异步方法
  }
})
```



- 组件中使用

```xml
<template>
  <div></div>
</template>
<script>
	import {useUserStore } form "@/store/user"
  
  let user = useUserStore()
  console.log(user.userName) // 张三
</script>
```

### vuex

- 新建vuexStore/index.js

```js
import {createStore} form 'vuex'

export default createStore({
	// 全局state，类似于vuex的data
	state() {
		return {
      vuexmsg: "hello vuex",
      name: "xiaoyue",
    }
	},
  // 修改state的函数
  mutations: {
    
  },
  // 提交的mutations可以包含异步操作
  actions: {
    
  },
  // 类似于vuex中的计算属性
  getters: {
    
  },
  // 将store分割成模块（module）,应用较大时使用
  modules: {
	
  }
  
  
})
```

- main.js引入

```js
import {createAPP } form 'vue'
import APP from './App.vue'
import store form '@/vuexStore/index'
const app = createAPP()
app.use(APP)
app.use(store)
app.mount('#app')
```

- App.vue中使用

```xml
<template>
  <div></div>
</template>
<script setup>
import { useStore } from 'vuex'
let vuexStore = useStore()
console.log(vuexStore.state.vuexmsg); //hello vuex
</script>

```

从上面的挂载方式可以看出来，pinia中缺少了mutations和modules，pinia不必在以嵌套的方式进行引入，因为他的每个store便是一个模块，storeA，storeB….,我们在使用vuex每次修改state中的值，都需要调用一次mutations里的修改函数，	因为vuex需要追踪数据的变化，写起来比较繁琐。而pinia中不需要mutations，同步异步都可以在actions中完成。

## 修改状态

### vuex

vuex在组件中直接修改state

```xml
<template>
  <div></div>
</template>
<script setup>
import { useStore } from 'vuex'
let vuexStore = useStore()
vuexStore.state.vuexmsg = "hello vuex"
</script>
```

可以直接在组件中修改state的值，而且是响应式的，但是如果这样做，vuex不能记录每一次state的变化记录，影响我们的调试。当vuex开启严格模式的时候，直接修改state会抛出错误，所以官方建议开启严格模式，所有state的变化都在vuex的内部进行，在mutations中修改，例如vueStore/index.js :

```js
improt {createStore} form 'vuex'

export default createStore({
	strict: true,
  state() {
		return {
      vuexmsg: "hello vuex",
		}
  },
  // 修改state函数
  mutations: {
    setVuexMsg(state, data) {
      state.vuexmsg = data;
    },
  },
  //提交的mutation可以包含任意异步操作
  actions: {},

  //类似于vue中的计算属性
  getters: {},

  //将store分割成模块（module）,应用较大时使用
  modules: {},
})
```

当我们需要修改vuexmsg的时候需要提交setVuexMsg方法，如App.vue

```vue
<template>
  <div>{{ vuexStore.state.vuexmsg }}</div>
</template>
<script setup>
import { useStore } from 'vuex'
let vuexStore = useStore()
vuexStore.commit('setVuexMsg', 'hello vuex3')
console.log(vuexStore.state.vuexmsg) //hello vuex

</script>

```

或者我们可以在actions中进行提交mutations修改state:

```js
import { createStore } from "vuex";
export default createStore({
  strict: true,
  //全局state，类似于vue种的data
  state() {
    return {
      vuexmsg: "hello vuex",
    }
  },

  //修改state函数
  mutations: {
    setVuexMsg(state, data) {
      state.vuexmsg = data;
    },
  },

  //提交的mutation可以包含任意异步操作
  actions: {
    async getState({ commit }) {
      //const result = await xxxx 假设这里进行了请求并拿到了返回值
      commit("setVuexMsg", "hello juejin");
    },
  }
});

```

组件中使用dispatch进行分发actions

```vue
<template>
  <div>{{ vuexStore.state.vuexmsg }}</div>
</template>
<script setup>
import { useStore } from 'vuex'
let vuexStore = useStore()
vuexStore.dispatch('getState')

</script>

```

一般来说，vuex中的流程是首先actions一般放异步函数，拿请求后端接口为例，当后端接口返回值的时候，actions中会提交一个mutations中的函数，然后这个函数对vuex中的状态（state）进行一个修改，组件中再渲染这个状态，从而实现整个数据流程都在vuex内部进行便于检测。直接看图，一目了然





![图片 2](./images/图片%202.png)











### pinia

- 直接修改

  相比于Vuex，Pinia是可以直接修改状态的，并且调试工具能够记录到每一次state的变化，如App.vue

```vue
<template>
  <div>{{ piniaStoreA.piniaMsg }}</div>
</template>
<script setup>
import { storeA } from '@/piniaStore/storeA'
let piniaStoreA = storeA()
console.log(piniaStoreA.piniaMsg); //hello pinia

piniaStoreA.piniaMsg = 'hello world'
console.log(piniaStoreA.piniaMsg); //hello world

</script>

```

- $patch

使用$patch方法可以修改多个state中的值,比如我们在piniaStore/storeA.js中的state增加一个name

```js
import { defineStore } from "pinia";

export const storeA = defineStore("storeA", {
  state: () => {
    return {
      piniaMsg: "hello pinia",
      name: "zhangsan",
    };
  },
  getters: {},
  actions: {},
});

```

然后我们在App.vue中进行修改这两个state

```js
import { storeA } from '@/piniaStore/storeA'
let piniaStoreA = storeA()
console.log(piniaStoreA.name); //zhangsan
piniaStoreA.$patch({
  piniaMsg: 'hello juejin',
  name: 'daming'
})
console.log(piniaStoreA.name);//daming

```

当然也是支持修改单个状态的如

```js
piniaStoreA.$patch({
  name: 'daming'
})
```

$patch还可以使用函数的方式进行修改状态

```js
import { storeA } from '@/piniaStore/storeA'
let piniaStoreA = storeA()
cartStore.$patch((state) => {
  state.name = 'daming'
  state.piniaMsg = 'hello juejin'
})


```

- 在actions中修改

不同于Vuex的是，Pinia去掉了mutations，所以在actions中修改state就行Vuex在mutations修改state一样。其实这也是我比较推荐的一种修改状态的方式，就像上面说的，这样可以实现整个数据流程都在状态管理器内部，便于管理。

在piniaStore/storeA.js的actions添加一个修改name的函数

```js
import { defineStore } from "pinia";
export const storeA = defineStore("storeA", {
  state: () => {
    return {
      piniaMsg: "hello pinia",
      name: "zhang san",
    };
  },
  actions: {
    setName(data) {
      this.name = data;
    },
  },
});

```

组件App.vue中调用不需要再使用dispatch函数，直接调用store的方法即可:

```js
import { storeA } from '@/piniaStore/storeA'
let piniaStoreA = storeA()
piniaStoreA.setName('daming')
```

- 重置

Pinia可以使用$reset将状态重置为初始值

```js
import { storeA } from '@/piniaStore/storeA' 
let piniaStoreA = storeA()
piniaStoreA.$reset()
```

## Pinia解构(storeToRefs)

当我们组件中需要用到state中多个参数时，使用解构的方式取值往往是很方便的，但是传统的ES6解构会使state失去响应式，比如组件App.vue,我们先解构取得name值，然后再去改变name值，然后看页面是否变化

```js
<template>
  <div>{{ name }}</div>
</template>
<script setup>
import { storeA } from '@/piniaStore/storeA'
let piniaStoreA = storeA()
// 此时通过ES6解构出来的会失去响应式
let { piniaMsg, name } = piniaStoreA
// 使用pinia提供的storeToRefs会将解构出来的数据带有响应式
let { piniaMsg, name } = storeToRefs(piniaStoreA)
piniaStoreA.$patch({
  name: 'daming'
})

</script>

```

## getters

其实Vuex中的getters和Pinia中的getters用法是一致的，用于自动监听对应state的变化，从而动态计算返回值(和vue中的计算属性差不多),并且getters的值也具有缓存特性,

### pinia

```js
import { defineStore } from "pinia";

export const storeA = defineStore("storeA", {
  state: () => {
    return {
      count1: 1,
      count2: 2,
    };
  },
  getters: {
    sum() {
      console.log('我被调用了!')
      return this.count1 + this.count2;
    },
  },
});


```

### vuex

Vuex中的getters使用和Pinia的使用方式类似，就不再进行过多说明,写法如下vuexStore/index.js

```js
import { createStore } from "vuex";

export default createStore({
  strict: true,
  //全局state，类似于vue种的data
  state: {
    count1: 1,
    count2: 2,
  },

  //类似于vue中的计算属性
  getters: {
    sum(state){
      return state.count1 + state.count2
    }
  }


});


```

## modules

如果项目比较大，使用单一状态库，项目的状态库就会集中到一个大对象上，显得十分臃肿难以维护。所以Vuex就允许我们将其分割成模块（modules），每个模块都拥有自己state，mutations,actions...。而Pinia每个状态库本身就是一个模块。

### pinia

Pinia没有modules，如果想使用多个store，直接定义多个store传入不同的id即可，如：

```js
import { defineStore } from "pinia";

export const storeA = defineStore("storeA", {...});
export const storeB = defineStore("storeB", {...});
export const storeC = defineStore("storeB", {...});

```

### vuex

一般来说每个module都会新建一个文件，然后再引入这个总的入口index.js中，这里为了方便就写在了一起

```js
import { createStore } from "vuex";
const moduleA = {
  state: () => ({ 
    count:1
   }),
  mutations: {
    setCount(state, data) {
      state.count = data;
    },
  },
  actions: {
    getuser() {
      //do something
    },
  },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

export default createStore({
  strict: true,
  //全局state，类似于vue种的data
  state() {
    return {
      vuexmsg: "hello vuex",
      name: "xiaoyue",
    };
  },
  modules: {
    moduleA,
    moduleB
  },
});

```

使用moduleA

```js
import { useStore } from 'vuex'
let vuexStore = useStore()
console.log(vuexStore.state.moduleA.count) //1
vuexStore.commit('setCount', 2)
console.log(vuexStore.state.moduleA.count) //2
vuexStore.dispatch('getuser')
```

一般我们为了防止提交一些mutation或者actions中的方法重名，modules一般会采用命名空间的方式 **namespaced: true** 如moduleA：

```js
const moduleA = {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    setCount(state, data) {
      state.count = data;
    },
  },
  actions: {
    getuser() {
      //do something
    },
  },
}
```

此时如果我们再调用setCount或者getuser

```js
vuexStore.commit('moduleA/setCount', 2)
vuexStore.dispatch('moduleA/getuser')
```

