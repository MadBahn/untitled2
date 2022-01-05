<template>
<div class="item">
<img src="#" style="height: 100px;width: 100px">
  <div class="detail">
    文物名：{{die_item.name}}
    <br><br>
    类型：{{die_item.type==="entity"?"实物":(die_item.type==="text"?"文献":"")}}
    <br><br>
    描述：{{die_item.description}}
    <br><br>
    详细信息：{{die_item.detail}}
    <br><br>
    入库日期：{{die_item.date_in}}
  </div>

</div>
</template>

<script>
export default {
  name: "detail",
  data(){
    return{
      alpha:[{
        id:"",
        name:"",
        type:"entity",
        description:"",
        detail:"",
        date_in:"",
      }],
      die_item:{
        id:"",
        name:"",
        type:"entity",
        description:"",
        detail:"",
        date_in:"",
      }
    }
  },
  methods:{
    get(){
      this.alpha = JSON.parse(window.localStorage.getItem('items')||'[]');
      console.log(this.alpha);
      let s = this.$route.query.index
      console.log(this.alpha[s])
      this.die_item = this.alpha[s]
      console.log(this.die_item)
    },
  },
  created() {
    this.$watch(
        ()=>this.$route.params,
        ()=>{
          this.get()
        },
        {immediate:true}
    )
  }
}
</script>

<style scoped>
.item{
  margin: 50px;
}
.detail{
  border: #d0d0d0 1px solid;
  box-shadow: #d0d0d0 10px 10px 5px;
  padding: 20px;
}
</style>