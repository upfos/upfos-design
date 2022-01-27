import { defineComponent, reactive, openBlock, createBlock, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: 'UButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: String,
        size: {
            type: String,
            default: 'medium'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit, slots }) {
        const classNames = reactive({
            'u-button--text': props.type === 'text',
            'u-button--primary': props.type === 'primary',
            'is-disabled': props.disabled,
            'is-plain': props.plain,
            'is-circle': props.circle,
            'is-round': props.round,
            [`u-button--${props.size}`]: !!props.size
        });
        const handleClick = (e) => {
            if (props.disabled) {
                return false;
            }
            emit('click', e);
        };
        return {
            classNames,
            slots,
            handleClick
        };
    }
});

const _hoisted_1 = {
  key: 1,
  class: "u-button__inner"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: ["u-button", _ctx.classNames],
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.icon)
      ? (openBlock(), createBlock("i", {
          key: 0,
          class: ["u-button__icon", _ctx.icon]
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.slots.default)
      ? (openBlock(), createBlock("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Button = script;

const components = [_Button];
const install = (app) => {
    components.forEach((component) => {
        //注册组件
        app.component(component.name, component);
    });
};
var index = {
    install,
};

export default index;
