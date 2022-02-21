# Label 标签

用于事物属性和维度的分类、归纳、展示，用户也可以通过标签进行交互操作

### 基本用法

标签分为 `primary`（默认）、`secondary`、`success`、`danger`、`warning` 五种类型。可以在标签中嵌入`icon`，形成图标标签。
::: demo

```vue
<template>
  <u-label>primary</u-label>
  <u-label type="secondary">secondary</u-label>
  <u-label type="secondary" icon="report_card_priceperunit">secondary</u-label>
  <u-label type="success">success</u-label>
  <u-label type="danger">danger</u-label>
  <u-label type="warning">warning</u-label>
</template>
```

:::

### 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。点击标签关闭按钮时会触发 `close` 事件。
::: demo

```vue
<template>
  <u-label closable>label1</u-label>
  <u-label closable>label2</u-label>
</template>
```

:::

### 主题

Label 组件提供了两个不同的主题：`dark` 和 `light`（默认），通过设置 effect 属性来改变主题。
::: demo

```vue
<template>
  <div class="u-row">
    <u-label effect="dark">primary</u-label>
    <u-label type="secondary" effect="dark">secondary</u-label>
    <u-label type="success" effect="dark">success</u-label>
    <u-label type="danger" effect="dark">danger</u-label>
    <u-label type="warning" effect="dark">warning</u-label>
  </div>
  <div class="u-row">
    <u-label>primary</u-label>
    <u-label type="secondary">secondary</u-label>
    <u-label type="success">success</u-label>
    <u-label type="danger">danger</u-label>
    <u-label type="warning">warning</u-label>
  </div>
</template>
<style scope>
.u-row + .u-row {
  margin-top: 10px;
}
</style>
```

:::

### 颜色标签

通过设定不同色值 `color` ，为标签添加颜色，用作不同场景使用。
::: demo

```vue
<template>
  <div class="u-row">
    <u-label color="#2A7AFF" effect="dark">label</u-label>
    <u-label color="#379E0E" effect="dark">label</u-label>
    <u-label color="#0FC6C2" effect="dark">label</u-label>
    <u-label color="#909399" effect="dark">label</u-label>
  </div>
  <div class="u-row">
    <u-label color="#2A7AFF">label</u-label>
    <u-label color="#379E0E">label</u-label>
    <u-label color="#0FC6C2">label</u-label>
    <u-label color="#909399">label</u-label>
  </div>
</template>
```

:::

### 标签尺寸

标签分为`small`、`medium`、`large`、`larger` 四种尺寸。推荐（默认）尺寸`medium`。可在不同场景及不同业务需求选择适合尺寸。
::: demo

```vue
<template>
  <u-label size="small">small</u-label>
  <u-label size="medium">medium</u-label>
  <u-label size="large">large</u-label>
  <u-label size="larger">larger</u-label>
</template>
```

:::

<!-- ### 参数文档 -->

### Label 属性

|    属性    |    说明    |  类型   |                      可选值                      | 默认值  |
| :--------: | :--------: | :-----: | :----------------------------------------------: | :-----: |
|    type    |    类型    | string  | primary / secondary / success / danger / warning | primary |
|    size    |    尺寸    | string  |         small / medium / large / larger          | medium  |
|   effect   |    主题    | string  |                   light / dark                   |  light  |
|  closable  | 是否可关闭 | boolean |                        —                         |  false  |
|   color    | 标签的颜色 | string  |                        —                         |    -    |
|    icon    |  图标类名  | string  |                        —                         |    -    |
| icon-color |  图标颜色  | string  |                        —                         |    -    |

### Label 事件

| 事件名 |       描述        | 参数 |
| :----: | :---------------: | :--: |
| click  | 点击 Label 时触发 |  -   |
| close  | 关闭 Label 时触发 |  -   |

### Label 插槽

| 插槽名 |      说明      |
| :----: | :------------: |
|   —    | 自定义默认内容 |
