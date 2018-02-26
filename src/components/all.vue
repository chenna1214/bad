<template>
<div>
  <!-- 头部、左侧栏 -->
  <top/>
  <foot/>

</div>
</template>

<script>
import top from './header.vue'//头部、左侧栏
import foot from './foot'//脚部
export default {
  name:'all',
  components:{top,foot}
}
</script>

<style lang="less" scoped>

</style>



