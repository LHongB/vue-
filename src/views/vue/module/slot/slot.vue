<template>
  <div class="slot">
    <h2 class="cut">匿名插槽</h2>
    <div class="father">
      <h3>这里是父组件</h3>
      <child>
        <div class="tmpl">
          <span>菜单1</span>
          <span>菜单2</span>
          <span>菜单3</span>
          <span>菜单4</span>
          <span>菜单5</span>
          <span>菜单6</span>
        </div>
      </child>
    </div>
    <h2 class="cut">具名插槽</h2>
    <div class="father1">
      <h3>这里是父组件</h3>
      <child1>
        <div
          class="tmpl"
          slot="up"
        >
          <span>菜单1</span>
          <span>菜单2</span>
          <span>菜单3</span>
          <span>菜单4</span>
          <span>菜单5</span>
          <span>菜单6</span>
        </div>
        <div
          class="tmpl"
          slot="down"
        >
          <span>菜单-1</span>
          <span>菜单-2</span>
          <span>菜单-3</span>
          <span>菜单-4</span>
          <span>菜单-5</span>
          <span>菜单-6</span>
        </div>
        <!-- <div class="tmpl">
          <span>菜单->1</span>
          <span>菜单->2</span>
          <span>菜单->3</span>
          <span>菜单->4</span>
          <span>菜单->5</span>
          <span>菜单->6</span>
        </div> -->
      </child1>

    </div>
    <h2 class="cut">作用域插槽</h2>
    <div class="father2">
      <h3>这里是父组件</h3>
      <!--第一次使用：用flex展示数据-->
      <child2>
        <template slot-scope="user">
          <div class="tmpl">
            <span v-for="item in user.data">{{item}}</span>
          </div>
        </template>

      </child2>

      <!--第二次使用：用列表展示数据-->
      <child2>
        <template slot-scope="user">
          <ul>
            <li v-for="item in user.data">{{item}}</li>
          </ul>
        </template>

      </child2>

      <!--第三次使用：直接显示数据-->
      <child2>
        <template slot-scope="user">
          {{user.data}}
        </template>

      </child2>

      <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
      <child2>
        我就是模板
      </child2>
    </div>
  </div>
</template>

<script>
import child from "./child.vue";
import child1 from "./child1.vue";
import child2 from './child2.vue'
export default {
  components: {
    child,
    child1,
    child2
  }
};
</script>

<style lang='scss' scoped>
.cut {
  margin: 20px;
}
</style>