<template>
<div>
  <el-form
      ref="die_in"
      label-position="left"
      label-width="200px">
    <el-form-item>
      <el-input label="ID" v-model="this.die_in.id"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input label="Name" v-model="this.die_in.name"></el-input>
    </el-form-item>
    <el-form-item>
      <label>Type</label>
      <el-select v-model="this.die_in.type">
        <el-option
            v-for="(item) in type_list"
        :key="item"
        :label="item"
        :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-input label="Description" v-model="this.die_in.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input label="Detail" v-model="this.die_in.detail"></el-input>
    </el-form-item>
    <el-form-item>
      <label>Date In</label>
      <el-date-picker v-model="this.die_in.date_in" :shortcuts="shortcuts"></el-date-picker>
    </el-form-item>
  </el-form>
  <el-button @click="add">ADD</el-button>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "Add",
  data(){
    return{
      die_in:{
        id:"",
        name:"",
        type:"entity",
        description:"",
        detail:"",
        date_in:"",
      },
      type_list:["entity","text"],
      type_label:["实物","文献"],
      shortcuts:[{text:'today',value:new Date()}]
    }
  },
  mounted() {
    this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
    console.log(this.alpha);
  },
  methods:{
    add(){
      console.log(this.die_in)
      if((this.die_in.id!=="")&&(this.die_in.name!=="")&&(this.die_in.date_in!==null)) {
        this.alpha.push(this.die_in)
        window.localStorage.setItem("items", JSON.stringify(this.alpha))
        router.push('/sys/index/manage')
      }else{
        alert("Something is empty, check again.(´･ω･`)?")
      }
    }
  }
}
</script>

<style scoped>

</style>