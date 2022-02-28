<template>
  <svg :class="classNames" :style="style" aria-hidden="true" v-bind="$attrs">
    <use :href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onMounted } from 'vue'
import type { CSSProperties } from 'vue'
import './iconfont.js'

export default defineComponent({
  name: 'UIcon',
  props: {
    /** 图标类名 */
    icon: String,
    /** 图标颜色 */
    color: String,
    /** 图标是否处于右边 */
    right: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const style = computed<CSSProperties>(() => {
      if(!props.color) return {}
      return {
        color: props.color
      }
    })
    const iconName = computed(() => {
      return `#${props.icon}`
    })
    const classNames = reactive({
      'u-icon': true,
      'u-icon--right': props.right
    })
    return {
      style,
      classNames,
      iconName
    }
  },
})
</script>

<style lang="scss">
@import "../style/icon.scss";
</style>
