<template>
<div>
<el-form ref="login_form" label-position="left" label-width="100px" :model="login_form">
  <el-form-item label="name" required>
    <el-input v-model="login_form.name"></el-input>
  </el-form-item>
  <el-form-item label="password" required>
    <el-input v-model="login_form.password" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Login</el-button>
    <el-button @click="reset('login_form')">Reset</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  data(){
    return{
      login_form:{
        name:"",
        password:""
      }
    }
  },
  methods:{
    reset(formName){
      this.$refs[formName].resetFields()
    },
    onSubmit(){
      // console.log("name:"+this.login_form.name+"\npassword:"+this.login_form.password)
      if(this.login_form.name==="admin"&&this.login_form.password==="123456"){
        console.log("success")
        router.push('/sys/index/manage')
      }else{
        console.log("fail")
        alert("error")
      }
    }
  }
}
</script>

<style scoped>

</style>