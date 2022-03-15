<template>
  <u-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :total="total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange"></u-pagination>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
  setup(){
    const currentPage = ref(1)
    const pageSize = ref(10)
    const total = ref(100)

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }

    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }

    return{
      currentPage,
      pageSize,
      total,
      handleSizeChange,
      handleCurrentChange,
    }
  },
}
</script>
