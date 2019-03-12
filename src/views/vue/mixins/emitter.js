function broadcast(componentName,eventName,params){
  
}

export default{
  methods: {
    dispatch(componentName,eventName,params){
      console.log(componentName);
      console.log(eventName);
      console.log(params);
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)){
        parent = parent.$parent;
        console.log(parent);
        if(parent){
          name = parent.$options.componentName;
        }
      }
      if(parent){
        parent.$emit.apply(parent,[eventName].concat(params));
      }
    },
    broadcast(componentName,eventName,params){
      broadcast.call(this.componentName,eventName,params);
    }
  },
}