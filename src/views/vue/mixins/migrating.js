export default {
  mounted() {
    if(process.env.NODE_ENV === 'production') return;
    if(!this.$vnode) return;
  },
}