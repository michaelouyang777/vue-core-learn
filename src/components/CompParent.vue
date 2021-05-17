<template>
  <div>
    <p>父组件</p>
    <p>{{ msg }}</p>
    <hr />
    <CompChild :title.sync="msg"></CompChild>
  </div>
</template>

<script>
import CompChild from './CompChild.vue';

export default {
  components: { CompChild },
  data() {
    return {
      msg: '父组件的数据'
    }
  },

}
</script>