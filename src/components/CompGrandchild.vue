<template>
  <div>
    <b>CompGrandchild组件</b>
    <p>age: {{ age }}</p>
    <p>CompGrandchild组件接收的$attrs== {{ $attrs }}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    age: String
  },
  created() {
    console.log(this.$attrs);
  }
};
</script>