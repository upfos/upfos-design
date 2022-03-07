<template>
  <button class="u-button" :class="classNames" @click="handleClick">
    <!-- <u-loading v-if="loading"></u-loading>
    <u-icon v-if="icon" :icon="icon" :color="iconColor"></u-icon> -->
    <span v-if="slots.default" class="u-button__inner">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import UIcon from '../../icon/src/index.vue'
import ULoading from '../../loading/src/index.vue'

type ButtonTypes = 'primary' | 'secondary' | 'outlined' | 'text'
type ButtonSize = 'small' | 'medium' | 'large' | 'larger'

interface ButtonProps {
  size?: ButtonSize
  type?: ButtonTypes
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  long?: boolean
  icon?: string
  iconColor?: string
  active?: boolean
}

export default defineComponent({
  name: 'UButton',
  components: { UIcon, ULoading },
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
    },
  },
  emits: {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
  },
  setup(props: ButtonProps, { emit, slots }) {
    const classNames = computed(() => {
      const { type, disabled, circle, round, loading, long, active, size } =
        props
      return {
        [`u-button--${type}`]: !!type,
        'is-disabled': disabled,
        'is-circle': circle,
        'is-round': round,
        'is-loading': loading,
        'is-long': long,
        'is-active': active,
        [`u-button--${size}`]: !!props.size,
      }
    })
    const handleClick = (e: any) => {
      if (props.disabled || props.loading) {
        return false
      }
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

<style lang="scss">
@import "../style/button.scss";
</style>
