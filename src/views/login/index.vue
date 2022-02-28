<template>
  <div id="login">
    <span class="title">系统登录</span>
    <el-form ref="formRef" 
      :model="form" 
      class="loginForm"
    >
      <el-form-item
        prop="name"
        :rules="{
          required: true,
          message: '账号不能为空！',
          trigger: 'blur',
        }"
      >
        <el-input
          class="formInput"
          v-model="form.name"
          :prefix-icon="User"
          placeholder="请输入账号！"
        >
        </el-input>
      </el-form-item>
      <el-form-item
        prop="pass"
        :rules="{
          required: true,
          message: '密码不能为空！',
          trigger: 'blur',
        }"
      >
        <el-input
          class="formInput"
          v-model="form.pass"
          type="password"
          :prefix-icon="Unlock"
          placeholder="请输入密码！"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)" class="loginbutton">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { User, Unlock } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
const form = reactive<{
  name: string
  pass: string
}>({
  name: '',
  pass: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', form)
    } else {
      console.log('error submit!')
      return false
    }
  })
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
    color: #eeeeee;
  }
  .loginForm {
    width: 450px;
    height: 350px;
    .formInput {
      height: 50px;
      ::v-deep .el-input__inner {
        background-color: #283443;
        color: #eeeeee;
        height: 100%;
      }
    }
    .loginbutton {
      background-color: #1890ff;
      width: 100%;
      height: 36px;
      border: 0;
    }
  }
}
</style>