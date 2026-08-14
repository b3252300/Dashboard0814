<template>
  <CatheterTable class="mb-3" :list="tableData.CatheterViewList" :total="tableData.CatheterViewTotal" />

  <IVTable class="mb-3" :list="tableData.IvViewList" :total="tableData.IvViewTotal" />
</template>


<script setup>
import CatheterTable from '@/components/catheter/CatheterTable.vue';
import IVTable from '@/components/catheter/IVTable.vue';
import { reactive, watch } from "vue";
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
const tableData = reactive({ CatheterViewTotal: 0, CatheterViewList: [], IvViewTotal: 0, IvViewList: [] });

const CallCatheterApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_CATHETER, PostData);
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
      tableData.CatheterViewList = Data.CatheterViewList;
      tableData.CatheterViewTotal = Data.CatheterViewTotal;
      tableData.IvViewList = Data.IvViewList;
      tableData.IvViewTotal = Data.IvViewTotal;
    } else {
      console.log(Code);
    }
  }
}

CallCatheterApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.DailyDate = GetNowDateYYYYMMDD();

  CallCatheterApi();
});
</script>