

<template>
  <div>
  <el-button type="primary"  icon="el-icon-edit" @click="Add" style="float: left;" > 新增主机 </el-button>
  <el-table :data="tableData" style="width: 100%">

    <el-table-column  prop="id" label="ID" align="center"> </el-table-column>
    <el-table-column  prop="name" label="主机名称"   align="center">  </el-table-column>
    <el-table-column  prop="device_type" label="设备类型" align="center"> </el-table-column>
    <el-table-column  prop="lessee" label="所属租户" align="center"> </el-table-column>
    <el-table-column  prop="serial_no" label="序列号" align="center">  </el-table-column>
    <el-table-column  prop="ip" label="通讯IP地址" align="center"> </el-table-column>
    <el-table-column  prop="port" label="通讯端口" align="center"> </el-table-column>
    <el-table-column  prop="ip_local" label="设备IP" align="center">  </el-table-column>
    <el-table-column  prop="port_local" label="设备端口" align="center"> </el-table-column>
    <el-table-column  prop="device_count" label="设备数" align="center"> </el-table-column>
    <el-table-column prop="created_at" label="创建时间" align="center"> </el-table-column >
    <el-table-column  prop="updated_at" label="修改时间" align="center"> </el-table-column>
    <el-table-column label="Actions" align="center" width="220">
      <el-button type="primary" size="mini" icon="el-icon-edit" >
        编辑
      </el-button>
      <el-button size="mini" type="danger" icon="el-icon-delete" >
        删除
      </el-button>
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
  import { Get } from '../api/api'
  export default {
    data () {
      return {
        tableData: null
      }
    },
    mounted(){

      this.click_Get();
    },
    methods: {
      click_Get() {
        Get().then(resp => {
          this.tableData = resp.data.payload.data;
          console.log('start --->', resp.data.payload.data);
          //console.log(this.tableData.payload.data.id);
        }).catch(error => {
          console.log(error);
        });
      },
      Add(){
          this.$router.push({path: '/insertList'});
      }
    }

  }
</script>
