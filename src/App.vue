<template>
  <div>
<!--    <el-button type="primary" @click="aol">el-button</el-button>-->
<!--    <li v-for="d in data">{{d}}</li>-->
<!--    <Data @child_to_father="receive" ></Data>-->
<!--    {{tmp}}-->
  </div>
<!--  <Data></Data>-->
<!--  <router-link to="/home"><el-button>前端</el-button></router-link>-->
<!--  <router-link to="/sys/login"><el-button>后台</el-button></router-link>-->
  <router-view></router-view>
<!--  <Hello msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
import HelloWorld from './components/Hello.vue'
import Data from './components/data.vue'
import router from "@/router";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    Data
  },
  // inject: ['d'],
  data(){
    return{
      tmp:"",
    }
  },
  provide:{
    d:['kbs','mbc','sbs']
  },
  methods:{
    aol(){
      console.log('%c a','color:red;font-size:50px;');
    },
    receive(dd){
      this.tmp = dd;
    }
  },
  // mounted() {
  //   let s = window.location.href
  //   console.log(s)
  // },
  watch: {
    $route: {
      handler:function(route){
        let s = route.name
        console.log(s)
        if(s==='Home'){
          router.push('/home')
        }else if(s==='Sys'){
          router.push('/sys/login')
        }else if(s==='Index'){
          router.push('/sys/index/manage')
        }
      },
      immediate:true
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
