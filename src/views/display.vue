<template>
  <div class="display">
    <br><br>
    <el-input v-model="search" size="mini" placeholder="搜索名称" />
    <el-backtop :bottom="100">
      <div
          style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
      >
        ▲
      </div>
    </el-backtop>
    <ul>
      <li
          v-for="(i,index) in this.alpha.filter(
              (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )"
          :key="i"
          style="list-style-type: none;margin: 10px"
      >
        <el-card :body-style="{padding:0}"
        @click="for_detail(index)">
          <div hidden>{{index}}</div>
          <img src="#" class="el-image" style="width: 100px;height: 100px">
          <div>{{i.name}}</div>
          <div>{{i.description}}</div>
        </el-card>
      </li>
    </ul>

  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "display",
  data(){
    return{
      alpha:[],
      search:''
    }
  },
  mounted() {
    this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
    console.log(this.alpha)
  },
  methods:{
    for_detail(i){
      console.log(i)
      router.push({path:'/detail',query:{index:i}})
    }
  }
}
</script>

<style scoped>
el-card{
  width: 100px;
}
</style>