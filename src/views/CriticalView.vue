<template>

  <CriticalTable :list="tableData.CriticalLabReportList" :total="tableData.CriticalLabReportTotal" />




</template>

<script setup>
// import RWD from '../layout/RWD.vue';
import CriticalTable from '@/components/critical/CriticalTable.vue';
import { ref, reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { useStorage } from "@/composable/useStorage";





const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();
const StationCode = useStorage("StationCode");

const DateTimeText = GetNowDateTimeYYYYMMDDHHmm();

const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  DailyDate: DateTimeText
});

const tableData = reactive({ CriticalLabReportTotal: 0, CriticalLabReportList: [] });


const CallApi = async () => {
  // localStorage.setItem("Token", "VRNlXLfMC616O7p4SnTeblrIS3wV4u");

  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_CRITICAL, PostData);
  if (res != undefined) {
    const {
      Data,
      Code,
      IsReload
    } = res.data;

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      tableData.CriticalLabReportList = Data.CriticalLabReportList
      tableData.CriticalLabReportTotal = Data.CriticalLabReportTotal
    } else {
      console.log(res.data);
    }
  }
}

CallApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.DailyDate = GetNowDateYYYYMMDD();

  CallApi();

});


// import SignalrHub from '@/composable/SignalrHub'; //导入hub

// SignalrHub.send("TestInvoke","456");

</script>