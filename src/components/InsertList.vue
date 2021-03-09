<template>
<el-form ref="form" :model="form" label-width="140px" style="width: 28%;" >

  <el-form-item label="设备类型">
    <el-select v-model="form.device_type" placeholder="请选择活动区域">
      <el-option label="ctrix系列" value="ctrix系列"></el-option>
      <el-option label="ctrix2系列" value="ctrix2系列"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="主机名称">
    <el-input v-model="form.name" :disabled="true" ></el-input>
  </el-form-item>
  <el-form-item label="租户">
    <el-input v-model="form.lessee"  ></el-input>
  </el-form-item>
  <el-form-item label="通讯IP地址">
    <el-input v-model="form.ip"  ></el-input>
  </el-form-item>
  <el-form-item label="通讯端口">
    <el-input v-model="form.port"  ></el-input>
  </el-form-item>
  <el-form-item label="设备IP地址">
    <el-input v-model="form.ip_local" ></el-input>
  </el-form-item>
  <el-form-item label="设备端口">
    <el-input v-model="form.port_local"  ></el-input>
  </el-form-item>
  <el-form-item label="授权用户名">
    <el-input v-model="form.username"  ></el-input>
  </el-form-item>
  <el-form-item label="授权密码">
    <el-input v-model="form.password"  ></el-input>
  </el-form-item>
  <el-form-item label="是否开启流监控">
    <el-radio-group v-model="form.stream_monitor_flag">
      <el-radio label="1">是</el-radio>
      <el-radio label="0">否</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="是否开启4G接口">
    <el-radio-group v-model="form.f4G_flag">
      <el-radio label="1">是</el-radio>
      <el-radio label="0">否</el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="click_Post">立即创建</el-button>
  </el-form-item>



</el-form>
</template>



<script>
  import { Post } from '../api/api'
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          // "device_type": "ctrix系列",
          // "name": "VM174",
          // "lessee": "test2",
          // "ip": "bk37672730.qicp.vip",
          // "port": "22616",
          // "ip_local": "192.168.31.174",
          // "port_local": "443",
          // "username": "admin",
          // "password": "michael",
          // "stream_monitor_flag": "0",
          // "f4G_flag": "0",
          // "manager_name": "",
          // "other": "",
          // "SectsName": ""
        },
        assemb: []
      }
    },
    methods: {
      click_Post() {
        Post(this.form).then(resp => {
          console.log('getDisassemble --->', resp.data);
          this.assemb = resp.data.message;
        }).catch(error => {
          console.log(error);
        });




      }
      }

  }
</script>
