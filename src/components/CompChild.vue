<template>
  <div>
    <p>子组件</p>
    {{ title }}
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    handleClick() {
      this.$emit('update:title', '子组件的数据')
    }
  }
}
</script>