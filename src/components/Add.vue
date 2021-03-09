

<template >
  <el-button type="primary"  icon="el-icon-edit" id="Add" @click="Add"> 新增主机 </el-button>
</template>

<script>
  export default {
   name: 'child',
    methods:{
      Add(){
        console.log(1);
        this.$router.push({path: '/insertList'});
        // this.$emit('parentMethod');
      }
    }

  }
</script>
<style>
  #Add{
    float: left;
  }
</style>
