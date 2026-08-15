import axiosInstance from "@/axios/interceptors";
import { encryptStorage } from '@/stores/EncryptStorage';
import { provide, inject } from "vue";
// import axios from "axios";

export default function useApi() {
  const GetApiRootUrl = async () => {
    var apiRootUrl = import.meta.env.VITE_APP_API;
    if (import.meta.env.VITE_READ_LOCAL_CONFIG == "true") {
      apiRootUrl = inject("apiRootUrl");
      if (apiRootUrl == undefined || apiRootUrl == "" || apiRootUrl == "undefined") {
        var basePath = import.meta.env.BASE_URL || './';
        if (!basePath.endsWith('/')) basePath += '/';
        var configPath = basePath + "appsettings.json";

        const response = await fetch(configPath);
        const config = await response.json();
        provide("apiRootUrl", config.apiUrl);
        apiRootUrl = config.apiUrl;
      }

      if (apiRootUrl == undefined || apiRootUrl == "" || apiRootUrl == "undefined") {
        apiRootUrl = import.meta.env.VITE_APP_API;
      }
    }

    return apiRootUrl;
  };

  const GetFileUrl = async () => {
    let apiRootUrl = await GetApiRootUrl();
    let FileToken = encryptStorage.getItem("FileToken");
    let FileUrl = apiRootUrl + '/File/' + FileToken + '/';

    return FileUrl;
  };

  const UseApiFunction = async (path, data) => {

    var apiRootUrl = await GetApiRootUrl();

    // const userToken = "123";
    const userToken = encryptStorage.getItem("Token");
    const deviceId = localStorage.getItem("DeviceId");
    const version = import.meta.env.VITE_VERSION;
    try {
      const requestData = {
        Token: userToken,
        Data: data,
        DeviceId: deviceId,
        Version: version,
      };

      // const apiPathUrl = import.meta.env.VITE_APP_API + path;
      const apiPathUrl = path;
      const res = await axiosInstance.post(apiRootUrl + apiPathUrl, requestData);
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    UseApiFunction,
    GetApiRootUrl,
    GetFileUrl
  };
}