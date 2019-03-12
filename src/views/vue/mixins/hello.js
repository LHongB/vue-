export default {

  created () {
    this.hello();
  },
  methods: {
    hello:function(){
      console.log('hello from mixin!')
    }
  },
};