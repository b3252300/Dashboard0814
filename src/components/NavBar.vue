<template>
  <nav class="navbar navbar-expand-lg p-0">
    <div class="d-flex align-items-center w-100">
      <ul class="page_nav mb-2 mb-lg-0">
        <li v-if="SwitchableWard == 'true'" class="nav-item dropdown">
          <a
            class="nav-link room_name dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ CurrentStationName }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="station in StationList" :key="station.Code">
              <a
                class="dropdown-item"
                href="#"
                @click="ChangeStation(station)"
                >{{ station.Name }}</a
              >
            </li>
          </ul>
        </li>

        <li v-else class="nav-item">
          <a
            class="room_name nav-link no_arrow"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="none"
            aria-expanded="false"
          >
            {{ CurrentStationName }}
          </a>
        </li>

        <template v-if="routerName != 'selectWard'">
          <li class="nav-item">
            <li_navIcon>
              <template #img>
                <img
                  src="@/assets/images/NumberOfPatients.svg"
                  alt="Number of patients in ward/total ward beds"
                />
              </template>
              <template #badge>
                <div style="display: flex; flex-direction: row; gap: 8px">
                  {{ PatientsNumber }} / {{ TotalBedsNumber }}
                  <div v-if="TotalBlockedBedsNumber > 0">
                    ({{ TotalBlockedBedsNumber }})
                  </div>
                </div>
              </template>
            </li_navIcon>
          </li>
          <li class="nav-item">
            <li_navIcon>
              <template #img>
                <img
                  src="@/assets/images/PatientsArrive.svg"
                  alt="Estimated number of arriving patients"
                />
              </template>
              <template #badge>
                {{ ExpectedArrivePatientsNumber }}
              </template>
            </li_navIcon>
          </li>
          <li class="nav-item">
            <li_navIcon>
              <template #img>
                <img
                  src="@/assets/images/MealOrder/Discharging.svg"
                  alt="Number of patients being discharged/Number of patients who can leave the ward"
                />
              </template>
              <template #badge>
                {{ DischargedPatientsNumber }} /{{
                  CanDischargedPatientsNumber
                }}
              </template>
            </li_navIcon>
          </li>
        </template>
      </ul>

      <ul class="name_navbar" v-if="routerName != 'selectWard'">
        <li>
          <NavTitle>
            <template v-slot:item-title> Head Nurse </template>
            <template v-slot:item-name>
              {{ HeadNurseName }}
            </template>
          </NavTitle>
        </li>
        <li>
          <NavTitle>
            <template v-slot:item-title> Nurse Clinician </template>
            <template v-slot:item-name>
              {{ NurseClinicianName }}
            </template>
          </NavTitle>
        </li>
        <li>
          <NavTitle>
            <template v-slot:item-title> Team Leader </template>
            <template v-slot:item-name>
              {{ TeamLeaderName }}
            </template>
          </NavTitle>
        </li>
        <li>
          <NavTitle>
            <template v-slot:item-title> Nursing House Supervisor </template>
            <template v-slot:item-name>
              {{ HouseSupervisorName }}
            </template>
          </NavTitle>
        </li>
      </ul>

      <div v-if="showDeviceId">
        {{ deviceId }}
      </div>

      <div class="dateTime ms-auto">
        <span class="Time"> {{ clock.time }} </span>
        <span class="date"> {{ clock.date }}</span>
      </div>
    </div>

    <img
      class="nav_logo"
      src="@/assets/images/logo.png"
      alt="仁愛醫院"
      @click="ShowDeviceId"
    />
  </nav>

</template>

<script setup>
// import { loginApi } from '@/stores/login';//登入API
import li_navIcon from "@/components/navbar/li_navIcon.vue";
import NavTitle from "@/components/NavTitle.vue";
import { ref, reactive, watchEffect, onMounted } from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { localStorage } from "@/composable/localStorage";
import { useStorage } from "@/composable/useStorage";
import router from "@/router";
import { encryptStorage } from "@/stores/EncryptStorage";
import { useGlobalStore } from "@/stores/store";
import  Navbar  from  "@/utils/NavBar.js";
const { Data, Code } = Navbar();

const routerName = router.currentRoute.value.name;
const deviceId = localStorage.getItem("DeviceId");
const globalStore = useGlobalStore();

// pinia  登入
// import { storeToRefs  } from 'pinia'
// import { loginApi } from '@/stores/login';//登入API
// const loginView = loginApi();
// const { AuthorizeStationListText } = storeToRefs(loginView);

// localStorage.setItem("StationCode", "5360");

//頁頭時間
const clock = ref({
  time: "",
  date: "",
});
let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
setInterval(updateTime, 1000);
updateTime();

function updateTime() {
  let cd = new Date();
  // + zeroPadding(cd.getSeconds(), 2) 秒
  clock.value.time =
    zeroPadding(cd.getHours(), 2) /*時*/ +
    ":" +
    zeroPadding(cd.getMinutes(), 2); //分;
  //日 / 月 / 年 / 星期
  clock.value.date =
    zeroPadding(cd.getDate(), 2) /*日*/ +
    "/" +
    zeroPadding(cd.getMonth() + 1, 2) /*月*/ +
    "/" +
    zeroPadding(cd.getFullYear(), 4) /*年*/ +
    " " +
    week[cd.getDay()] /*星期*/;
}

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}

let deviceClick = 0;
const showDeviceId = ref(false);
function ShowDeviceId() {
  deviceClick++;
  if (deviceClick % 5 == 0) {
    showDeviceId.value = true;
  } else {
    showDeviceId.value = false;
  }
}

const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();
const StationCode = useStorage("StationCode");

const StationList = ref(JSON.parse(localStorage.getItem("StationList")));

// const StationList = ref([]);
// const CurrentStationCode = ref('5360');
const CurrentStationCode = ref(localStorage.getItem("StationCode"));
const CurrentStationName = ref(localStorage.getItem("StationName"));

const PatientsNumber = ref(0);
const TotalBedsNumber = ref(0);
const TotalBlockedBedsNumber = ref(0);
const ExpectedArrivePatientsNumber = ref(0);
const DischargedPatientsNumber = ref(0);
const CanDischargedPatientsNumber = ref(0);
const HeadNurseName = ref("");
const NurseClinicianName = ref("");
const TeamLeaderName = ref("");
const HouseSupervisorName = ref("");
const SwitchableWard = ref(localStorage.getItem("SwitchableWard"));

const DateText = GetNowDateTimeYYYYMMDDHHmm();

const PostData = reactive({
  StationCode: CurrentStationCode.value,
  DailyDateTime: DateText,
});

import SignalrHub from "@/composable/SignalrHub"; //导入hub

const ChangeStation = (station) => {
  PostData.StationCode = station.Code;
  PostData.DailyDate = GetNowDateTimeYYYYMMDDHHmm();
  watchEffect(() => {
    localStorage.setItem("StationCode", station.Code);
    localStorage.setItem("StationName", station.Name);

    SignalrHub.send(
      "Register",
      JSON.stringify({
        DeviceType: 1,
        DeviceId: localStorage.getItem("DeviceId"),
        IdentityData1: localStorage.getItem("StationCode"),
      })
    );
  });

  if (routerName == "selectWard") {
    router.push({ name: "home" });
    // localStorage.removeItem("StationList");
  } else {
    CallApi();
    globalStore.routeKey++;
    globalStore.headerKey++;
  }
};

// console.log(CurrentStationCode.value)
// console.log(PostData)

const CallApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_HEADER,
    PostData
  );
  // console.log(res);
  if (res != undefined) {
    // const { Data, Code, IsReload } = res.data;
    // console.log(Data);

    // if (IsReload) {
    //   location.reload();
    // }

    if (Code == "0") {
      CurrentStationCode.value = Data.CurrentStationCode;
      //CurrentStationCode如果不一致???
      // localStorage.setItem("StationCode", CurrentStationCode.value);
      PatientsNumber.value = Data.PatientsNumber;
      TotalBedsNumber.value = Data.TotalBedsNumber;
      TotalBlockedBedsNumber.value = Data.TotalBlockedBedsNumber;
      ExpectedArrivePatientsNumber.value = Data.ExpectedArrivePatientsNumber;
      DischargedPatientsNumber.value = Data.DischargedPatientsNumber;
      CanDischargedPatientsNumber.value = Data.CanDischargedPatientsNumber;
      HeadNurseName.value = Data.HeadNurseName;
      NurseClinicianName.value = Data.NurseClinicianName;
      TeamLeaderName.value = Data.TeamLeaderName;
      HouseSupervisorName.value = Data.HouseSupervisorName;
      StationList.value = Data.StationList;

      // SwitchableWard.value = Data.SwitchableWard;

      SignalrHub.send(
        "Register",
        JSON.stringify({
          DeviceType: 1,
          DeviceId: localStorage.getItem("DeviceId"),
          IdentityData1: CurrentStationCode.value,
        })
      );
    } else {
      console.log(res.data);
    }

    // console.log(res);
  }
};

if (routerName != "selectWard") {
  CallApi();
} else {
  CurrentStationName.value = "Select Ward";
}
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 4px 0.5rem 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1047;

  &:before {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #fff;
    filter: drop-shadow(0 2px 4px #101828);
    z-index: -1;
    opacity: 0.06;
  }
}

.nav_logo {
  margin-right: clamp(1rem, 2vw, 1.5rem);
  width: auto;
  height: 3.3125rem;
  @media screen and (max-width: 1600px) {
    font-size: clamp(1rem, 0.5vw, 1.5rem);
  }
  @media screen and (max-width: 1300px) {
    font-size: clamp(1rem, 0vw, 1.5rem);
  }
}

.dateTime {
  margin-right: clamp(1rem, 3vw, 2rem);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media screen and (max-width: 1600px) {
    margin-right: clamp(1rem, 2vw, 2rem);
  }

  .Time {
    color: #222222;
    font-size: 1.75rem;
    padding-right: 0.5rem;
    @media screen and (max-width: 1180px) {
      display: none;
    }
  }

  .date {
    font-size: 1rem;
    color: #222222;
    @media screen and (max-width: 1180px) {
      display: none;
    }
  }
}

.name_navbar {
  list-style: none;
  display: inline-flex;
  align-items: flex-start;
  margin: 0;
  padding-left: clamp(0.625rem, 3vw, 1.5rem);
  width: 46%;
  @media screen and (max-width: 1800px) {
    padding-left: clamp(0.625rem, 1vw, 1.5rem);
  }

  li {
    margin-right: clamp(0.625rem, 2vw, 2rem);
    width: calc(100% / 4);
  }
}

.room_name {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding: 0;
  padding-right: 0.5rem !important;
  color: #fff;
  background: transparent;
  border: none;
  white-space: nowrap;
  @media screen and (max-width: 1600px) {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
  @media screen and (max-width: 1300px) {
    font-size: clamp(1rem, 2vw, 2rem);
  }
  &.no_arrow::after {
    display: none;
  }

  &::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;

    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  &:focus {
    box-shadow: none;
  }
}

.page_nav {
  background: linear-gradient(to right, #1da254 0%, #25c269 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  padding-left: clamp(1rem, 3vw, 1.5rem);
  border-radius: 0 0 1.875rem 0;
  display: flex;
  align-items: center;
  list-style: none;
  min-height: 8vh;
  @media screen and (max-width: 1600px) {
    padding-left: clamp(1rem, 0.5vw, 1.5rem);
  }
  @media screen and (max-width: 1300px) {
    padding-left: clamp(1rem, 0vw, 1.5rem);
  }
  .nav-item {
    padding-right: clamp(0.37rem, 2vw, 1rem);
    > .nav-link {
      padding-right: 0;
    }
    @media screen and (max-width: 1600px) {
      padding-right: clamp(0.37rem, 0.5vw, 1rem);
    }
  }
}
</style>
