<template>
  <div :class="['u-button-group', {'is-divided': divided}]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UButtonGroup',
  props: {
    /** 是否显示分隔符 */
    divided: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
