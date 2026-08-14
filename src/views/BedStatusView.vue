<template>
  <div class="row">

    <div>
      <BedBlock :list="BedStatustableData.List"/>
    </div>
    <div class="col-lg-6">
     
      <DischargeTable
        :total="DischargetableData.DischargeTotal"
        :list="DischargetableData.List"
      >
      </DischargeTable>
    </div>
    <div class="col-lg-6">
      <AdmissionTable
        :total="AdmissiontableData.AdmissionTotal"
        :list="AdmissiontableData.List"
      >
      </AdmissionTable>
    </div>
</div>
<FooterList @IsClear="Clear" :key="footerlistKey" Page="BedStatus">
  <template #btn_FooterIcon>
    <!-- 按鈕 -->
      <Btn_BedFooterText class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Occupied" key="Occupied" bgColor="bg_Occupied" content="Occupied" :num="BedStatustableData.BedStatusTotalList.Occupied" item="Occupied" @filiteritem="FilterClick" />
      <Btn_BedFooterText class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Available" key="Available" bgColor="bg_Available" content="Available" :num="BedStatustableData.BedStatusTotalList.Available" item="Available" @filiteritem="FilterClick" />
      <Btn_BedFooterText class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Discharging" key="Discharging" bgColor="bg_Discharging" content="Discharging" :num="BedStatustableData.BedStatusTotalList.Discharging" item="Discharging" @filiteritem="FilterClick" />
      <Btn_BedFooterText class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Housekeeping" key="Housekeeping" bgColor="bg_Housekeeping" content="Housekeeping" :num="BedStatustableData.BedStatusTotalList.Housekeeping" item="Housekeeping" @filiteritem="FilterClick" />
      <Btn_BedFooterText class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Blocked" key="Blocked" bgColor="bg_Blocked" content="Blocked" :num="BedStatustableData.BedStatusTotalList.Blocked" item="Blocked" @filiteritem="FilterClick" />
      <Btn_BedFooterIcon class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.Isolation" key="Isolation" :imgIcon="Filiter[2].img" :num="BedStatustableData.BedStatusTotalList.Isolation" item="Isolation" @filiteritem="FilterClick" />
      <Btn_BedFooterIcon class="swiper-slide" v-if="BedStatustableData.BedStatusTotalList.BookingBed" key="BookingBed" :imgIcon="AlertStatusDefault[5].img" :num="BedStatustableData.BedStatusTotalList.BookingBed" item="BookingBed" @filiteritem="FilterClick" />
    </template>
  </FooterList>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import Btn_BedFooterText from "@/components/footerlist/tool/Btn_BedFooterText.vue";
import Btn_BedFooterIcon from "@/components/footerlist/tool/Btn_BedFooterIcon.vue";
import TableScroll from "@/components/TableScroll.vue";
import DischargeTable from "@/components/bedstatus/DischargeTable.vue";
import BedBlock from "@/components/bedstatus/BedBlock.vue";
import AdmissionTable from "@/components/bedstatus/AdmissionTable.vue";
import FooterList from "../components/footerlist/FooterListLayout.vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { useGlobalStore } from "@/stores/store";
//icon的js
import alert from "@/composable/icon_alert";
const { Filiter, AlertStatusDefault } = alert();
const footerlistKey = ref(0);
const { UseApiFunction } = useApi();
const { GetNowDateYYYYMMDD } = useDate();
const DateText = GetNowDateYYYYMMDD();
const globalStore = useGlobalStore();
//取得床位資訊
const BedStatusPostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // StationCode: "6A",
  BedStatusTextFilter: [],
});
const BedStatustableData = reactive({ List: [], BedStatusTotalList: [] });

const CallBedStatusApi = async () => {

  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_BEDSTATUS_INFORMATIONDATA,
    BedStatusPostData
  );
  if (res != undefined) {
    const { Data, Code, IsReload } = res.data;

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      BedStatustableData.List = Data.List;
      BedStatustableData.BedStatusTotalList = Data.BedStatusTotalList;
    } else {
      console.log(Code);
    }
  }
};

CallBedStatusApi();

if (globalStore.bedStatusFilter.length > 0) {
  BedStatusPostData.BedStatusTextFilter = globalStore.bedStatusFilter;
}

//取得轉出/出院日日誌資料
const DischargePostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // StationCode: 5360,
  DailyDate: DateText,
  ShiftCode: "",
});
const DischargetableData = reactive({ DischargeTotal: 0, List: [] });

const CallDischargeApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_BEDSTATUS_GETDISCHARGE,
    DischargePostData
  );
  if (res != undefined) {
    const { Data, Code } = res.data;

    if(Data.isReload){
      location.reload();
    }

    if (Code == "0") {
      DischargetableData.DischargeTotal = Data.DischargeTotal;
      DischargetableData.List = Data.List;
    } else {
      console.log(Code);
    }
  }
};

CallDischargeApi();

//取得轉入/入院日誌資料
const AdmissionPostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // StationCode: 5260,
  DailyDate: DateText,
  ShiftCode: "",
});
const AdmissiontableData = reactive({ AdmissionTotal: 0, List: [] });

const CallAdmissionApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_BEDSTATUS_ADMISSION,
    AdmissionPostData
  );
  if (res != undefined) {
    const { Data, Code } = res.data;

    if(Data.isReload){
      location.reload();
    }

    if (Code == "0") {
      AdmissiontableData.AdmissionTotal = Data.AdmissionTotal;
      AdmissiontableData.List = Data.List;
    } else {
      console.log(Code);
    }
  }
};

CallAdmissionApi();

//篩選條件
const FilterClick = (value) => {
  console.log(value, "value");
  footerlistKey.value++;
  BedStatusPostData.BedStatusTextFilter = value;
  localStorage.setItem("BedStatusFilter", JSON.stringify(value));
  CallBedStatusApi();
};

onMounted(() => {
  if (localStorage.getItem("BedStatusFilter")) {
    localStorage.removeItem("BedStatusFilter");
  }
});

//清除時刷新頁面
const Clear = (value) => {
  if (value == true) {
    footerlistKey.value++;
    BedStatusPostData.BedStatusTextFilter = [];
    CallBedStatusApi();
    globalStore.bedStatusFilter = [];
  }
};
</script>
<style lang="scss">
.container-bedstatus {
    padding-bottom: 8rem !important;
}

</style>