<template>
  <i :class="classNames" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'UIcon',
  props: {
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
    const classNames = reactive({
      'icon': true,
      'u-icon': true,
      'u-icon--right': props.right
    })
    return {
      style,
      classNames
    }
  },
})
</script>


