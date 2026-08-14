<template>
  <div class="container-fluid" :style="footerlist_h">
    <div class="row">
      <div class="col-6 ps-0 h-100">
  <Treetable  title="Pending Meal Order" scrollSizeHeight="66vh">
    <template #total> 
      Total：{{ tableData.NonNBMTotal }}
    </template>
    <template #thead> 
      <tr>
          <th>Non NBM</th>
      </tr>
    </template>
    <template #tbody>
      <tr>
        <td>
          <div class="table_container_grid">
            <template v-for="item in tableData.NonNBMList">
              <Card class="g-col"
                :BedName="item.BedName"
                :Discharged = "item.Discharged"
                :TransferOut = "item.TransferOut"
                :TodayToOrderList="item.TodayToOrderList"
                :TomorrowToOrderList="item.TomorrowToOrderList"
              />
            </template>
          </div>
        </td>
      </tr>
    </template>

   
  </Treetable>

      </div>
      <div class="col-6 pr-0  h-100">
  <Treetable  title="Pending Meal Order" scrollSizeHeight="66vh">
    <template #total> 
      Total：{{ tableData.NBMTotal }}
    </template>
    <template #thead> 
      <tr>
          <th>NBM</th>
      </tr>
    </template>
    <template #tbody>
      <tr>
          <td colspan="2">
            <div class="table_container_grid">
              <template  v-for="item in tableData.NBMList">
                <Card class="g-col"
                  :BedName="item.BedName"
                  :Discharged = "item.Discharged"
                  :TransferOut = "item.TransferOut"
                  :TodayToOrderList="item.TodayToOrderList"
                  :TomorrowToOrderList="item.TomorrowToOrderList"
                />
              </template>
            </div>
          </td>
      </tr>
    </template>
  </Treetable>

      </div>
    </div>
  </div>
  <MealOrderFooter :style="footerlist_h" />

</template>
<script setup>
import Card from "../components/Card.vue";
import useApi from "@/composable/useApi";
import useDate from "@/composable/useDate";
import { reactive } from "vue";
import MealOrderFooter from '../components/MealOrderFooter.vue'
import Treetable from '@/components/Treetable.vue'; 


const { UseApiFunction } = useApi();
const { GetNowDateTimeYYYYMMDDHHmm } = useDate();
const DateText = GetNowDateTimeYYYYMMDDHHmm();
const PostData = reactive({
  StationCode: localStorage.getItem("StationCode"),
  // StationCode: 5360,
  SearchDateTime: DateText
});



const tableData = reactive({ NonNBMTotal: 0, NBMList: [], NBMTotal: 0, NonNBMList: [] });

const CallMealOrderingApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_MealOrdering, PostData);
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
      tableData.NonNBMTotal = Data.NonNBMCount;
      tableData.NBMList = Data.NBMList;
      tableData.NBMTotal = Data.NBMCount;
      tableData.NonNBMList = Data.NonNBMList;
    } else {
      console.log(Code);
    }
  }
}

CallMealOrderingApi();

// const tableData = {
//   NBMCount: 2,
//   NonNBMCount: 9,
//   NBMList: [
//     {
//       BedCode: "L603B",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "D"],
//       TomorrowToOrderList: ["Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L622B",
//       Discharged: false,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L608A",
//       Discharged: false,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L610A",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L611B",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L602C",
//       Discharged: false,
//       TransferOut: false,
//       TodayToOrderList: [],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L612B",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L622A",
//       Discharged: false,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L608C",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },
//   ],
//   NonNBMList: [
//     {
//       BedCode: "L603B",
//       Discharged: true,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "D"],
//       TomorrowToOrderList: ["Lu", "A", "D", "S"],
//     },
//     {
//       BedCode: "L622B",
//       Discharged: false,
//       TransferOut: false,
//       TodayToOrderList: ["Lu", "A", "D", "S"],
//       TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"],
//     },],
// };
// tableData.NonNBMTotal = 2;
// tableData.NBMTotal = 9;

//全域動態style 控制
// pinia  
import { storeToRefs } from 'pinia'
import { styledynamic } from '@/stores/style';
const styledynamicView = styledynamic();
const { footerlist_h } = storeToRefs(styledynamicView);

</script>

<style lang="scss" scoped>
$bs-columns:calc(100% / 4);//10.9vw
$bs-columns-m:calc(100% / 3);

.table_container_grid{
  display: grid;
  grid-template-columns: repeat(var(--bs-columns, 8), 1fr);
  // grid-template-columns: repeat(4, $bs-columns);
  grid-gap:0.9vw;
  @media screen and (max-width:1680px) {
    grid-template-columns: repeat(var(--bs-columns, 6), 1fr);
  }
  @media screen and (max-width:1400px) {
    grid-template-columns: repeat(var(--bs-columns, 4), 1fr);
  }
.g-col {
  grid-column: auto / span 2;
}
}





table.table tr td {
  padding:1rem;
  vertical-align:top;
}

.card {
  // margin-left: 20px;
  .card-body{
    width: 100%;
  }

  &:first-child {
    margin-left:0;
  }
}

::v-deep(.p-treetable-tbody .p-treetable-tbody-content){
align-items: flex-start;
}
</style>