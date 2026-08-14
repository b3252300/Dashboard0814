<template>
  <DiagnosticTable class="mb-3" :list="tableData.DiagnosticProcedureList" :total="tableData.DiagnosticProcedureTotal" />
 
  <OTTable  :list="tableData.OtCathLabEndoList" :total="tableData.OtCathLabEndoTotal" />

</template>

<script setup>
import DataTable from 'datatables.net-vue3';
import DiagnosticTable from "@/components/procedure/DiagnosticTable.vue";
import OTTable from "@/components/procedure/OTTable.vue";
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
const tableData = reactive({ DiagnosticProcedureTotal: 0, DiagnosticProcedureList: [], OtCathLabEndoTotal: 0, OtCathLabEndoList: [] });













const CallDiagnosticApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_PROCEDURE, PostData);
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
      tableData.DiagnosticProcedureList = Data.DiagnosticProcedureList;
      tableData.DiagnosticProcedureTotal = Data.DiagnosticProcedureTotal;
      tableData.OtCathLabEndoList = Data.OtCathLabEndoList;
      tableData.OtCathLabEndoTotal = Data.OtCathLabEndoTotal;
    } else {
      console.log(Code);
    }
  }
}

CallDiagnosticApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.DailyDate = GetNowDateYYYYMMDD();

  CallDiagnosticApi();
});

</script>
