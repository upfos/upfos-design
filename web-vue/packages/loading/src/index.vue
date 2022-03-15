<template>
  <span class="loading-spinner" :style="{height: size}">
    <svg viewBox="25 25 50 50" class="circular" :style="{width: size, height: size}">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>
  </span>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  name: 'ULoading',
  props: {
    /** 尺寸 */
    size: {
      type: String,
      default: '12px',
    },
  },
  setup(props) {
    const size = toRef(props, 'size')

    return {
      size,
    }
  },
})
</script>


