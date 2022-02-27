<template>
  <div id="login">
    <span class="title">
      系统登录
    </span>
    <el-form ref="formRef" :model="form" class="loginForm">
      <el-form-item>
        <el-input 
          class="formInput"
          v-model="form.name" 
          :prefix-icon="User" 
          placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input 
          class="formInput"
          v-model="form.pass" 
          type="password" 
          :prefix-icon="Unlock" 
          placeholder="密码" 
          show-password>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)" class="loginbutton">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { User, Unlock } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  name: "",
  pass: ""
})

const onSubmit = (form: any) => {
  console.log("submit!", form)
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    width: 450px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 26px;
    color: #EEEEEE;
  }
  .loginForm {
    width: 450px;
    height: 350px;
    .formInput {
      height: 50px;
      ::v-deep .el-input__inner {
        background-color: #283443;
        height: 100%;
      }
    }
    .loginbutton {
      background-color: #1890FF;
      width: 100%;
      height: 36px;
      border: 0;
    }
  }
}
</style>