<template>
<div>
  <el-form
  :model="die_item">
    <el-form-item>
      <el-input v-model="this.die_item.id"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="this.die_item.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-select v-model="this.die_item.type">
        <el-option
            v-for="item in type_list"
            :key="item"
            :label="item"
            :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-input v-model="this.die_item.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="this.die_item.detail"></el-input>
    </el-form-item>
    <el-form-item>
      <el-date-picker v-model="this.die_item.date_in" :shortcuts="today"></el-date-picker>
    </el-form-item>
  </el-form>
  <el-button @click="edit">Edit</el-button>
  <el-button @click="resume">Resume</el-button>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "Mod",
  data(){
    return{
      alpha:[
        {
          id:"",
          name:"",
          type:"entity",
          description:"",
          detail:"",
          date_in:"",
        }
      ],
      die_item:{
        id:"",
        name:"",
        type:"entity",
        description:"",
        detail:"",
        date_in:"",
      },
      type_list:["entity","text"],
      today:[{text:'today',value:new Date()}]
    }
  },
  methods:{
    get(){
      this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
      console.log(this.alpha);
      let s = this.$route.query.index
      // console.log(this.alpha[s])
      this.die_item = this.alpha[s]
    },
    edit(){
      for(let i=0;i<this.alpha.length;i++){
        if(this.alpha[i].id===this.die_item.id){
          console.log(this.alpha)
          console.log(this.die_item)
          this.alpha[i] = this.die_item
          window.localStorage.setItem("items",JSON.stringify(this.alpha))
          router.push('/sys/index/manage')
        }
      }
    },
    resume(){
      router.push('/sys/index/manage')
    }
  },
  watch:{
    // die_item:{
    //   handler:function (die_item){
    //     window.localStorage.setItem()
    //   }
    // }
  },
  created() {
    this.$watch(
        ()=> this.$route.params,
        ()=>{
          this.get()
        },
        {immediate:true}
    )
  },
  mounted() {
    // this.alpha = JSON.parse(window.localStorage.getItem('items')||'[{\n' +
    //     '        id:"",\n' +
    //     '        name:"",\n' +
    //     '        type:"entility",\n' +
    //     '        description:"",\n' +
    //     '        detail:"",\n' +
    //     '        date_in:"",\n' +
    //     '      }]');
    // console.log(this.alpha);
  }
}
</script>

<style scoped>

</style>