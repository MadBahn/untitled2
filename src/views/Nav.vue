<template>
  <div>
    <router-link to="/home"><el-button>主页</el-button></router-link>
    <router-link to="/display"><el-button>展品</el-button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>