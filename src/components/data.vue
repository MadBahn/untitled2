<template>
  <p></p>
</template>

<script>
export default {
  name: "Data",
  // provide:{
  //   d:['kbs','mbc','sbs']
  // },
  data(){
    return{
      dd:['kbs2','mbc2','sbs2']
    }
  },
  // inject:['d'],
  // mounted() {
  //   console.log('%c '+this.d,'font-size:50px;color:red')
  // },
  methods:{
    send(){
      this.$emit("child_to_father",this.dd);
    }
  }
}
</script>

<style scoped>

</style>