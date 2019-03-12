<template>
  <div>
    <input v-model="value" type="text">
  </div>
</template>

<script>
  import emitter from '@/views/vue/mixins/emitter';
  export default {
    mixins:[emitter],
    data() {
      return {
        value:''
      }
    },
    watch:{
      value(val){
        console.log('输入');
        this.dispatch('DIV','el.form.change',[val])
      }
    }
  }
</script>

<style scoped>

</style>