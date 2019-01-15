<template>
  <div>
	<!-- <div class="bar-wrap">
		<div class="content-subject">
			<ul class="test">
				<li>5675787667858765786576578657865</li>
				<li>5765567576576576567567567587657685678576857685765</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="scroll-box-x">
			<div class="scroll-bar-x"></div>
		</div>
		<div class="scroll-box-y">
			<div class="scroll-bar-y"></div>
		</div>
	</div> -->
  <input type="text" v-focus> 
	<div id="box">
    <div v-drag class="box" v-text="name"></div>
	</div>
  </div>
</template>

<script>
	import  '@/utils/js-pluggs-master/custom-bar/custom-bar.js'
	import focus from '@/directive/focus/index.js'
  export default {
    directives:{
			focus,
			// 自定义指令的名字
			drag:{
				// 钩子函数，被绑定元素插入父节点时调用（父节点存在即可调用，不必存在document中）。
			inserted(el){ //钩子函数-//当被绑定的元素插入到DOM中时。。。。
					let elem = el; //el 触发的DOM元素
					console.log(elem);
					elem.onmousedown = function(e){
						let l = e.clientX - elem.offsetLeft;
						let t = e.clientY - elem.offsetTop;
						document.onmousemove = (e)=>{
							console.log(e);
												elem.style.left = e.clientX - l + 'px';
					elem.style.top = e.clientY - t + 'px';
						};
						elem.onmouseup = ()=>{
					document.onmousemove = null;
					elem.onmouseup = null;
						}
					}
			}	
			}
			// focus:{
			// inserted(el){
      //   el.focus()
      // }
			// },
		},
		data() {
			return {
				name:'drag'
			}
		},
    mounted(){
      console.log('全局定义的资源');
      // vue的原型输出
      // console.log(this.__proto__);
        // var custom = document.querySelector('.bar-wrap');
	    	// new CustomBar(custom);
    }
  }
</script>

<style scoped>
.prompt-explain {
	        margin-bottom: 50px;
			border: 2px dotted blue;
			line-height: 1.5;
			padding: 10px;
		}
		body {
			padding: 50px;
		}
		.bar-wrap .test li {
			width: 800px;
			height: 200px;
		}
		.bar-wrap .test1 li {
			width: 800px;
			height: 20px;
		}
		.bar-wrap .test2 li {
			width: 200px;
			height: 200px;
		}
		.bar-wrap .test li:nth-child(odd) {
			background-color: blue;
		}
		.bar-wrap .test1 li:nth-child(odd) {
			background-color:pink;
		}
		.bar-wrap .test2 li:nth-child(odd) {
			background-color:red;
		}
		.bar-wrap1 {
			margin: 50px;
			width:300px;
			height:300px;
			background:#000;
			overflow:hidden;
			position:relative;
		}
		.bar-wrap1 .test li:nth-child(odd) {
			background-color: orange;
		}
		.bar-wrap .scroll-box1 {
			position:relative;
			float:right; 
			width:10px; 
			height:100%; 
			background: yellow; 
		}
		.bar-wrap .scroll-bar1 {
			position:absolute; 
			left:0; 
			top:0; 
			width:100%;
			height:30px; 
			border-radius: 6px;
			background: linear-gradient(pink, red);
			cursor: default;
		}  
		.bar-wrap .scroll-box2 { 
			position:relative;
			position: absolute;
			bottom: 0; 
			width:100% ;
			height:8px; 
			background: yellow; 
		}
		.bar-wrap .scroll-bar2 {
			position:absolute; 
			left:0; 
			top:0; 
			width:100%;
			height:100%; 
			border-radius: 6px;
			background: linear-gradient(to right,#000, #fff);
			cursor: default;
		}  

		.bar-wrap .scroll-box3 {  
			position:relative;
			float:right; 
			width:20px; 
			height:100%; 
			background: #878; 
		}
		.bar-wrap .scroll-bar3 {
			position:absolute; 
			left:0; 
			top:0; 
			width:100%;
			height:30px; 
			border-radius: 6px;
			background: linear-gradient(pink, red);
			cursor: default;
}  

.box{
	width: 100px;
	height: 100px;
	background: red;
	position: absolute;
	left: 0;
	top: 0;
}   
    /* 11111 */
		/* 第二次的修改 */
		/* 第三次修改 */
</style>