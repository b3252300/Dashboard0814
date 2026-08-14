<template>

  <main class="main_container container-fluid homeView">

    <div class="grid align-items-stretch">
      <Ward_card
        v-for="item in tableData.HomeInformationList"
        :class="GetEWSColor(parseInt(item.EwsLevel))"
        :notification="item.PatientNeedBell"
        :bedName="item.BedName"
        :acuity="item.AcuitySeverity"
        :day="GetDays(item.IpdPatientData, item.IpdPatientData)"
        :IsAvailable="item.IsAvailable"
        :IsBlocked="item.IsBlocked"
        :HaveReserveBed="item.HaveReserveBed"
        :IsHousekeeping="item.IsHousekeeping">
   
        <!--Housekeeping-->
        <template #content v-if="item.IsHousekeeping">
          <Card_Housekeeping
            :HaveReserveBed="item.HaveReserveBed"
            :IsolationStatus="
              GetIsolation(
                item.AlertDataDictionary.ISOLATION,
                item.AlertDataDictionary
              )
            "
            :Biohazard="
              GetBiohazard(
                item.AlertDataDictionary.BIOHAZARD,
                item.AlertDataDictionary
              )
            "
            :time="item.TimePointText"
            :message="item.HousekeepingRemindText"
          />
        </template>

        <!--Discharge-->
        <template #content v-else-if="item.IsDischarging">
          <Card_information
            :PayorStatus="item.IpdPatientData.PatientPayorStatus"
            :Insurance="item.IpdPatientData.InsuranceStatus"
            :PatientName="item.IpdPatientData.PatientName"
            :PrimaryDoctor="item.PrimaryDoctorName"
            :MRN="item.IpdPatientData.PatientId"
            :DOB="GetDateDDMMYYYY(new Date(item.IpdPatientData.BirthDate))"
            :Location="item.Location"
            :Gender="item.IpdPatientData.Sex"
            :IsDNR="item.IsDNR"
            :IsDIL="item.IsDIL"
            :HaveCompanion="item.IpdPatientData.HaveCompanion"
            :OtherDcotor="Object.keys(item.ResidencyDoctors).length"
            :CriticalLabReport="parseInt(item.CriticalLabReportHandleStatus)"
          />
          <Card_Discharging
            :time="item.TimePointText"
            :message="item.DischargingRemindText"
            :IsolationStatus="
              GetIsolation(
                item.AlertDataDictionary.ISOLATION,
                item.AlertDataDictionary
              )
            "
            :Biohazard="
              GetBiohazard(
                item.AlertDataDictionary.BIOHAZARD,
                item.AlertDataDictionary
              )
            "
          />
        </template>

        <!--TransOut-->
        <template #content v-else-if="item.IsTransOut">
          <Card_information
            :PayorStatus="item.IpdPatientData.PatientPayorStatus"
            :Insurance="item.IpdPatientData.InsuranceStatus"
            :PatientName="item.IpdPatientData.PatientName"
            :PrimaryDoctor="item.PrimaryDoctorName"
            :MRN="item.IpdPatientData.PatientId"
            :DOB="GetDateDDMMYYYY(new Date(item.IpdPatientData.BirthDate))"
            :Location="item.Location"
            :Gender="item.IpdPatientData.Sex"
            :IsDNR="item.IsDNR"
            :IsDIL="item.IsDIL"
            :HaveCompanion="item.IpdPatientData.HaveCompanion"
            :OtherDcotor="Object.keys(item.ResidencyDoctors).length"
            :CriticalLabReport="parseInt(item.CriticalLabReportHandleStatus)"
          />
          <Card_Discharging
            :time="item.TimePointText"
            :message="item.TransOutRemindText"
            :IsolationStatus="''"
            :Biohazard="false"
          />
        </template>

        <!--Occupied / Blocked / Available / Arrival in new bed-->
        <template #content v-else-if="item.HaveIpdPatientData">
          <Card_information
            :PayorStatus="item.IpdPatientData.PatientPayorStatus"
            :Insurance="item.IpdPatientData.InsuranceStatus"
            :PatientName="item.IpdPatientData.PatientName"
            :PrimaryDoctor="item.PrimaryDoctorName"
            :MRN="item.IpdPatientData.PatientId"
            :DOB="GetDateDDMMYYYY(new Date(item.IpdPatientData.BirthDate))"
            :Location="item.Location"
            :Gender="item.IpdPatientData.Sex"
            :IsDNR="item.IsDNR"
            :IsDIL="item.IsDIL"
            :HaveCompanion="item.IpdPatientData.HaveCompanion"
            :OtherDcotor="Object.keys(item.ResidencyDoctors).length"
            :CriticalLabReport="parseInt(item.CriticalLabReportHandleStatus)"
          />

          <div class="card_alert">
     
            <img
              v-if="
                showAlertImage('PAIN_SCORE') &&
                item.AlertDataDictionary.PAIN_SCORE &&
                item.AlertDataDictionary.PAIN_SCORE.Level == '1'
              "
              :src="PainScore[0].img"
            />
            <img
              v-else-if="
                showAlertImage('PAIN_SCORE') &&
                item.AlertDataDictionary.PAIN_SCORE &&
                item.AlertDataDictionary.PAIN_SCORE.Level == '2'
              "
              :src="PainScore[1].img"
            />
            <img
              v-else-if="
                showAlertImage('PAIN_SCORE') &&
                item.AlertDataDictionary.PAIN_SCORE &&
                item.AlertDataDictionary.PAIN_SCORE.Level == '3'
              "
              :src="PainScore[2].img"
            />
            <img
              v-else-if="
                showAlertImage('PAIN_SCORE') &&
                item.AlertDataDictionary.PAIN_SCORE &&
                item.AlertDataDictionary.PAIN_SCORE.Level == '4'
              "
              :src="PainScore[3].img"
            />

            <img
              v-if="showAlertImage('FALL_RISK') && item.AlertDataDictionary.FALL_RISK"
              :src="AlertStatus[11].img"
            />
            <img
              v-if="showAlertImage('OXYGEN_STATUS') && item.AlertDataDictionary.OXYGEN_STATUS"
              :src="AlertStatus[10].img"
            />
            <img
              v-if="showAlertImage('MOBILITY') && item.AlertDataDictionary.MOBILITY"
              :src="AlertStatus[12].img"
            />
           
  

            <img
              v-if="
                showAlertImage('BLOOD_TRANSFUSION') &&
                item.AlertDataDictionary.BLOOD_TRANSFUSION &&
                item.AlertDataDictionary.BLOOD_TRANSFUSION.Value == 'On going'
              "
              :src="animation[0].img"
            />
            <img
              v-else-if="
                showAlertImage('BLOOD_TRANSFUSION') &&
                item.AlertDataDictionary.BLOOD_TRANSFUSION &&
                item.AlertDataDictionary.BLOOD_TRANSFUSION.Value == 'Paused'
              "
              :src="AlertStatus[1].img"
            />

            <img
              v-if="showAlertImage('BIOHAZARD') && item.AlertDataDictionary.BIOHAZARD"
              :src="AlertStatus[8].img"
            />

            <img
              v-if="
                showAlertImage('ISOLATION') &&
                item.AlertDataDictionary.ISOLATION &&
                item.AlertDataDictionary.ISOLATION.Value == 'NORMAL'
              "
              :src="Isolation[1].img"
            />
            <img
              v-else-if="
                showAlertImage('ISOLATION') &&
                item.AlertDataDictionary.ISOLATION &&
                item.AlertDataDictionary.ISOLATION.Value == 'REVERSE'
              "
              :src="Isolation[0].img"
            />

            <img
              v-if="showAlertImage('BRADEN_SCORE') && item.AlertDataDictionary.BRADEN_SCORE"
              :src="AlertStatus[9].img"
            />
            <img
              v-if="showAlertImage('TUBE_FEEDING') && item.AlertDataDictionary.TUBE_FEEDING"
              :src="AlertStatus[0].img"
            />

            <img
              v-if="
                showAlertImage('INFUSION_PUMP_SYRING_PUMP') &&
                item.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP &&
                item.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Value ==
                  'On going'
              "
              :src="animation[1].img"
            />
            <img
              v-else-if="
                showAlertImage('INFUSION_PUMP_SYRING_PUMP') &&
                item.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP &&
                item.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Value ==
                  'Paused'
              "
              :src="AlertStatus[2].img"
            />
             <img
              v-if="showAlertImage('SPECIAL_PRECAUTION') && item.AlertDataDictionary.SPECIAL_PRECAUTION"
              :src="AlertStatus[3].img"
            />
             <img
              v-if="showAlertImage('SUICIDE_RISK') && item.AlertDataDictionary.SUICIDE_RISK"
              :src="AlertStatus[4].img"
            />

            <img
              v-if="showAlertImage('ALLERGY') && item.AlertDataDictionary.ALLERGY"
              :src="AlertStatus[5].img"
            />
           
           
            <img
              v-if="showAlertImage('RESTRAINT') && item.AlertDataDictionary.RESTRAINT"
              :src="AlertStatus[13].img"
            />
          </div>

          <div class="card_order">
            <iconOrder
              v-if="showAlertImage('NBM') && item.AlertDataDictionary.NBM"
              bgColor="bg_red"
              :svgImg="Order[0].img"
            />
            <iconOrder
              v-if="showAlertImage('NURSING_TASK') && item.AlertDataDictionary.NURSING_TASK"
              bgColor="bg_green"
              :svgImg="Order[1].img"
              :iconApi="parseInt(item.AlertDataDictionary.NURSING_TASK.Value)"
            />

            <iconOrder
              v-if="
                showAlertImage('CPOE_MedOrder') &&
                item.AlertDataDictionary.CPOE_MedOrder &&
                item.AlertDataDictionary.CPOE_MedOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[2].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_MedOrder.Level)"
            />
            <iconOrder
              v-else-if="
                showAlertImage('CPOE_MedOrder') &&
                item.AlertDataDictionary.CPOE_MedOrder &&
                item.AlertDataDictionary.CPOE_MedOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[2].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_MedOrder.Level)"
            />

            <iconOrder
              v-if="
                showAlertImage('CPOE_LabOrder') &&
                item.AlertDataDictionary.CPOE_LabOrder &&
                item.AlertDataDictionary.CPOE_LabOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[3].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_LabOrder.Level)"
            />
            <iconOrder
              v-else-if="
                showAlertImage('CPOE_LabOrder') &&
                item.AlertDataDictionary.CPOE_LabOrder &&
                item.AlertDataDictionary.CPOE_LabOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[3].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_LabOrder.Level)"
            />

            <iconOrder
              v-if="
                showAlertImage('CPOE_RadioOrder') &&
                item.AlertDataDictionary.CPOE_RadioOrder &&
                item.AlertDataDictionary.CPOE_RadioOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[4].img"
              :iconApi="
                parseInt(item.AlertDataDictionary.CPOE_RadioOrder.Level)
              "
            />
            <iconOrder
              v-else-if="
                showAlertImage('CPOE_RadioOrder') &&
                item.AlertDataDictionary.CPOE_RadioOrder &&
                item.AlertDataDictionary.CPOE_RadioOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[4].img"
              :iconApi="
                parseInt(item.AlertDataDictionary.CPOE_RadioOrder.Level)
              "
            />

            <iconOrder
              v-if="
                showAlertImage('CPOE_DiagOrder') &&
                item.AlertDataDictionary.CPOE_DiagOrder &&
                item.AlertDataDictionary.CPOE_DiagOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[5].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_DiagOrder.Level)"
            />
            <iconOrder
              v-if="
                showAlertImage('CPOE_DiagOrder') &&
                item.AlertDataDictionary.CPOE_DiagOrder &&
                item.AlertDataDictionary.CPOE_DiagOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[5].img"
              :iconApi="parseInt(item.AlertDataDictionary.CPOE_DiagOrder.Level)"
            />
          </div>
        </template>
      </Ward_card>
    </div>
  </main>
  <FooterList @IsClear="Clear" :key="footerlistKey" Page="Home">
    <template #btn_FooterIcon>
      <!-- 按鈕 -->
      <template v-for="item in tableData.StatisticsTotalList">
    
        <Btn_FooterIcon
          class="swiper-slide"
          v-if="item.Item == 'EWS_2'"
          :imgIcon="EWS[1].img"
          :num="item.Value"
          item="EWS_2"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'EWS_3'"
          :imgIcon="EWS[0].img"
          :num="item.Value"
          item="EWS_3"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'PAIN_SCORE'"
          :imgIcon="Filiter[1].img"
          :num="item.Value"
          item="PAIN_SCORE"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'FALL_RISK'"
          :imgIcon="AlertStatus[11].img"
          :num="item.Value"
          item="FALL_RISK"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'OXYGEN_STATUS'"
          :imgIcon="AlertStatus[10].img"
          :num="item.Value"
          item="OXYGEN_STATUS"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'MOBILITY'"
          :imgIcon="AlertStatus[12].img"
          :num="item.Value"
          item="MOBILITY"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'NBM'"
          :imgIcon="Order[0].img"
          bgColor="bg_red"
          :num="item.Value"
          item="NBM"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'CRITICAL_LAB_REPORT'"
          :imgIcon="Filiter[0].img"
          :num="item.Value"
          item="CRITICAL_LAB_REPORT"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'NURSING_TASK'"
          :imgIcon="Order[1].img"
          bgColor="bg_green"
          :num="item.Value"
          item="NURSING_TASK"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'CPOE_MedOrder'"
          :imgIcon="Filiter[3].img"
          :num="item.Value"
          item="CPOE_MedOrder"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'CPOE_LabOrder'"
          :imgIcon="Filiter[4].img"
          :num="item.Value"
          item="CPOE_LabOrder"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'CPOE_RadioOrder'"
          :imgIcon="Filiter[5].img"
          :num="item.Value"
          item="CPOE_RadioOrder"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'CPOE_DiagOrder'"
          :imgIcon="Filiter[6].img"
          :num="item.Value"
          item="CPOE_DiagOrder"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'BLOOD_TRANSFUSION'"
          :imgIcon="AlertStatus[1].img"
          :num="item.Value"
          item="BLOOD_TRANSFUSION"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'TUBE_FEEDING'"
          :imgIcon="AlertStatus[0].img"
          :num="item.Value"
          item="TUBE_FEEDING"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'INFUSION_PUMP_SYRING_PUMP'"
          :imgIcon="AlertStatus[2].img"
          :num="item.Value"
          item="INFUSION_PUMP_SYRING_PUMP"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'BIOHAZARD'"
          :imgIcon="AlertStatus[8].img"
          :num="item.Value"
          item="BIOHAZARD"
          @filiteritem="FilterClick"
        />
        <Btn_FooterIcon
          class="swiper-slide"
          v-else-if="item.Item == 'ISOLATION'"
          :imgIcon="Filiter[2].img"
          :num="item.Value"
          item="ISOLATION"
          @filiteritem="FilterClick"
        />
      </template>
    </template>
    <template #btnlist>
      <!-- 醫生和團隊篩選 -->
      <Btnlist
        :DoctorList="tableData.DoctorList"
        :TeamList="tableData.TeamList"
        :DoctorKey="DoctorKey"
        :DoctorTitle="DoctorTitle"
        :TeamKey="TeamKey"
        :TeamTitle="TeamTitle"
        :key="testkey"
        @get-doctor="GetDoctor"
        @get-team="GetTeam"
      />
    </template>
  </FooterList>
</template>

<script setup>
import FooterList from "../components/footerlist/FooterListLayout.vue";
import Btnlist from "@/components/footerlist/tool/Btnlist.vue";
import Btn_FooterIcon from "@/components/footerlist/tool/Btn_FooterIcon.vue";
import Ward_card from "@/components/home/Ward_card.vue";
import Card_information from "@/components/home/wardcard/Card_information.vue";
import Card_Housekeeping from "@/components/home/wardcard/Card_Housekeeping.vue";
import Card_Discharging from "@/components/home/wardcard/Card_Discharging.vue";
import { useGlobalStore } from "@/stores/store";
import  tableData  from  "@/utils/home.js";

//icon的js
import alert from "@/composable/icon_alert";
const { Order, PainScore, Isolation, AlertStatus, animation, Filiter, EWS } =  alert();

//order的icon 元件
import iconOrder from "@/components/order_Icon/iconOrder.vue";
import Companion from "@/assets/images/Companion.svg";

import {
  ref,
  reactive,
  registerRuntimeCompiler,
  onMounted,
  watchEffect,
} from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
const { UseApiFunction } = useApi();

import { btn_footerIcon } from '@/stores/btn_footerIcon';
const footerIcon =btn_footerIcon();

const globalStore = useGlobalStore();
const testkey = ref(0);
const footerlistKey = ref(0);
let SelectDoctor = [];
let DoctorKey = "0";
let DoctorTitle = "Doctor";
let SelectTeam = [];
let TeamKey = "0";
let TeamTitle = "Team";
const { GetNowDateTimeYYYYMMDDHHmm, GetDateDDMMYYYY } = useDate();
const DateTimeText = GetNowDateTimeYYYYMMDDHHmm();
const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // StationCode: 5360,
  DailyDateTime: DateTimeText,
  AlertsTextFilter: [],
  DoctorFilter: [],
  TeamFilter: [],
});
// const tableData = reactive({
//   HomeInformationList: [],
//   StatisticsTotalList: [],
//   DoctorList: [],
//   TeamList: [],
// });

const CallInformationApi = async () => {
  //如果有預存的條件，要將資料傳入
  PostData.AlertsTextFilter =footerIcon.selectedIndices;
  // console.log(PostData);
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_HOME_INFORMATIONDATA,
    PostData
  );
  if (res != undefined) {
    const { Data, Code, IsReload } = res.data;

    if (IsReload) {
      location.reload();
    }

    if (Code == "0" && Data) {
      if (Data.HomeInformationList) tableData.HomeInformationList = Data.HomeInformationList;
      if (Data.StatisticsTotalList) tableData.StatisticsTotalList = Data.StatisticsTotalList;
      if (Data.DoctorList && Data.DoctorList.length > 0) {
        tableData.DoctorList = Data.DoctorList;
        if (tableData.DoctorList[0].Code !== "ALL") {
          tableData.DoctorList.unshift({ Code: "ALL", Name: "ALL" });
        }
      }
      if (Data.TeamList && Data.TeamList.length > 0) {
        tableData.TeamList = Data.TeamList;
        if (tableData.TeamList[0].Code !== "ALL") {
          tableData.TeamList.unshift({ Code: "ALL", Name: "ALL" });
        }
      }
    } else {
      console.log(Code);
    }
  }
};




if (globalStore.alertFilter.length > 0) {
  PostData.AlertsTextFilter = globalStore.alertFilter;
}
if (Object.keys(globalStore.doctorFilter).length > 0) {
  PostData.DoctorFilter = globalStore.doctorFilter.Select;
  SelectDoctor = globalStore.doctorFilter;
  DoctorKey = SelectDoctor.Code;
  DoctorTitle = SelectDoctor.Name;
}
if (Object.keys(globalStore.teamFilter).length > 0) {
  PostData.TeamFilter = globalStore.teamFilter.Select;
  SelectTeam = globalStore.teamFilter;
  TeamKey = SelectTeam.Code;
  TeamTitle = SelectTeam.Name;
}

CallInformationApi();

function GetEWSColor(ByEWS) {
  if (ByEWS == 2) {
    return "g-col-2 bg_EWS_5-6";
  } else if (ByEWS == 3) {
    return "g-col-2 bg_EWS_7";
  } else {
    return "g-col-2";
  }
}

function GetDays(ExistIpdPatientData, ByDays) {
  if (ExistIpdPatientData != null) {
    return parseInt(ByDays.IpdDays);
  } else {
    return 0;
  }
}

//後端只會回傳要顯示的Attribute(不用判斷Visible)
function GetIsolation(ExistIsolation, ByAlertDataDictionary) {
  if (ExistIsolation) {
    return ByAlertDataDictionary.ISOLATION.Value;
  } else {
    return "";
  }
}

function GetBiohazard(ExistBiohazard, ByAlertDataDictionary) {
  if (ExistBiohazard) {
    return ByAlertDataDictionary.BIOHAZARD.Visible;
  } else {
    return false;
  }
}

const showAlertImage = (alertKey) => {
  if (!globalStore.alertFilter || globalStore.alertFilter.length === 0) {
    return true;
  }
  const cardAlertFilterKeys = [
    "PAIN_SCORE",
    "FALL_RISK",
    "OXYGEN_STATUS",
    "MOBILITY",
    "NBM",
    "CPOE_MedOrder",
    "BLOOD_TRANSFUSION",
    "BIOHAZARD",
    "ISOLATION",
    "TUBE_FEEDING",
    "INFUSION_PUMP_SYRING_PUMP",
    "BRADEN_SCORE",
    "SPECIAL_PRECAUTION",
    "SUICIDE_RISK",
    "ALLERGY",
    "RESTRAINT",
    "NURSING_TASK",
    "CPOE_LabOrder",
    "CPOE_RadioOrder",
    "CPOE_DiagOrder",
    "CRITICAL_LAB_REPORT",
  ];
  const hasCardAlertFilter = globalStore.alertFilter.some((filter) => {
    console.log(filter, "filter");
    return cardAlertFilterKeys.includes(filter);
  });

console.log(hasCardAlertFilter, "hasCardAlertFilter")
  if (!hasCardAlertFilter) {
    return true;
  }
  return globalStore.alertFilter.includes(alertKey);
};

//篩選條件
const FilterClick = (value) => {
  // console.log(value);
  footerlistKey.value++;
  PostData.AlertsTextFilter = value;
  localStorage.setItem("AlertFilter", JSON.stringify(value));
  CallInformationApi();
};

const GetDoctor = (value) => {
  PostData.DoctorFilter = value.Select;
  localStorage.setItem("DoctorFilter", JSON.stringify(value));
  CallInformationApi();
  DoctorKey = value.Code;
  DoctorTitle = value.Name;
};

const GetTeam = (value) => {
  PostData.TeamFilter = value.Select;
  localStorage.setItem("TeamFilter", JSON.stringify(value));
  CallInformationApi();
  TeamKey = value.Code;
  TeamTitle = value.Name;
};

const Clear = (value) => {
  if (value == true) {
    footerlistKey.value++;
    PostData.AlertsTextFilter = [];
    PostData.DoctorFilter = [];
    PostData.TeamsFilter = [];
    DoctorKey = "0";
    DoctorTitle = "Doctor";
    TeamKey = "0";
    TeamTitle = "Team";
    CallInformationApi();
    testkey.value++;
    globalStore.alertFilter = [];
    globalStore.doctorFilter = {};
    globalStore.teamFilter = {};
  }
};

onMounted(() => {
  if (localStorage.getItem("DoctorFilter")) {
    localStorage.removeItem("DoctorFilter");
  }

  if (localStorage.getItem("TeamFilter")) {
    localStorage.removeItem("TeamFilter");
  }

  if (localStorage.getItem("AlertFilter")) {
    localStorage.removeItem("AlertFilter");
  }
});

/////////左右箭頭隱藏
//icon 總寬度

//   const hiddenArrow = () => {
//   const len =  tableData.StatisticsTotalList.length; // 按鈕總數量
//   const footer_icon_dom = document.querySelectorAll(".swiper_list .swiper-slide");
//   let total = 0;

//   footer_icon_dom.forEach((item) => {
//     total += item.offsetWidth;
//   });

//   const width = document.querySelector(".iconlist .swiper_list").clientWidth;  // Viewport width
//   const buttonArrow = document.querySelector(".swiper_custom_btn"); // Arrow

//   // If viewport width is greater than or equal to total icon width, hide the button
//   if (width >= total) {
//     buttonArrow.style.display = "none";
//   } else {
//     buttonArrow.style.display = "flex";
//   }
// };

// onMounted(() => {

//   watchEffect(()=>{
//     hiddenArrow();
//   window.addEventListener("resize", hiddenArrow);
//   });

// });
</script>

<style lang="scss">
.container-home {
  background-color: #f2f4f7;
  padding-bottom: 10rem !important;
}

.homeView {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

$card_order_img: 100%;
.card_order {
  .icon_circle {
    width: $card_order_img;
    height: $card_order_img;
    padding: 0.1vw;
    margin-bottom: 0.5rem;
    // @media screen and (max-width:1300px) {
    //   width:$card_order_img_s;
    //   height:$card_order_img_s;
    // }
    .icon_style .num {
      transform: translate(30%, 0%) !important;
    }
  }
}
</style>
<style lang="scss" scoped>
// $num:15.6vw;
.grid {
  display: grid;
  grid-gap: 0.833vw;
  // grid-template-columns: repeat(6, $num);
  // grid-template-rows: calc($num / 0.92);
  grid-template-columns: repeat(var(--bs-columns, 12), 1fr);

  // @media screen and (max-width: 1786px) {
  //   grid-template-columns: repeat(var(--bs-columns, 10), 1fr);
  // }
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(var(--bs-columns, 10), 1fr);
  }
  @media screen and (max-width: 1179px) {
    grid-template-columns: repeat(var(--bs-columns, 8), 1fr);
  }
}
.grid .g-col-2 {
  grid-column: auto / span 2;
}

.card_frame {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

$card_alert_img: 100%;
// $card_alert_img_s: 1.75rem;

$bs-columns: $card_alert_img;
.card_alert {
  display: grid;
  grid-template-columns: repeat(var(--bs-columns, 14), 1fr);
  grid-gap: 0.4rem 0.2vw;
  margin-bottom: 0.65rem;
  height: 4.5rem;
  > img {
    width: $card_alert_img;
    height: auto;
    border: solid #eaecf0 thin;
    border-radius: $border_radius_s;
    padding: 0;
    grid-column: auto / span 2;
    //   @media screen and (max-width: 1475px) {
    //     width: $card_alert_img_s;
    //     height: $card_alert_img_s;
    //  }
  }
}

.card-title {
  margin-bottom: 0.6rem;
}

$card_order_img: 100%;
.card_order {
  display: grid;
  grid-template-columns: repeat(var(--bs-columns, 12), 1fr);
  grid-gap: 0.4rem 0.625vw;
  margin-top: auto;
  margin-bottom: 0.5rem;
  > .icon_style {
    grid-column: auto / span 2;
  }
}
</style>
