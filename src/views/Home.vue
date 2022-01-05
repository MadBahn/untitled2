<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/1.jpg" @click="hey">
    <Hello msg="欢迎来到滑稽博物馆"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello: Hello
  },
  data(){
    return{
      css:"font-size:30px;font-weight:bold;"
    }
  },
  methods:{
    hey(){
      let i = Math.round(Math.random()*100)
      if(i>0&&i<5){
        console.log("%c 🤣(。・ω・。)",this.css)
      }else if(i>5&&i<30){
        console.log("%c ヽ(￣ω￣(￣ω￣〃)ゝ",this.css)
      }else if(i>30&&i<80){
        console.log("%c Σ(っ °Д °;)っ",this.css)
      }else if(i>80&&i<85){
        console.log("%c (´･ω･`)?(´･ω･`)?(´･ω･`)?",this.css)
      }else{
        console.log("%c ( ⓛ ω ⓛ *)( ⓛ ω ⓛ *)",this.css)
      }
    }
  }
}
</script>
