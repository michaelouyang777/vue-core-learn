<template>
  <div>
    1
    <CompB />
  </div>
</template>

<script>

export default {
  
  components: {
    CompB: () => import('./CompB.vue')
  },
  data() {
    return {
    };
  }
}
</script>