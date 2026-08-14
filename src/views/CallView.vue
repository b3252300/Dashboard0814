<template>
  <div class="box row row-cols-3">
    <div class="col-lg-6">
      <ConsultantTable :title="ConsultantTitle" :list="ConsultantList" />
    </div>
    <div class="col-lg-6">
      <ConsultantTable :title="RadiographerTitle" :list="RadiographerList" />
    </div>
  </div>
  
</template>

<script setup>
// import RWD from '../layout/RWD.vue';
import ConsultantTable from "@/components/call/ConsultantTable.vue";
import RadiologistTable from "@/components/call/RadiologistTable.vue";
import RadiographerContactTable from "@/components/call/RadiographerContactTable.vue";
import { ref, reactive, watch } from "vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { useStorage } from "@/composable/useStorage";

const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();

const ConsultantTitle = ref("Consultant On Call");
const ConsultantList = ref([]);
const RadiologistTitle = ref("Radiologist/Pathologist/Oncologist");
const RadiologistList = ref([]);
const RadiographerTitle = ref("Radiographer On Call");
const RadiographerList = ref([]);
const ContactList = ref([]);
const StationCode = useStorage("StationCode");
const DateText = GetNowDateTimeYYYYMMDDHHmm();

const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  SearchDateTime: DateText,
});

const CallApi = async () => {
  ConsultantList.value = [];
  RadiologistList.value = [];
  RadiographerList.value = [];
  ContactList.value = [];

  CallDataApi();
  // CallOtherApi();
  // CallContactApi();
};

const CallDataApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_CALL_CONSULTANT,
    PostData
  );
  if (res != undefined) {
    const { Data, Code, IsReload } = res.data;

    if (IsReload) {
      location.reload();
    }

    if (Code == "0") {
      ConsultantList.value = Data.ConsultantList;
     
      RadiographerList.value = Data.RadiographerList;
      
    } else {
      console.log(Code);
    }
  }
};

const CallOtherApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_CALL_OTHER,
    PostData
  );
  if (res != undefined) {
    const { Data, Code } = res.data;

    if (Data.isReload) {
      location.reload();
    }

    if (Code == "0") {
      RadiologistList.value = Data.OthersList;
      RadiographerList.value = Data.RadiographerList;
    } else {
      console.log(Code);
    }
  }
};

const CallContactApi = async () => {
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_CALL_CONTACT,
    PostData
  );
  if (res != undefined) {
    const { Data, Code } = res.data;

    if (Data.isReload) {
      location.reload();
    }

    if (Code == "0") {
      ContactList.value = Data.List;
    } else {
      console.log(Code);
    }
  }
};

CallApi();

watch(StationCode, (newVal) => {
  PostData.StationCode = newVal;
  PostData.SearchDateTime = GetNowDateTimeYYYYMMDDHHmm();

  CallApi();
});
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
}
</style>
