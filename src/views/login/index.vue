<template>
  <div id="login">
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #2d3a4b;
}
</style>