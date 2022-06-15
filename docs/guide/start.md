## 快速开始
介绍如何在项目中使用 Upfos Design

### Install 安装
我们建议您使用包管理器 (NPM, Yarn) 安装 Upfos Design

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install @upfos/design --save

# Yarn
$ yarn add @upfos/design

```

### 使用
完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import UpfosUI from '@upfos/design'
import '@upfos/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(UpfosUI)
app.mount('#app')
```
