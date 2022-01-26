<template>
  <button
    class="u-button"
    :class="classNames"
    @click="handleClick"
  >
    <i
      v-if="icon"
      class="u-button__icon"
      :class="icon"
    />
    <span
      v-if="slots.default"
      class="u-button__inner"
    >
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

type ButtonTypes = 'primary' | 'text'
type ButtonSize = 'small' | 'medium' | 'large' | 'larger'

// type ButtonTypes = 'default' | 'text'| 'primary' | 'success' | 'warning' | 'info' | 'danger' | undefined
// type ButtonSize = 'medium' | 'small' | 'mini' | undefined
interface ButtonProps {
  type?: ButtonTypes
  icon?: string
  disabled?: boolean
  round?: boolean
  plain?: boolean
  circle?: boolean
  size?: ButtonSize
}

export default defineComponent({
	name: 'UButton',
	props: {
		type: { // 按钮类型
			type: String as PropType<ButtonTypes>,
			default: 'default'
		},
		icon: String, // 图标
		size: { // 尺寸
			type: String as PropType<ButtonSize>,
			default: 'medium'
		},
		disabled: { // 是否禁用
			type: Boolean,
			default: false
		},
		round: { // 是否为圆角按钮
			type: Boolean,
			default: false
		},
		plain: { // 是否为朴素按钮
			type: Boolean,
			default: false
		},
		circle: { // 是否圆形按钮
			type: Boolean,
			default: false
		}
	},
	setup (props: ButtonProps, { emit, slots }) {
		const classNames = reactive({
			'u-button--text': props.type === 'text',
			'u-button--primary': props.type === 'primary',
			'is-disabled': props.disabled,
			'is-plain': props.plain,
			'is-circle': props.circle,
			'is-round': props.round,
			[`u-button--${props.size}`]: !!props.size
		})
		const handleClick = (e: any) => {
			if (props.disabled) {
				return false
			}
			emit('click', e)
		}
		return {
			classNames,
			slots,
			handleClick
		}
	}
})
</script>
