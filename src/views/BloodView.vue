<template>
  <BloodTable class="mb-3"  :list="tableData.BloodTransfusionList" :total="tableData.BloodTransfusionTotal" />
  <IVDTable class="mb-3"  :list="tableData.InfusionIVDList" :total="tableData.InfusionIVDTotal" />

</template>

<script setup>
import BloodTable from '@/components/blood/BloodTable.vue';
import IVDTable from '@/components/blood/IVDTable.vue';
import { reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { useStorage } from "@/composable/useStorage";

const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();
const StationCode = useStorage("StationCode");
const tableData = reactive({ BloodTransfusionTotal: 0, BloodTransfusionList: [], InfusionIVDTotal: 0, InfusionIVDList: [] });





const DateTimeText = GetNowDateTimeYYYYMMDDHHmm();
const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  DailyDate: DateTimeText
});

const CallBloodApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_BLOOD, PostData);
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
      tableData.BloodTransfusionList = Data.BloodTransfusionList;
      tableData.BloodTransfusionTotal = Data.BloodTransfusionTotal;
      tableData.InfusionIVDList = Data.InfusionIVDList;
      tableData.InfusionIVDTotal = Data.InfusionIVDTotal;
    } else {
      console.log(Code);
    }
  }
}

CallBloodApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.DailyDate = GetNowDateYYYYMMDD();

  CallBloodApi();
});

</script>