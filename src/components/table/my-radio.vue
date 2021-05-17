<template>
  <!-- 二次封装的组件 -->
  <div>
    <el-radio-group v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-radio-group>
  </div>
</template>
<script>
export default {

}
</script>