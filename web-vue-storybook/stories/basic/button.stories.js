import UButton from '@web-vue/packages/button/src/index.vue'
import '@web-vue/packages/theme-chalk/src/button.scss';

export default {
    title: 'UPFOS DESIGN/Basic 基础组件/Button 按钮',
    component: UButton,
    parameters: {
        docs: {
            description: {
                component: `<h3>基本用法</h3><div>按钮分为 主要按钮、次级按钮、辅助按钮、文本按钮4种</div>`
            }
        }
    }
}

export const Basic = () => ({
    components: { UButton },
    template: `
        <u-button type="primary">主要按钮</u-button>
        <u-button plain>次级按钮</u-button>
        <u-button plain type="primary">辅助按钮</u-button>
        <u-button type="text">文本按钮</u-button>
        `,
})
