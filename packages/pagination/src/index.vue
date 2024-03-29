<template>
  <div class="u-pagination">
    <el-select class="page-select" v-model="pageSizeBridge" size="small" popper-class="page-select__popper" @change="handleSizeChange">
      <el-option v-for="item in pageSizes" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
    <div class="u-pagination_box">
      <u-icon icon="paging_firstpage_normal" @click="goToStart"></u-icon>
      <u-icon icon="paging_previouspage_normal" @click="goToPrevious"></u-icon>
      <span>第</span>
      <div class="input-item">
        <span>{{ nowPage }}</span>
        <input class="jump-input" type="text" v-model="nowPage" @keyup.enter="jumpPage" />
      </div>
      <u-icon icon="paging_jumpto_normal" class="jump" @click="jumpPage"></u-icon>
      <span>页</span>
      <u-icon icon="paging_nextpage_normal" @click="goToNext"></u-icon>
      <u-icon icon="paging_lastpage_normal" @click="goToEnd"></u-icon>
    </div>
    <div class="u-pagination_box">
      <span>共</span>
      <span class="total__inner">{{ total }}</span>
      <span>条</span>
      <span class="total__inner">{{ totalPage }}</span>
      <span>页</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ElSelect, ElOption } from 'element-plus'

type PageSizes = number[]

export default defineComponent({
  name: 'UPagination',
  components: { ElSelect, ElOption },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSizes: {
      type: Array as PropType<PageSizes>,
      default: () => [10, 20, 50, 100],
    },
  },
  emits: {
    'update:current-page': (val: number) => typeof val === 'number',
    'update:page-size': (val: number) => typeof val === 'number',
    'size-change': (val: number) => typeof val === 'number',
    'current-change': (val: number) => typeof val === 'number',
  },
  setup(props, { emit, slots }) {
    const nowPage = computed({
      get:() => props.currentPage,
      set: val => {
        emit('update:current-page', val)
      }
    })

    const pageSizeBridge = computed({
      get: () => props.pageSize,
      set: val => {
        emit('update:page-size', val)
      }
    })

    const totalPage = computed(() => {
      if (props.pageSize === 0) return 1
      return Math.ceil(props.total / props.pageSize)
    })

    // 获得有效的当前页码
    const getValidPage = () => {
      return Math.min(totalPage.value, nowPage.value)
    }

    // 每页条数发生变化
    const handleSizeChange = (val: number) => {
      nowPage.value = 1
      emit('update:page-size', val)
      emit('size-change', val)
    }

    // 页数跳转
    const goToPage = (page: number) => {
      nowPage.value = page
      emit('update:current-page', page)
      emit('current-change', page)
    }

    // 跳转到 N 页
    const jumpPage = () => {
      let page = getValidPage()
      goToPage(page)
    }

    // 去第一页
    const goToStart = () => {
      if (nowPage.value === 1) return
      const page = 1
      goToPage(page)
    }

    // 去最后一页
    const goToEnd = () => {
      if (nowPage.value >= totalPage.value) return
      const page = totalPage.value
      goToPage(page)
    }

    // 上一页
    const goToPrevious = () => {
      if (nowPage.value === 1) return
      const page = --nowPage.value
      goToPage(page)
    }

    // 下一页
    const goToNext = () => {
      if (nowPage.value >= totalPage.value) return
      const page = ++nowPage.value
      goToPage(page)
    }

    return {
      nowPage,
      totalPage,
      pageSizeBridge,
      handleSizeChange,
      goToStart,
      goToPrevious,
      jumpPage,
      goToNext,
      goToEnd,
    }
  },
})
</script>
