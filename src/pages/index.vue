<template>
  <div class="wrap" style="padding: 0 32px;">
    <div> model: {{ user?.userName }} </div>
  </div>
  <!-- <img src="@/images/bg1.png" alt=""> -->
  <!-- <img src="/logo.png" alt=""> -->
  <!-- svg 组件能力 -->
  <fes-icon :type="iconName" :spin="true" />
  <!-- <img src="@/icons/group403.svg" alt=""> -->
  <button @click="addCount">count++</button>
  <p>pinia count: {{ count }}, doubleCount: {{ doubleCount }}</p>
  <test-tres />
</template>

<script setup>
import { defineRouteMeta, useModel } from '@fesjs/fes'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/store/main'
import testTres from '@/components/test-tres.vue'

const iconName = ref('group271')
const { user } = useModel('user')


const store = useStore()
const { count, doubleCount } = storeToRefs(store)
// console.log( count.value, doubleCount.value, increment )

const addCount = () => {
  // store.increment()
  // count.value ++
  store.$patch(state => {
    state.count ++
  })
}

defineRouteMeta({
  name: 'index',
  title: '首页',
  // 'keep-alive': true,  // keep-alive
  // layout: {    // 是否需要layout
  //     navigation: null,
  // },
});
</script>

<style lang="scss" scoped>
.wrap{
  p{
    color: red;
  }
  div{
    color: green;
  }
}
</style>>