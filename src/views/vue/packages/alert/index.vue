<template>
  <div>
    <l-alert title="不可关闭的" type="success" ></l-alert>
    1111
  </div>
</template>

<script>
  import hello from '@/views/vue/mixins/hello'
  import emitter from '@/views/vue/mixins/emitter'
  import LAlert from './alert.vue'
  export default {
    components:{
      LAlert
    },
    mixins:[hello,emitter]
    
  }
</script>

<style lang="scss" scoped>

</style>