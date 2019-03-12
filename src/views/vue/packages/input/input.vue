<template>
  <div :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    inputSize ? 'el-input--' + inputSize : '', 
    {
      'is-disabled':inputDisabled,
      'el-input-group':$slots.prepend || $slots.append,
      'el-input-group--append':$slots.append,
      'el-input-group--prepend':$slots.prepend,
      'el-input--prefix':$slots.prefix || prefixIcon,
      'el-input--suffix':$slots.suffix || suffixIcon || clearable
    }
  ]"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  >
   <template v-if="type !== 'textarea'">
     <!-- 前置元素 -->
     <div class="el-input-group__prepend" v-if="$slots.prepend">
       <slot name="prepend"></slot>
     </div>
     <input 
      :tabindex="tabindex"
      v-if="type !== 'textarea'"
      class="el-input_inner"
      v-bind="$attrs"
      :type="type"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      :value="nativeInputValue"
      ref="input"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"   
      @input="handleInput"   
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
     >
     <!-- 前置内容 -->
     <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="el-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
     </span>
     <!-- 后置内容 -->
     <span
       class="el-input__suffix"
       v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon"
     > 
      <span class="el-input__suffix-inner">
         <template v-if="!showClear">
           <slot name="suffix"></slot>
           <i class="el-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">        
           </i>
         </template>
         <i v-else
           class="el-input__icon el-icon-circle-close el-input__clear"
           @click="clear"
         ></i>
      </span>
      <i class="el-input__icon"
        v-if="validateState"
        :class="['el-input__validateIcon', validateIcon]">
      </i>      
     </span>
     <!-- 后置元素 -->
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
   </template>
   <textarea
    v-else
    :tabindex="tabindex"
    class="el-textarea__inner"
    :value="nativeInputValue"
    @compositionstart="handleComposition"
    @compositionupdate="handleComposition"
    @compositionend="handleComposition"
    @input="handleInput"
    ref="textarea"
    v-bind="$attrs"
    :disabled="inputDisabled"
    :readonly="readonly"
    :autocomplete="autoComplete || autocomplete"
    :style="textareaStyle"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    :aria-label="label"
  >
  </textarea>
  </div>
</template>

<script>
  import emitter from '@/views/vue/mixins/emitter';

  export default {
    name:"ElInput",
    
    // com

  }
</script>

<style scoped>

</style>