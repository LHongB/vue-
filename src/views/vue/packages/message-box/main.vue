<template>
  <transition name="msgbox-fade">
    <div
      class="el-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'"
    >
      <div class="el-message-box" :class="[customClass,center && 'el-message-box--center']">
         <div class="el-message-box__header" v-if="title !== null" >
            <div class="el-message-box__title">
              <div
                :class="['el-message-box__status',icon]"
                v-if="icon && center"
              >
              </div>
              <span>{{title}}</span>
            </div>
            <button
              type="button"
              class="el-message-box__headerbtn"
              aria-label="Close"
              v-if="showClose"
              @click="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
              @keydown.enter="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
            >
              <i class="el-message-box__close el-icon-close"></i>
            </button>
         </div>
         <div class="el-message-box__content">
          <div
           :class="['el-message-box__status',icon]"
           v-if="icon && !center && message !== ''"
          >
          </div>
          <div class="el-message-box__message" v-if="message !== ''">
            <slot>
               <p v-if="!dager"></p>
            </slot>
          </div>
         </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>