const MyPlugin = {
  install(Vue,options){
    Vue.prototype.$const = {
      name:'lhb'
    } ;
    Vue.prototype.$utils={
      do:() => {
        alert('弹出框');
      }, 
    } 
    Vue.directive('focus',{
      inserted:function(el){
        el.focus()
      }
    })
  }
}

export default MyPlugin;