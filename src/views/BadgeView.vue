<template>
  <BadgeTable :column="tableData.Columns" :list="tableData.List" :ApiRootUrl="tableData.apiRootUrl" :FileUrl="tableData.fileUrl" />
</template>


<script setup>
import BadgeTable from '@/components/badge/BadgeTable.vue';
import { reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import { useStorage } from "@/composable/useStorage";

const { UseApiFunction, GetApiRootUrl, GetFileUrl } = useApi();
const StationCode = useStorage("StationCode");
const tableData = reactive({ Columns: [], List: [], apiRootUrl: "", fileUrl: "" });

const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
});

const CallBadgeApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_BADGE, PostData);
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
      const apiUrl = await GetApiRootUrl();
      const FileUrl = await GetFileUrl();

      tableData.Columns = Data.Columns;
      tableData.List = Data.List;
      tableData.apiRootUrl = apiUrl;
      tableData.fileUrl = FileUrl;

      SetListData();
    } else {
      console.log(Code);
    }
  }
}

const SetListData = () => {
  const colList = [];
  if (tableData.Columns != null && tableData.Columns.length > 0) {
    tableData.Columns.forEach((col) => {
      var colVisible = false;
      tableData.List.forEach((element) => {
        element.BadgeList.forEach((item) => {
          if (item.Name == col && item.Visible) {
            colVisible = true;
          }
        });
      });

      if (colVisible) {
        colList.push(col);
      }
    });

    tableData.Columns.splice(0);
    colList.forEach((item) => {
      tableData.Columns.push(item);
    });
  }
}

CallBadgeApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;

  CallBadgeApi();
});




</script>