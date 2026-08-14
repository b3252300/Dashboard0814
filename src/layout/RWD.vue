<template>
  <Loading />
  
  <div :class="['main_width', pathName]" :style="[header_h, footer_h]">
    <UrgentModal ref="XsModal" title="Critical Lab Report" message="701A" />

    <NavBar :key="globalStore.headerKey" />
    <div v-show="idleShow == 'true'">
      {{ idledFor }}
    </div>

    <RouterView :key="globalStore.routeKey" />
    <FooterMenu :key="globalStore.footerKey" />
  </div>
  <vue-progress-bar></vue-progress-bar>

  <!-- Modal -->
  <Teleport to="body">
    <div
      class="modal fade"
      id="IdleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> -->
          <div class="modal-body">
            Automatically Logout.<br />
            You have been logged out due to inactivity.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-modal-yes"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import FooterMenu from "../components/FooterMenu.vue";
import refresh from "@/composable/refresh";
import { reactive, onUnmounted, ref, computed } from "vue";

// import VueProgressBar from 'vue-progressbar'

import { useGlobalStore } from "@/stores/store";
import Loading from "@/components/Loading.vue";

import { Modal } from "bootstrap";

import { MsgBox } from "@/components/MsgBox.js";

import useApi from "@/composable/useApi";
const { UseApiFunction } = useApi();

//取得當前頁面的路由名稱
import { useRoute } from "vue-router";
const route = useRoute();
const pathName = ref(null);
const { pageRefresh } = refresh();
watchEffect(() => {
  pathName.value = `container-${route.name}`;
});

const globalStore = useGlobalStore();
// console.log(globalStore)
const Refresh = () => {
  pageRefresh();
};

globalStore.loading = true;
const timer = setInterval(Refresh, import.meta.env.VITE_REFRESH_TIME_MS);
timer;

const criticalLabReport = ref([]);
if (localStorage.getItem("CriticalLabReport")) {
  criticalLabReport.value = JSON.parse(
    localStorage.getItem("CriticalLabReport")
  );
  criticalLabReport.value.forEach((element) => {
    MsgBox(element.LabNo, element.BedName, element.LabDateTime);
  });
}



import { watch, watchEffect } from "vue";
import { useCounter, useIdle, useTimestamp } from "@vueuse/core";
import { encryptStorage } from "@/stores/EncryptStorage";
import router from "@/router";

const { inc, count } = useCounter();
const now = useTimestamp({ interval: 1000 });
const { idle, lastActive, reset } = useIdle(
  parseInt(import.meta.env.VITE_IDLE_TIME_MS)
);
// console.log(count.value); // true or false
// console.log(lastActive.value); // true or false
const idleShow = import.meta.env.VITE_SHOW_UDLE_VALUE;
const PostData = reactive({});

const calllogoutApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_LOGOUT,
    PostData
  );
  if (res != undefined) {
    const { Data, Code } = res.data;
    console.log(Code + "=logout");
    if (Code == "0") {
      encryptStorage.removeItem("Token");
      localStorage.removeItem("StationCode");
      localStorage.removeItem("DeviceId");
      localStorage.removeItem("StationName");
      localStorage.removeItem("SwitchableWard");
      localStorage.removeItem("StationList");
      localStorage.removeItem("PIXELS1024");
      router.push({ name: "login" });
    } else {
      console.log(Code);
    }
  }
};

const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000)
);

watch(idle, (idleValue) => {
  const isSwitchable = localStorage.getItem("SwitchableWard") || "false";
  console.log(isSwitchable);
  console.log(idleValue);
  console.log(idle.value);
  // console.log(count.value);

  if (idleValue) {
    inc();
    console.log(count.value);

    if (isSwitchable == "true") {
      calllogoutApi();
      // encryptStorage.removeItem("Token");
      router.push({ name: "login" });
      //提示logout跳窗
      new Modal(document.getElementById("IdleModal")).show();
      console.log("call logout api");
    }
    // reset()
  }
});

//緊急彈跳視窗
import UrgentModal from "@/components/UrgentModal.vue";
const XsModal = ref(null);

onUnmounted(() => {
  clearInterval(timer);
});

//全域動態style 控制
import { styledynamic } from "@/stores/style";
// pinia
import { storeToRefs } from "pinia";
const styledynamicView = styledynamic();
const { header_h, footer_h, footerlist_h } = storeToRefs(styledynamicView);
</script>

<style lang="scss" scoped>
.main_width {
  min-width: 1024px;
  min-height: 100vh;
  padding-top: calc(3.48vw + 1rem);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 1300px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.slide-fade-enter-from {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all, 1.3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 1;
}

@media (min-width: 1024px) {
}
</style>
