import axios from "axios";
// import app from "../main";
// import useCryptoJs from "./aesUtils";
// import useLogBackEndRecord from "@/composable/useLogBackEndRecord";
import router from "@/router";
// import { encryptStorage } from "@/store/EncryptStorage";
// import { getCurrentInstance  } from "vue";
import { useGlobalStore } from '@/stores/store'
import { encryptStorage } from "@/stores/EncryptStorage";

// const { EncryptInit, DecryptInit } = useCryptoJs();
// const { loggerRecord } = useLogBackEndRecord();

const axiosInstance = axios.create({
  //baseURL: import.meta.env.VITE_APP_API,
  // headers: {
  //   "Content-Type": "text/plain",
  // },
  // timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { data } = config;
    // const { Function, Data } = data;
    // console.log(useGlobalStore().loading);
    // console.log(data);
    useGlobalStore().loading = true;
    // app.config.globalProperties.$Progress.start();
    // useGlobalStore.loading = true;
    // useGlobalStore.$global
    // const encryptedData = EncryptInit(data);
    // loggerRecord(Function, Data);
    // config.data = encryptedData;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    // const decryptedData = DecryptInit(res.data);
    // console.log(decryptedData);
    // if (decryptedData.Function === "CheckVersion") {
    //   if (decryptedData.Code === 2) {
    //     alert(decryptedData.Message);
    //     window.location.reload();
    //   }
    // } else {
    //   if (decryptedData.Code === 2) {
    //     const data = {
    //       code: decryptedData.Code,
    //       status: 200,
    //     };
    //     loggerRecord("error", data);
    //     alert(decryptedData.Message);
    //   } else {
    //     if (res.data) {
    //       const data = {
    //         code: decryptedData.Code,
    //         status: 200,
    //       };
    //       loggerRecord("success", data);
    //       return decryptedData;
    //     }
    //   }
    // }

    // console.log(res);

    // app.config.globalProperties.$Progress.finish(); // finish when a response is received
    //判斷前後端版本是否一致
    res.data.IsReload = false;
    console.log(res.data.Version);

    const version = import.meta.env.VITE_VERSION;
    if (res.data.Version != null && res.data.Version != undefined && res.data.Version != '') {
      if (res.data.Version != version) {
        res.data.IsReload = true;
      }
    }

    if (process.env.NODE_ENV == 'development') {
      res.data.IsReload = false;
    }
    useGlobalStore().loading = false;
    // useGlobalStore.loading = false;
    // console.log(res);

    return res;


  },
  (error) => {
    if (error && error.response) {
      useGlobalStore().loading = false;

      switch (error.response.status) {
        case 400:
          console.log(error.response);
          break;
        case 401:
          // alert("你的Token失效請重新登入");
          // encryptStorage.removeItem("UserAuthStore");
          encryptStorage.removeItem("Token");
          router.push({ name: "login" });
          console.log(error.response);
          break;
        default:
          console.log("攔截錯誤請求", error.response.status);
          return Promise.reject(error);
      }
    }
  }
);

export default axiosInstance;
