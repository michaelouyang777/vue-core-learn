<template>
  <div class="index">
    <!-- 调用二次封装的组件 -->
    <MyRadio
      v-model="radio"
      @change="handleChange"
      >
      <el-radio :label="'A'">备选项A</el-radio>
      <el-radio :label="'B'">备选项B</el-radio>
      <el-radio :label="'C'">备选项C</el-radio>
    </MyRadio>
  </div>
</template>
<script>
export default {
  components: {
    MyRadio: () => import('./table/my-radio.vue')
  },
  data () {
    return {
      radio: 'C'
    }
  },
  methods:{
    handleChange() {
      console.log('handleChange')
    }
  },
  created() {
    this.radio = 'B'
  }
}
</script>
<style scoped>

</style>