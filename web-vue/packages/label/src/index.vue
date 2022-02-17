<template>
  <span class="u-label" :class="classNames" :style="colorStyle" @click="handleClick">
    <u-icon v-if="icon" :class="icon" :color="iconColor"></u-icon>
    <span v-if="slots.default" class="u-label__inner">
      <slot />
    </span>
    <u-icon v-if="closable" class="design_label_delete u-label_close-btn" @click="handleClose"></u-icon>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import UIcon from '@upfos/icon'

type LabelTypes = 'primary' | 'secodary' | 'success' | 'danger' | 'warning'
type LabelSize = 'small' | 'medium' | 'large' | 'larger'
type LabelEffect = 'light' | 'dark'

export default defineComponent({
  name: 'ULabel',
  components: { UIcon },
  props: {
    type: {
      type: String as PropType<LabelTypes>,
      default: 'primary'
    },
    /** 尺寸 */
    size: {
      type: String as PropType<LabelSize>,
      default: 'medium',
    },
    /** 主题 */
    effect: {
      type: String as PropType<LabelEffect>,
      default: 'light',
    },
    /** 是否可关闭 */
    closable: {
      type: Boolean,
      default: false,
    },
    /** 标签的颜色 */
    color: String,
    /** 图标类名 */
    icon: String,
    /** 图标颜色 */
    iconColor: String,
  },
  setup(props, { emit, slots }) {
    
    const classNames = computed(() => {
      const { size, closable, effect } = props
      return {
        [`u-label--${size}`]: !!size,
        [`is-${closable}`]: !!closable,
        [`is-${effect}`]: effect
      }
    })
    const colorStyle = computed(() => {
      const { type, color, effect } = props
      const typeColor = getComputedStyle(document.documentElement).getPropertyValue(`--u-color-${type}`)
      const labelColor = color || typeColor
      if (!labelColor) return
      if (!new TinyColor(color)) {
        console.warn('请填写正确的颜色数值')
      }
      if (effect === 'dark') {
        return {
          '--u-label-color': 'var(--u-color-white)',
          '--u-label-bg-color': labelColor,
          '--u-label-border-color': labelColor,
          '--u-label-hover-bg-color': new TinyColor(labelColor).tint(36).toString(),
        }
      }
      if (effect === 'light') {
        return {
          '--u-label-color':labelColor,
          '--u-label-bg-color': new TinyColor(labelColor).tint(92).toString(),
          '--u-label-border-color': new TinyColor(labelColor).tint(64).toString(),
          '--u-label-hover-color': 'var(--u-color-white)',
          '--u-label-hover-bg-color': labelColor,
        }
      }
    })
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
    }
    const handleClose = (event: MouseEvent) => {
      event.stopPropagation()
      emit('close', event)
    }

    return {
      classNames,
      colorStyle,
      slots,
      handleClick,
      handleClose,
    }
  },
})
</script>


