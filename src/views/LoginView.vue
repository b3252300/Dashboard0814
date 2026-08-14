<template>

  <main class="form-sigin w-100">


    <form @submit.prevent="signIn" class="needs-validation" novalidate>

      <img class="login_logo" src="@/assets/images/MMClogo1.svg">
      <h1 class="h3">Dashboard System</h1>
      <div class="optin_view">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="Desktop" id="Laptop" value="Laptop"
            v-on:change="OnModeChanged">
          <label class="form-check-label" for="Laptop">Desktop or Laptop</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="Desktop" id="tv" value="tv" v-on:change="OnModeChanged">
          <label class="form-check-label" for="tv">Desktop TV</label>
        </div>
      </div>

      <div class="form-floating">
        <input ref="isinvalidUserName" v-model.trim="user.Account" type="text"
          :class="['form-control', { 'is-invalid': isInvalidAccount }]" id="UserName" placeholder="User Name" required>
        <label for="UserName">User Name <span class="red">*</span></label>
        <small class="text-left">{{ isinvalidTextAccount }}</small>
      </div>
      <div class="form-floating">
        <input ref="isinvalidPassword" v-model.trim="user.Password" :type="PasswordShow"
          :class="['form-control', { 'is-invalid': isInvalidPassword }]" id="Password" placeholder="Password" required>
        <label for="Password">Password <span class="red">*</span></label>
        <small class="text-left">{{ isinvalidTextPassword }}</small>

        <small class="icon_eye" @click="toggleModal">
          <img :src="iconEye" alt="">
        </small>
      </div>

      <button class="btn btn-login" type="submit">Login</button>


    </form>
  </main>


  <!-- data-bs-toggle="modal" 要拿掉 -->
  <!-- <button type="button" class="btn btn-primary" @click="XsModal.myModal_show()">
    Launch demo modal
  </button>
  <MeModal ref="XsModal"></MeModal> -->


  <!-- <button type="button" class="btn btn-primary" @click="toastLogin.myToast_show()">
    Launch demo modal
  </button> -->
  <Toasts>
    {{ message }}
  </Toasts>

</template>


<script setup>
import { reactive, ref, } from "vue";
import LoginLayout from '@/layout/LoginLayout.vue'

//眼睛ICON
import eyeShow from '@/assets/images/visibility_FILL0_wght400_GRAD0_opsz24.svg';
import eyeClose from '@/assets/images/visibility_off_FILL0_wght400_GRAD0_opsz24.svg';

// pinia  
import { storeToRefs } from 'pinia'
import { loginApi } from '@/stores/login';//登入API
import { encryptStorage } from '@/stores/EncryptStorage';

import useApi from "@/composable/useApi";
const { UseApiFunction } = useApi();

const loginView = loginApi();

const { user, message, isinvalidTextAccount, isinvalidTextPassword, isInvalidAccount, isInvalidPassword } = storeToRefs(loginView);
const { signIn } = loginView;

const isRegistered = ref(false);
const picked = ref('')

const OnModeChanged = (ev) => {
  if (ev.target._value == "tv") {
    user.value.IsDashboardTV = true;
  } else {
    user.value.IsDashboardTV = false;
  }
};

const CallApi = async () => {
  const PostData = reactive({});
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_LOGIN_VERIFYDEVICE, PostData);
  if (res != undefined) {
    const {
      Data,
      Code,
      IsReload
    } = res.data;
    console.log(res.data);

    if (IsReload) {
      location.reload();
    }

    if (Code == "0") {
      isRegistered.value = Data.IsRegistered;
    } else {
      console.log(res.data);
    }
  }
}

CallApi();
localStorage.removeItem("SwitchableWard");

//頁面跳轉
//import { useRouter } from 'vue-router';
//const router = useRouter();

//元件
// import MeModal from '@/components/Modal.vue'
// const XsModal = ref(null);

import Toasts from '@/components/Toasts.vue'

const isShow = ref(false);
let iconEye = ref(eyeClose);
let PasswordShow = ref("password");
function toggleModal() {
  isShow.value = !isShow.value;
  if (isShow.value) {
    iconEye.value = eyeShow;
    PasswordShow.value = "text"
  } else {
    iconEye.value = eyeClose;
    PasswordShow.value = "password"
  }
}





</script>





<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width:1600px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;

  }
}

.login_logo {

  width: 12vw;
  margin-bottom: 2rem;

  @media screen and (max-width:1600px) {
    margin-bottom: 1rem;
  }

}

form {
  width: 21.3vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width:1600px) {
    width: 70%;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (max-width:1280px) {
    width: 75%;
  }

}

.form-control {
  background: #F8F9FA;
  color: #323232;
  border: solid #F8F9FA thin;
  box-shadow: 1px 2px 4px rgb(34 34 34 / 9%) inset;
}

.form-floating {
  margin-bottom: 1rem;

}

.form-floating {
  margin-bottom: 1rem;
}

.btn-login {
  margin-top: 1rem;
}

.optin_view {
  margin-bottom: 2rem;

  @media screen and (max-width:1600px) {
    margin-bottom: 1rem;
  }
}


small.icon_eye {
  position: absolute;
  right: 1.18rem;
  top: 1rem;
}
</style>