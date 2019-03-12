<template>
  <div>
    <l-badge :value="12" class="item"><el-button size="small">评论</el-button></l-badge>
  </div>
</template>

<script>
   import LBadge from './badge.vue'
  export default {
    components:{
      LBadge
    }
  }
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>