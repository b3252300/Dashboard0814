import { ref, watchEffect, onMounted } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import Toast from 'bootstrap/js/dist/toast';
import { useGlobalStore } from "@/stores/store";
import SignalrHub from "@/composable/SignalrHub"; //导入hub

//頁面跳轉
//import { useRouter } from 'vue-router';
import router from "@/router";
import { encryptStorage } from '@/stores/EncryptStorage';

import useApi from "@/composable/useApi";
const { UseApiFunction } = useApi();

export const loginApi = defineStore('login', () => {
  const user = ref({
    Account: "",
    Password: "",
    IsDashboardTV: false
  });


  // let dataText = ref([]);
  // let AuthorizeStationListText = ref();
  // let message = ref(null);
  // let localStorageText = {};
  const DisplayName = ref('');
  const Token = ref('');
  const FileToken = ref('');
  const SwitchableWard = ref(false);
  const StationList = ref([]);
  // const localStorageText = ref({});
  const message = ref(null);
  const isinvalidTextAccount = ref();//帳號錯誤文字顯示
  const isinvalidTextPassword = ref();//密碼錯誤文字顯示

  let toastShow = "";


  const isInvalidAccount = ref(false);
  const isInvalidPassword = ref(false);

  onMounted(() => {
    toastShow = document.querySelector(".toastStyle .toast");
  })


  const signIn = async () => {  
    const res = await UseApiFunction(import.meta.env.VITE_API_PATH_LOGIN_VALIDATION, user.value);
    // console.log(user.value);
    new Toast(toastShow, { autohide: true, delay: parseInt(import.meta.env.VITE_TOAST_TIME_MS) });
    // const  api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_PATH}`;
    // await axios.post(api, user.value)
    //   .then(async function (response) {




    if (user.value.Account !== "" && user.value.Password !== "") {

      if (res != undefined) {
        const {
          Data,
          Code,
          Message
        } = res.data;

        if (Code == "0") {
          DisplayName.value = Data.DisplayName;
          SwitchableWard.value = Data.SwitchableWard;
          StationList.value = Data.StationList;
          // StationList.value = [{
          //   "Code": "W7A",
          //   "Name": "Ward 7A"
          // }];
          Token.value = Data.Token;
          FileToken.value = Data.FileToken;
          message.value = "";
          isinvalidTextAccount.value = "";
          isinvalidTextPassword.value = "";
          isInvalidAccount.value = false;
          isInvalidPassword.value = false;


          // localStorageText.value = {
          //   Token: Data.Token,
          //   // Account: user.value.Account,
          //   // Password: user.value.Password,
          //   StationList: Data.StationList,
          //   SwitchableWard: Data.SwitchableWard,
          // };


          encryptStorage.setItem("Token", Token.value);
          encryptStorage.setItem("FileToken", FileToken.value);
          localStorage.setItem("StationList", JSON.stringify(StationList.value));
          localStorage.setItem("SwitchableWard", SwitchableWard.value);

          if (StationList.value.length == 1) {
            localStorage.setItem("StationCode", StationList.value[0].Code);
            localStorage.setItem("StationName", StationList.value[0].Name);
          }

          if (StationList.value.length == 1) {


            router.push({ name: "home" });

          } else {
            //選護理站
            router.push({ name: "selectWard" });
          }
        }
        else if (Code == -1) {
          message.value = "Internal error";
          Toast.getInstance(toastShow).show();
        } else if (Code == 1) {
          isInvalidAccount.value = true;
          isInvalidPassword.value = true;
          isinvalidTextAccount.value = "Invalid user name or password.";
          isinvalidTextPassword.value = "Invalid user name or password.";

        } else if (Code == 2) {
          message.value = "No permissions to log in";
          Toast.getInstance(toastShow).show();
        } else if (Code == 3) {
          message.value = "The account is locked. Kindly contact the system administrator to unlock.";
          Toast.getInstance(toastShow).show();
        } else {
          console.log(res.data);
        }

      }
    } else {


      if (user.value.Account === "") {
        isinvalidTextAccount.value = "It is required";
        isInvalidAccount.value = true;
      } else {
        isinvalidTextAccount.value = "";
        isInvalidAccount.value = false;
      }

      if (user.value.Password === "") {
        isinvalidTextPassword.value = "It is required";
        isInvalidPassword.value = true;
      } else {
        isinvalidTextPassword.value = "";
        isInvalidPassword.value = false;
      }

    }


    user.value.Account = "";
    user.value.Password = ""


  }



  watchEffect(async () => {
    if (StationList.value.length == 1) {

      SignalrHub.send(
        "Register",
        JSON.stringify({
          DeviceType: 1,
          DeviceId: localStorage.getItem("DeviceId"),
          IdentityData1: localStorage.getItem("StationCode"),
        }));
    }
  });






  return { StationList, message, user, signIn, isinvalidTextAccount, isinvalidTextPassword, isInvalidAccount, isInvalidPassword }
})
