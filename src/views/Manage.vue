<template>
<div>
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
  <el-table
      :data="alpha.filter(
          (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )"
      default-sort="{prop:'id' ,order: 'descending'}"
  >
    <el-table-column label="ID" sortable prop="id"/>
    <el-table-column sortable label="Name" prop="name"/>
    <el-table-column sortable label="Type" prop="type"/>
    <el-table-column label="Description" prop="description"/>
    <el-table-column label="Detail" prop="detail"/>
    <el-table-column sortable label="Date In" prop="date_in"/>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="mini" placeholder="Type name to search" />
      </template>
      <template #default="scope">
        <el-button size="mini" @click="mod(scope.$index)">
          Edit
        </el-button>
        <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "Manage",
  //文物==》编号，名称，类型，描述，补充，入库日期
  data(){
    return{
      alpha:[
        // {id:'a',name:"a",type:"",description:"",detail:"",date_in:""},
        // {id:'b',name:"b",type:"",description:"",detail:"",date_in:""},
        // {id:'c',name:"c",type:"",description:"",detail:"",date_in:""},
        // {id:'d',name:"d",type:"",description:"",detail:"",date_in:""},
        // {id:'e',name:"e",type:"",description:"",detail:"",date_in:""},
        // {id:'f',name:"f",type:"",description:"",detail:"",date_in:""},
      ],
      search:'',
    }
  },
  mounted() {
    console.log(window.location.href)
    this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
    console.log(this.alpha);
  },
  watch:{
    alpha:{
      handler:function (alpha){
        window.localStorage.setItem("items",JSON.stringify(alpha))
      },
      deep:true
    }
  },
  methods:{
    del(index){
      if(confirm("Are you sure to continue?"))
        this.alpha.splice(index,1)
        alert("Successfully deleted.")
    },
    mod(index){
      console.log(index)
      router.push({path:'/sys/index/edit', query:{index: index}})
    },
  }
}
</script>

<style scoped>

</style>