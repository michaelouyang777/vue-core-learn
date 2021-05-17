<template>
  <div>

  </div>
</template>
<script>
export default {
  watch: {
    arr: {
      handler(newVal) {
        console.log(newVal)
      }
    }
  },
  data() {
    return {
      arr: [{
        name: 'Michael',
        age: 15
      }]
    }
  },
  created() {
    setTimeout(() => {
      this.arr[2] = {
        name: 'amy',
        age:12
      }
    }, 2000)
  }
}
</script>