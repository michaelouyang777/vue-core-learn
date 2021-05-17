<template>
  <div>
    <CompParent />
  </div>
</template>
<script>
export default {
  components: {
    // CompB: () => import('./components/CompB.vue'),
    CompParent: () => import('./components/CompParent.vue'),
  },

}
</script>

<template>
  <div>
    <p v-on="{click: one, mousemove: two}">v-on绑定多个方法</p>
  </div>
</template>
<script>
export default {
  methods: {
    one(){
      alert(1)
    },
    two(){
      alert(2)
    }
  },
}
</script>