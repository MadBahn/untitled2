<template>
  <div>
    <el-button-group>
      <el-button @click="route_to('/sys/index/manage')">Manage</el-button>
      <el-button @click="route_to('/sys/index/add')">Add</el-button>
      <el-button @click="route_to('/sys/index/statistics')">Admin</el-button>
    </el-button-group>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Back_App",
  methods:{
    route_to(route){
      console.log(route)
      router.push(route)
    }
  }
}
</script>

<style scoped>

</style>