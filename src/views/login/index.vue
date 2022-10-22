<template>
  <div class="login-container">
    <div class="login-card">
    <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <a-form-item
          label="用户名"
          name="email"
          :rules="[{ required: true, message: '请输入手机号!',trigger:'blur'}]"
      >
        <a-input v-model:value.trim="formState.email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input >
      </a-form-item>
      <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value.trim="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model="remember" @click="onchange">记住我</a-checkbox>
        </a-form-item>
        <a class="login-form-forgot" href="">忘记密码</a>
      </a-form-item>

      <a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import {loginAPI} from "@/apis/login";
import { useUserStore } from "@/store/user";
import router from "@/router/router";
//修改是否记住账号密码
let remember:boolean= false
const onchange = () => {
  remember = !remember
  // console.log(remember)
}
//发起登录请求并把token存储到本地
const formState = reactive({
  email: '',
  password: '',
});
const userStore = useUserStore()
const onFinish =async (values:object) => {
  // console.log('Success:', values);
  const res = await loginAPI(values)
  // console.log(res)
  await userStore.updateToken(res.data.token)
  await router.push('/')
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
  return !(formState.email && formState.password);
});
</script>

<style scoped lang="less">
.login-container{
  display: flex;
  justify-content: center;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../../../src/assets/images/loginBg.jpeg") no-repeat;
  background-size: cover;
  .login-card{
      position: absolute;
      top: 30%;
      width: 35%;
      padding:50px 5%;
      backdrop-filter: blur(10px);
      background-color: rgba(255,255,255,0.5);
    .login-form{
      text-align: center;
      #components-form-demo-normal-login .login-form {
        max-width: 300px;
      }
      #components-form-demo-normal-login .login-form-forgot {
        float: right;
      }
      #components-form-demo-normal-login .login-form-button {
        width: 100%;
      }
    }
  }


}
</style>
