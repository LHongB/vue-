<template>
  <div class="child">
    <!-- // 具名插槽 -->
    <slot name="up"></slot>
    <h3>这里是子组件</h3>
    <!-- // 具名插槽 -->
    <slot name="down"></slot>
    <!-- // 匿名插槽 -->
    <slot>11111</slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>