<template>
<div>
  total:{{total}}
  <br>
  entity:{{totalEntity}}
  <br>
  text:{{totalText}}
</div>
</template>

<script>
export default {
  name: "Statistics",
  data(){
    return{
      alpha:[]
    }
  },
  mounted(){
    this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
  },computed:{
    totalEntity(){
      let i = 0
      for(let j in this.alpha){
        if(this.alpha[j].type==="entity"){
          i++
        }
      }
      return i
    },
    totalText(){
      let i = 0
      for(let j in this.alpha){
        if(this.alpha[j].type==="text"){
          i++
        }
      }
      return i
    },
    total(){
      return this.alpha.length
    }
  }
}
</script>

<style scoped>

</style>