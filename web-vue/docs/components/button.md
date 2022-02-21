## Button 按钮

常用的操作按钮

### 基本用法

按钮分为 `primary` - **主要按钮**、`secondary` - **次级按钮（默认）**、`outlined` - **辅助按钮**、`text` - **文本按钮** 四种类型
::: demo

```vue
<template>
  <u-button type="primary">主要按钮</u-button>
  <u-button>次级按钮</u-button>
  <u-button type="outlined">辅助按钮</u-button>
  <u-button type="text">文本按钮</u-button>
</template>
```

:::

### 图标按钮

可以在基本按钮中嵌入`icon`, 形成图标按钮。带图标的按钮可增强辨识度（有文字）或节省空间（无文字）
::: demo

```vue
<template>
  <u-button type="primary" icon="button_config">设置</u-button>
  <u-button icon="button_print">打印</u-button>
  <u-button>下载<u-icon icon="button_import" right></u-icon></u-button>
  <u-button icon="button_delete" icon-color="#D0021C"></u-button>
  <u-button type="text" icon="button_print">打印</u-button>
</template>
```

:::

### 按钮形状

按钮分为`round` - **全圆角** , `square` - **长方形 (默认)**, `circle` - **圆形** 三种形状
::: demo

```vue
<template>
  <u-button type="outlined" icon="button_timeoutreminder" round
    >超时提醒</u-button
  >
  <u-button icon="button_print">打印</u-button>
  <u-button icon="button_delete" icon-color="#D0021C"></u-button>
  <u-button type="primary" circle icon="button_add"></u-button>
</template>
```

:::

### 按钮尺寸

按钮分为`small`、`medium`、`large`、`larger` 四种尺寸。高度分别为：`24px`、`28px`、`32px`、`36px`。推荐（默认）尺寸`medium`。可在不同场景及不同业务需求选择适合尺寸。
::: demo

```vue
<template>
  <u-button size="small" type="primary">小按钮</u-button>
  <u-button size="medium" type="primary">中按钮</u-button>
  <u-button size="large" type="primary">大按钮</u-button>
  <u-button size="larger" type="primary">特大按钮</u-button>
</template>
```

:::

### 按钮状态

按钮分为`normal` - **正常（默认）**、`disabled` - **禁用**、`loading` - **加载中** 三种状态, 处于加载中状态的按钮不会触发点击事件
::: demo

```vue
<template>
  <div class="u-row">
    <u-button type="primary">主要按钮</u-button>
    <u-button type="primary" disabled>主要按钮</u-button>
    <u-button type="primary" loading>主要按钮</u-button>
  </div>
  <div class="u-row">
    <u-button>次级按钮</u-button>
    <u-button disabled>次级按钮</u-button>
    <u-button loading>次级按钮</u-button>
  </div>
  <div class="u-row">
    <u-button type="outlined">辅助按钮</u-button>
    <u-button type="outlined" disabled>辅助按钮</u-button>
    <u-button type="outlined" loading>辅助按钮</u-button>
  </div>
  <div class="u-row">
    <u-button type="text">文本按钮</u-button>
    <u-button type="text" disabled>文本按钮</u-button>
    <u-button type="text" loading>文本按钮</u-button>
  </div>
</template>
<style scope>
.u-row + .u-row {
  margin-top: 10px;
}
</style>
```

:::

### 组合按钮

当存在同级多项操作时，以组合按钮的方式出现,通过设置`divided`属性来显示分隔符
::: demo

```vue
<template>
  <u-button-group>
    <u-button active>组合按钮</u-button>
    <u-button>组合按钮</u-button>
    <u-button>组合按钮</u-button>
  </u-button-group>
  <u-button-group divided>
    <u-button type="primary" icon="button_copy"></u-button>
    <u-button type="primary" icon="button_print"></u-button>
    <u-button type="primary" icon="button_review" active></u-button>
  </u-button-group>
</template>
```

:::

### 长按钮

通过设置`long`属性，使按钮的宽度跟随容器的宽度。
::: demo

```vue
<template>
  <div class="wrapper">
    <u-button type="primary" long>长按钮</u-button>
    <u-button long>长按钮</u-button>
    <u-button type="outlined" long>长按钮</u-button>
    <u-button type="text" long>长按钮</u-button>
  </div>
</template>
<style scope>
.wrapper {
  width: 400px;
  padding: 20px;
  border: 1px solid #dddfe5;
}
.wrapper .u-button + .u-button {
  margin-top: 10px;
}
</style>
```

:::

### Button 属性

|    属性    |               说明               |  类型   |                可选值                 |  默认值   |
| :--------: | :------------------------------: | :-----: | :-----------------------------------: | :-------: |
|    size    |               尺寸               | string  |    small / medium / large / larger    |  medium   |
|    type    |               类型               | string  | primary / secondary / outlined / text | secondary |
|   round    |          是否为圆角按钮          | boolean |                   —                   |   false   |
|   circle   |          是否为圆形按钮          | boolean |                   —                   |   false   |
|  disabled  |           是否禁用状态           | boolean |                   —                   |   false   |
|  loading   |          是否加载中状态          | boolean |                   —                   |   false   |
|    long    |    按钮的宽度是否随容器自适应    | boolean |                   —                   |   false   |
|    icon    |             图标类名             | string  |                   —                   |     -     |
| icon-color |             图标颜色             | string  |                   —                   |     -     |
|   active   | 按钮激活状态（仅在按钮组中有效） | boolean |                   —                   |   false   |

### Button 插槽

| 插槽名 |      说明      |
| :----: | :------------: |
|   —    | 自定义默认内容 |

### Button 事件

| 事件名 |        描述        | 参数 |
| :----: | :----------------: | :--: |
| click  | 点击 Button 时触发 |  -   |

### Button Group 属性

|  属性   |      说明      |  类型   | 可选值 | 默认值 |
| :-----: | :------------: | :-----: | :----: | :----: |
| divided | 是否显示分隔符 | boolean |   -    | false  |

### Button Group 插槽

| 插槽名 |       说明       | 子标签 |
| :----: | :--------------: | :----: |
|   -    | 自定义按钮组内容 | Button |
