<template>
  <div class="footerMenu row">
    <div class="footerMenu_list col-lg-auto col-md-9 col-sm-8 px-0">
      <div class="swiper_footer swiper">
        <div class="swiper-wrapper">
          <Btn_footer
            class="swiper-slide w-auto"
            v-for="i in title"
            :key="i.name"
            :lineLink="i.lineLink"
            :title="i.name"
          />
        </div>
      </div>
      <div class="btn_tool">
        <button type="button" class="button-footer-prev btn_none">
          <Svg_footer_left />
        </button>
        <button type="button" class="button-footer-next btn_none">
          <Svg_footer_right />
        </button>
      </div>
    </div>

    <ul class="footerTool col-auto px-0">
      <li
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <button class="btn_none" type="button">
          <Svg_notificationNum
            :NotificationTotal="tableData.NotificationTotal"
          />
        </button>
      </li>
      <li @click="Refresh()">
        <img src="@/assets/images/refresh.svg" alt="refresh" />
      </li>
      <li data-bs-toggle="modal" data-bs-target="#information">
        <img src="@/assets/images/info.svg" alt="information" />
      </li>

      <li
        class="btn_notification dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="@/assets/images/set.svg" alt="Logout" />

        <div class="position-fixed">
          <ul class="dropdown-menu">
            <li>
              <a
                class="btn_logout dropdown-item text-center"
                @click.prevent="myModal_show"
                >Logout</a
              >

              <div class="text_Version">
                {{ version }}
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <div
    class="siderbar_warn offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">
        Notification
        <span class="badge">{{ tableData.NotificationTotal }}</span>
      </h5>
    </div>
    <div class="offcanvas-body">
      <Card_Notification
        v-for="notification in tableData.NotificationList"
        :ward="notification.BedName"
        :code="notification.IpdPatientNeedsMasterCode"
        :text="notification.IpdPatientNeedsMasterName"
        :subtext="notification.IpdPatientNeedsDetailName"
        :time="GetDateTimeDDMMHHmm(new Date(notification.DemandCallDateTime))"
        :key="notificationKey"
      />
    </div>
    <div class="offcanvas-footer text-right">
      <img class="offcanvas-footer_btn"
        v-if="SortNumber == 1"
        style="float: right"
        @click="Sort(1)"
        :src="ButtonSort_1"
      />
      <img class="offcanvas-footer_btn"
        v-else-if="SortNumber == 2"
        style="float: right"
        @click="Sort(2)"
        :src="ButtonSort_2"
      />
    </div>
  </div>

  <Teleport to="body">
    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">Do you want to logout ?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-modal-no"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              @click="logout()"
              type="button"
              class="btn btn-modal-yes"
              data-bs-dismiss="modal"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
  <Icon_Information />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { ref, onMounted, reactive } from "vue";
import { useGlobalStore } from "@/stores/store";
import Card_Notification from "@/components/footer/Card_Notification.vue";
import Dropdown_menu from "@/components/Dropdown_menu.vue";
import Btn_footer from "@/components/footer/Btn_footer.vue";
import Svg_delete from "@/components/footer/Svg_delete.vue";
import Svg_footer_left from "@/components/footer/Svg_footer_left.vue";
import Svg_footer_right from "@/components/footer/Svg_footer_right.vue";
import Svg_notificationNum from "@/components/footer/Svg_notificationNum.vue";
import Icon_Information from "@/components/Icon_Information.vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import refresh from "@/composable/refresh";


import { encryptStorage } from "@/stores/EncryptStorage";
import router from "@/router";

import Modal from "bootstrap/js/dist/modal";
import ButtonSort_1 from "@/assets/images/Notification/ButtonSort1.svg";
import ButtonSort_2 from "@/assets/images/Notification/ButtonSort2.svg";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const version = ref(import.meta.env.VITE_VERSION);
const { pageRefresh } = refresh();
onMounted(async () => {
  var swiper = await new Swiper(".swiper_footer", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: false,
    freeMode: true,
    navigation: {
      nextEl: ".button-footer-next",
      prevEl: ".button-footer-prev",
    },
    on: {
      init: function () {
        checkNavigationVisibility();
      },

      resize: function () {
        checkNavigationVisibility();
      },
    },
  });

  function checkNavigationVisibility() {
    const swiperContainer = document.querySelector(".swiper_footer");

    if(swiperContainer){
      const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");  
      const btn_tool = document.querySelector(".btn_tool");

      if (swiperWrapper.scrollWidth <= swiperContainer.clientWidth) {
        btn_tool.style.display = "none";
      } else {
        btn_tool.style.display = "flex";
      }
    }
  }

  const nextFooterButton = document.querySelector(".button-footer-next");
  const prevFooterButton = document.querySelector(".button-footer-prev");

  nextFooterButton.addEventListener("click", () => {
    swiper.slideNext();
  });

  prevFooterButton.addEventListener("click", () => {
    swiper.slidePrev();
  });
});

const title = ref([
  {
    name: "Home",
    lineLink: "/home",
  },
  {
    name: "Bed Status",
    lineLink: "/bedStatus",
  },
  {
    name: "Care Team",
    lineLink: "/careteam",
  },
  {
    name: "Procedure",
    lineLink: "/procedure",
  },
  {
    name: "Alert",
    lineLink: "/alert",
  },
  {
    name: "Catheter and IV View",
    lineLink: "/catheter",
  },
  {
    name: "Blood Transfusion and Infusion",
    lineLink: "/blood",
  },
  {
    name: "Critical Lab Report",
    lineLink: "/critical",
  },
  {
    name: "On Call",
    lineLink: "/call",
  },
  {
    name: "Directory",
    lineLink: "/directory",
  },
  {
    name: "Meal Ordering",
    lineLink: "/mealOrder",
  },
  {
    name: "Badge",
    lineLink: "/badge",
  },
]);

const SortNumber = ref(2);
const { UseApiFunction } = useApi();
const { GetNowDateYYYYMMDD, GetDateTimeDDMMHHmm } = useDate();
const DateText = GetNowDateYYYYMMDD();
const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  DailyDateTime: DateText,
  DemandCallDateOrderType: 2,
});
const tableData = reactive({ NotificationTotal: 0, NotificationList: [] });
const notificationKey = ref(0);
const CallSideNotificationApi = async () => {
  //調整下一次要排序的方向
  if (SortNumber.value == 1) {
    SortNumber.value = 2;
    PostData.DemandCallDateOrderType = 2;
  } else if (SortNumber.value == 2) {
    SortNumber.value = 1;
    PostData.DemandCallDateOrderType = 1;
  }

  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_SideNotification,
    PostData
  );
  if (res != undefined) {
    const { Data, Code, IsReload } = res.data;

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      tableData.NotificationTotal = Data.NotificationTotal;
      tableData.NotificationList = Data.NotificationList;
    } else {
      console.log(Code);
    }
  }
};

CallSideNotificationApi();

function Refresh() {
  SortNumber.value = 2; //排序改為預設
  CallSideNotificationApi();
  notificationKey.value++;
  pageRefresh();

}

function Sort(SortType) {
  PostData.DemandCallDateOrderType = SortType;
  CallSideNotificationApi();
}

//提示logout跳窗
function logout() {
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

  calllogoutApi();
}

const modal = ref(null);
const myModal = ref(null);
onMounted(() => {
  myModal.value = new Modal(modal.value);
});

const myModal_show = () => {
  myModal.value.show();
};
</script>

<style lang="scss" scoped>
.footerMenu_list {
  display: flex;
  align-items: center;
  width: 90%;
  .swiper {
    margin-left: 0;
  }
}
.siderbar_warn {
  padding-bottom:3.35vw;
  padding-top: 4.1vw;
  background: #f2f4f7;
  box-shadow: -5px 0 4px rgba(51, 51, 51, 0.1);
  max-width: 18.25rem;
  width: 100%;
  z-index: 1046;

  .offcanvas-header {
    margin-top: 1.5rem;
    border-bottom: solid #98a2b3 thin;

    margin-left: 1rem;
    margin-right: 1rem;
  }
  #offcanvasRightLabel {
    color: #101828;
    font-weight: bolder;
    margin-bottom: 0;
    display: flex;
      align-items: center;
      justify-content: center;

    .badge {
      background: $bg_warn;
      border-radius: 100%;
      font-size: 0.9rem;
      width: 1.8rem;
      height: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.5rem;
    }
  }
  .offcanvas-footer {
    padding: 0.5rem;
    box-shadow: 0 -1px 3px rgba(16, 24, 40, 0.16);
    &_btn{
      width: 5rem;
      height: auto;
    }
  }

}

.footerMenu {
  background: #344054;
  padding: 0.62rem clamp(0.62rem, 2vw, 2rem);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1047;
  margin-left: 0;
  overflow: hidden;
  @media screen and (max-width: 1300px) {
    padding: 0.62rem 1rem;
  }
  .btn {
    display: inline-flex;
    margin-right: clamp(0.31rem, 8vw, 0.62rem);
  }
  @media (max-width: 1380px) {
    &_list {
      width: 86%;
    }
  }
  //   @media (max-width: 1100px) {
  //   &_list {
  //     width: 72%;
  //   }
  //  }
}
.footerTool {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-bottom: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 0.1rem;
    height: 1.1rem;
    background: #fff;
    margin-top: 0;
  }

  > li {
    padding: 0 clamp(0.37rem, 1vw, 0.5rem);
    position: relative;
    cursor: pointer;
    svg,
    img {
      width: 1.37rem;
      height: 1.37rem;
    }
    img {
      position: relative;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    &:focus:not(:focus-visible) {
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &:hover:before {
      background: #667085;
    }
    &:checked:before {
      background: #667085;
    }

    &:active:before {
      background: #475467;
    }
    &:before {
      content: "";
      transition: all 0.3s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 224%;
      margin-top: -0.9rem;
    }
  }
}
.btn_tool {
  position: relative;
  padding-left: 1rem;
  padding-right: 0;
  white-space: nowrap;

  .button-footer-prev,
  .button-footer-next {
    svg {
      width: 1.37rem;
      height: 1.37rem;
    }
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
}
.btn_notification {
  .position-fixed {
    right: 0;
    bottom: 0;
    height: 18.1vh;
    width: 12vw;
    z-index: 1038;
    pointer-events: none;
    @media screen and (max-width: 1800px) {
      width: 15vw;
    }
    @media screen and (max-width: 1300px) {
      width: 19vw;
    }
    @media screen and (max-width: 1280px) {
      width: 23vw;
    }
  }
  &.dropdown-toggle::after {
    display: none;
  }
  .dropdown-menu {
    pointer-events: all;
    position: fixed;
    transform: translate(0, -24%) !important;
    padding: 2rem 1rem;
    max-width: 17.4rem;
    width: 13.4rem;
    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.2);
    border-color: transparent;
    border-radius: $btn_radius_s $btn_radius_s 0 0;
    .btn_logout {
      border-radius: $btn_radius_s;
      @include primary();
      padding: 0.6rem 0.5rem;
    }
    .text_Version {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: #344054;
      text-align: center;
    }
  }
}
</style>
