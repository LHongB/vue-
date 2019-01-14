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
  </div>
</template>

<script>
  import  '@/utils/js-pluggs-master/custom-bar/custom-bar.js'
  export default {
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
</style>