<template>
  <NurseTable class="mb-3" :list="CurrentShiftNurseDataList" :title="CurrentShiftData" />
  <NurseTable class="mb-3" :list="NextShiftNurseDataList" :title="NextShiftData" />
  <DoctorTable :list="DoctorShiftDataList" :title="DoctorShiftData" />

</template>

<script setup>
import NurseTable from '@/components/careteam/NurseTable.vue';
import DoctorTable from '@/components/careteam/DoctorTable.vue';
import { ref, reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { useStorage } from "@/composable/useStorage";

const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();

const StationCode = useStorage("StationCode");
const DateText = GetNowDateTimeYYYYMMDDHHmm();

const CurrentShiftData = ref('');
const CurrentShiftNurseDataList = ref([]);
const NextShiftData = ref('');
const NextShiftNurseDataList = ref([]);
const DoctorShiftData = ref('');
const DoctorShiftDataList = ref([]);




const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // SearchDateTime: '2024-01-15 08:01'
  SearchDateTime: DateText
});
// console.log(DateText);
// console.log(PostData);

const CallNurseApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_CARETEAM_INCHARGENURSE, PostData);
  if (res != undefined) {
    const {
      Data,
      Code,
      IsReload
    } = res.data;
    console.log(Data);

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      CurrentShiftData.value = Data.CurrentShiftData.Date + '(' + Data.CurrentShiftData.DayOfWeek + ') ' + Data.CurrentShiftData.ShiftName + ' ' + Data.CurrentShiftData.ShiftBeginTime + ' - ' + Data.CurrentShiftData.ShiftEndTime;
      CurrentShiftNurseDataList.value = Data.CurrentShiftNurseDataList;
      NextShiftData.value = Data.NextShiftData.Date + '(' + Data.NextShiftData.DayOfWeek + ') ' + Data.NextShiftData.ShiftName + ' ' + Data.NextShiftData.ShiftBeginTime + ' - ' + Data.NextShiftData.ShiftEndTime;
      NextShiftNurseDataList.value = Data.NextShiftNurseDataList;
    } else {
      console.log(Code);
    }
  }
}

const CallDoctorApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_CARETEAM_DOCTOR, PostData);
  if (res != undefined) {
    const {
      Data,
      Code,
    } = res.data;
    console.log(Data);

    if(Data.isReload){
      location.reload();
    }

    if (Code == "0") {
      DoctorShiftData.value = Data.Date + '(' + Data.DayOfWeek + ')';
      DoctorShiftDataList.value = Data.DoctorList;


    } else {
      console.log(Code);
    }
  }
}

const CallApi = () => {
  CallNurseApi();
  CallDoctorApi();
}

CallApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.SearchDateTime = GetNowDateTimeYYYYMMDDHHmm();

  CallApi();
});

</script>