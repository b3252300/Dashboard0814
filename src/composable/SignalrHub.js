import * as signalr from "@microsoft/signalr";
import { guid } from "@/composable/guid";
import { useGlobalStore } from "@/stores/store";
import router from "@/router/index";
import { MsgBox } from "@/components/MsgBox.js";
import { provide, inject, ref } from "vue";
import refresh from "@/composable/refresh";
// const conn = new signalr.HubConnectionBuilder()
//     .withUrl(import.meta.env.VITE_APP_SIGNALR_URL)
//     .withAutomaticReconnect()
//     .build();

var conn = null;
const { pageRefresh } = refresh();
const close = (labNo) => {
  const msgBox = document.querySelector("#" + labNo);
  if (msgBox != null) {
    msgBox.remove();
  }
}

async function start() {
  try {
    await conn.start();

    conn.onclose(async (error) => {
      console.log("error", error);
      //斷線重連 error是空的話則是手動斷開不需要重連
      // if (!!error)
      await start();
    });

    conn.on("ClientMessage", (data) => {
      console.log(data);

      // console.log(useGlobalStore().headerKey);

      const routerName = router.currentRoute.value.name;
      const requestData = JSON.parse(data);
      const criticalLabReport = ref([]);
      /*/// <summary>要求電子白板重新整理</summary>
    DashboardRefreshAll = 20001,
    /// <summary>要求電子白板將指定的床號顯示為等待清潔人員的畫面</summary>
    DashboardDisplayHouseKeepingWaittingOnBed = 20101,
    /// <summary>要求電子白板顯示床位清潔中的畫面</summary>
    DashboardDisplayCleaningBed = 20102,
    /// <summary>要求電子白板顯示床位清潔完成的畫面</summary>
    DashboardDisplayCleaningDone = 20103,
    /// <summary>要求電子白板顯示檢核通過 床位空出的畫面</summary>
    DashboardDisplayAvailable = 20104,
    /// <summary>電子白板顯示病人提出需求－協助如廁</summary>
    DashboardNoticeToileting = 20105,
    /// <summary>電子白板顯示病人提出需求－點滴問題</summary>
    DashboardNoticeDripIssue = 20106,
    /// <summary>電子白板顯示病人提出需求－疼痛輔助</summary>
    DashboardNoticePainAssist = 20107,
    /// <summary>電子白板顯示病人提出需求－添加熱水</summary>
    DashboardNoticeRequestHotWater = 20108,
    /// <summary>電子白板顯示病人提出需求－整理/更換床單</summary>
    DashboardNoticeBedMaking = 20109,
    /// <summary>電子白板顯示病人提出需求－清潔服務</summary>
    DashboardNoticeHouseKeeping = 20110,
    /// <summary>電子白板顯示病人提出需求－客戶服務</summary>
    DashboardNoticeCustomerService = 20111,
    /// <summary>電子白板顯示危險值彈窗</summary>
    DashboardCritialLabReport = 21001,
    /// <summary>電子白板顯示-危險值彈窗關閉</summary>
    DashboardCritialLabReportClose = 21002,
    /// <summary>電子白板顯示-危險值彈窗關閉後彈出新視窗</summary>
    DashboardCritialLabReportRebuild = 21003,*/

      if (requestData.Category === 20001) {
        pageRefresh();
      } else if (requestData.Category === 21001) {
        MsgBox(
          requestData.Payload.LabNo,
          requestData.Payload.BedName,
          requestData.Payload.LabDateTime
        );

        //有初始值值要先把原本資料帶入，再加新的資料
        if (localStorage.getItem("CriticalLabReport")) {
          criticalLabReport.value = JSON.parse(localStorage.getItem("CriticalLabReport"));
        }

        criticalLabReport.value.push(requestData.Payload);
        localStorage.setItem("CriticalLabReport", JSON.stringify(criticalLabReport.value));

      } else if (requestData.Category === 21002) {
        close(requestData.Payload.LabNo);

        if (localStorage.getItem("CriticalLabReport")) {
          criticalLabReport.value = JSON.parse(localStorage.getItem("CriticalLabReport"));
          const index = criticalLabReport.value.findIndex((element) => element.LabNo == requestData.Payload.LabNo);
          if (index > -1) {
            criticalLabReport.value.splice(index, 1);
            localStorage.setItem("CriticalLabReport", JSON.stringify(criticalLabReport.value));
          }
          console.log(index);


        }

      } else if (requestData.Category === 21003) {
        close(requestData.Payload.LabNo);

        if (localStorage.getItem("CriticalLabReport")) {
          criticalLabReport.value = JSON.parse(localStorage.getItem("CriticalLabReport"));
          const index = criticalLabReport.value.findIndex((element) => element.LabNo == requestData.Payload.LabNo);
          if (index > -1) {
            criticalLabReport.value.splice(index, 1);
            localStorage.setItem("CriticalLabReport", JSON.stringify(criticalLabReport.value));
          }
        }

        MsgBox(
          requestData.Payload.LabNo,
          requestData.Payload.BedName,
          requestData.Payload.LabDateTime
        );

        //有初始值值要先把原本資料帶入，再加新的資料
        if (localStorage.getItem("CriticalLabReport")) {
          criticalLabReport.value = JSON.parse(localStorage.getItem("CriticalLabReport"));
        }

        criticalLabReport.value.push(requestData.Payload);
        localStorage.setItem("CriticalLabReport", JSON.stringify(criticalLabReport.value));

      } else {
        if (routerName == "home") {
          pageRefresh();
          console.log("signalr refresh Home");
        }
      }
    });

    console.log("signalr connected!!!");
    const DeviceId = localStorage.getItem("DeviceId");
    if (DeviceId == undefined) {
      localStorage.setItem("DeviceId", guid);
    }
    conn.send(
      "Register",
      JSON.stringify({
        DeviceType: 1,
        DeviceId: localStorage.getItem("DeviceId"),
        IdentityData1: localStorage.getItem("StationCode"),
      })
    );

    useGlobalStore().signalr = conn;
   
  } catch (err) {
    console.log(err);
    setTimeout(start, 10000); //重新連接
  }
}

async function getSignalrBaseUrl() {
  var signalrUrl = import.meta.env.VITE_APP_SIGNALR_URL;
  if (import.meta.env.VITE_READ_LOCAL_CONFIG == "true") {
    signalrUrl = inject("signalrUrl");
    if (
      signalrUrl == undefined ||
      signalrUrl == "" ||
      signalrUrl == "undefined"
    ) {
      var basePath = import.meta.env.BASE_URL || './';
      if (!basePath.endsWith('/')) basePath += '/';
      var configPath = basePath + "appsettings.json";

      const response = await fetch(configPath);
      const config = await response.json();
      provide("signalrUrl", config.signalrUrl);
      signalrUrl = config.signalrUrl;
    }

    if (
      signalrUrl == undefined ||
      signalrUrl == "" ||
      signalrUrl == "undefined"
    ) {
      signalrUrl = import.meta.env.VITE_APP_SIGNALR_URL;
    }
  }

  return signalrUrl;
}

const connect = async () => {
  console.log("connect ing");

  const SignalrUrl = await getSignalrBaseUrl();
  console.log("AAAAAAAAAAAAA : " + SignalrUrl);

  conn = new signalr.HubConnectionBuilder()
    .withUrl(SignalrUrl)
    .withAutomaticReconnect()
    .build();

  await start();
};

async function send(method, param) {
  try {
    if (conn && conn.state === signalr.HubConnectionState.Connected) {
      await conn.invoke(method, param);
    }
  } catch (err) {
    console.log(err);
  }
}

// const state = conn.state;
const state = null;

// conn.on("Receive", (data) => {
//     console.log(data);

//     // const routerName = router.currentRoute.value.name;

//     // if (routerName == "Critical") {
//     //     MsgBox("a");
//     // }
// });

const disconnect = async () => {
  await conn.stop();
};

export default { conn, connect, send, disconnect, state };
