<template>
  <button class="u-button" :class="classNames" @click="handleClick">
    <span class="loading-spinner" v-if="loading">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </span>
    <u-icon v-if="icon" :class="icon" :color="iconColor"></u-icon>
    <span v-if="slots.default" class="u-button__inner">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import UIcon from '@upfos/icon'

type ButtonTypes = 'primary' | 'secondary' | 'outlined' | 'text'
type ButtonSize = 'small' | 'medium' | 'large' | 'larger'

interface ButtonProps {
  size?: ButtonSize
  type?: ButtonTypes
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  long?: boolean,
  icon?: string
  iconColor?: string
  active?: boolean
}

export default defineComponent({
  name: 'UButton',
  components: { UIcon },
  props: {
    /** 尺寸 */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },
    /** 类型 */
    type: {
      type: String as PropType<ButtonTypes>,
      default: 'secondary',
    },
    /** 是否为圆角按钮 */
    round: {
      type: Boolean,
      default: false,
    },
    /** 是否圆形按钮 */
    circle: {
      type: Boolean,
      default: false,
    },
    /** 是否禁用状态 */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 是否加载中状态 */
    loading: {
      type: Boolean,
      default: false,
    },
    /** 按钮的宽度是否随容器自适应 */
    long: {
      type: Boolean,
      default: false,
    },
    /** 图标类名 */
    icon: String,
    /** 图标颜色 */
    iconColor: String,
    /** 按钮激活状态（仅在按钮组中有效） */
    active: {
      type: Boolean,
      default: false,
    }
  },
  setup(props: ButtonProps, { emit, slots }) {
    const classNames = reactive({
      [`u-button--${props.type}`]: !!props.type,
      'is-disabled': props.disabled,
      'is-circle': props.circle,
      'is-round': props.round,
      'is-loading': props.loading,
      'is-long': props.long,
      'is-active': props.active,
      [`u-button--${props.size}`]: !!props.size,
    })
    const handleClick = (e: any) => {
      if (props.disabled || props.loading) {
        return false
      }
      console.log('click')
      emit('click', e)
    }
    return {
      classNames,
      slots,
      handleClick,
    }
  },
})
</script>
