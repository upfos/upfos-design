# @upfos/button

## Install

```bash
npm i @upfos/button
# or
yarn add @upfos/button
```

## Usage

```vue
<template>
  <u-button/>
  <u-button-group>
    <u-button/>
  </u-button-group>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import UButton, { UButtonGroup as ButtonGroup } from '@upfos/button'

export default defineComponent({
  components: { UButton, UButtonGroup },
  setup() {}
})
</script>
```

## Docs

