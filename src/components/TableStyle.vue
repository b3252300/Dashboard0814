<template>
<div class="table-sticky-wrapper">
  <div class="table-sticky-container">
    <table class="table table-sticky">
      <thead class="tr-sticky">
        <tr>
          <th>Bed</th>
          <th
            ref="treetableSize"
            v-for="item in AlertTitle"
            :key="item.Code"
            v-html="item.Name"
            v-show="item.visible">
          </th>         
        </tr>
      </thead>
      <tbody>
        <tr v-for="ward in tableData.List" :key="ward.BedCode">
              <th class="p-0">
               {{ ward.BedName }}
              </th>
            <td v-show="GetShow('EWS')">
            <!-- 7/19回饋EWS綠色不要顯示
              <img
              v-if="
                ward.AlertDataDictionary.EWS &&
                ward.AlertDataDictionary.EWS.Visible &&
                ward.AlertDataDictionary.EWS.Level == '1'
              "
              :src="EWS[2].img"
              class="img"
            /> -->
            <img
              v-if="
                ward.AlertDataDictionary.EWS &&
                ward.AlertDataDictionary.EWS.Visible &&
                ward.AlertDataDictionary.EWS.Level == '2'
              "
              :src="EWS[1].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.EWS &&
                ward.AlertDataDictionary.EWS.Visible &&
                ward.AlertDataDictionary.EWS.Level == '3'
              "
              :src="EWS[0].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('PAIN_SCORE')">
            <img
              v-if="
                ward.AlertDataDictionary.PAIN_SCORE &&
                ward.AlertDataDictionary.PAIN_SCORE.Visible &&
                ward.AlertDataDictionary.PAIN_SCORE.Level == '1'
              "
              :src="PainScore[0].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.PAIN_SCORE &&
                ward.AlertDataDictionary.PAIN_SCORE.Visible &&
                ward.AlertDataDictionary.PAIN_SCORE.Level == '2'
              "
              :src="PainScore[1].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.PAIN_SCORE &&
                ward.AlertDataDictionary.PAIN_SCORE.Visible &&
                ward.AlertDataDictionary.PAIN_SCORE.Level == '3'
              "
              :src="PainScore[2].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.PAIN_SCORE &&
                ward.AlertDataDictionary.PAIN_SCORE.Visible &&
                ward.AlertDataDictionary.PAIN_SCORE.Level == '4'
              "
              :src="PainScore[3].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('FALL_RISK')">
            <img
              v-if="
                ward.AlertDataDictionary.FALL_RISK &&
                ward.AlertDataDictionary.FALL_RISK.Visible
              "
              :src="AlertStatus[11].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('OXYGEN_STATUS')">
            <img
              v-if="
                ward.AlertDataDictionary.OXYGEN_STATUS &&
                ward.AlertDataDictionary.OXYGEN_STATUS.Visible
              "
              :src="AlertStatus[10].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('MOBILITY')">
            <img
              v-if="
                ward.AlertDataDictionary.MOBILITY &&
                ward.AlertDataDictionary.MOBILITY.Visible
              "
              :src="AlertStatus[12].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('NBM')">
            <img
              v-if="
                ward.AlertDataDictionary.NBM &&
                ward.AlertDataDictionary.NBM.Visible
              "
              :src="NBM"
              class="img"
            />
            <!-- <iconOrder
              v-if="ward.AlertDataDictionary.NBM.Visible"
              bgColor="bg_red"
              :svgImg="Order[0].img"
              class="img"
            /> -->
          </td>
          <td v-show="GetShow('CRITICAL_LAB_REPORT')">
            <img
              v-if="
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Visible &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Level == '1'
              "
              class="img"
              :src="Critical[0].img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Visible &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Level == '2'
              "
              class="img"
              :src="Critical[1].img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Visible &&
                ward.AlertDataDictionary.CRITICAL_LAB_REPORT.Level == '3'
              "
              class="img"
              :src="Critical[2].img"
            />
          </td>
          <td v-show="GetShow('NURSING_TASK')">
            <iconOrder
              v-if="
                ward.AlertDataDictionary.NURSING_TASK &&
                ward.AlertDataDictionary.NURSING_TASK.Visible
              "
              bgColor="bg_green"
              :svgImg="Order[1].img"
              :iconApi="parseInt(ward.AlertDataDictionary.NURSING_TASK.Level)"
             
            />
          </td>
          <td v-show="GetShow('CPOE_MedOrder')">
            <iconOrder
              v-if="
                ward.AlertDataDictionary.CPOE_MedOrder &&
                ward.AlertDataDictionary.CPOE_MedOrder.Visible &&
                ward.AlertDataDictionary.CPOE_MedOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[2].img"
              :iconApi="parseInt(ward.AlertDataDictionary.CPOE_MedOrder.Level)"
            
            />
            <iconOrder
              v-else-if="
                ward.AlertDataDictionary.CPOE_MedOrder &&
                ward.AlertDataDictionary.CPOE_MedOrder.Visible &&
                ward.AlertDataDictionary.CPOE_MedOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[2].img"
              :iconApi="parseInt(ward.AlertDataDictionary.CPOE_MedOrder.Level)"
            
            />
          </td>
          <td v-show="GetShow('CPOE_LabOrder')">
            <iconOrder
              v-if="
                ward.AlertDataDictionary.CPOE_LabOrder &&
                ward.AlertDataDictionary.CPOE_LabOrder.Visible &&
                ward.AlertDataDictionary.CPOE_LabOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[3].img"
              class="img"
            />
            <iconOrder
              v-else-if="
                ward.AlertDataDictionary.CPOE_LabOrder &&
                ward.AlertDataDictionary.CPOE_LabOrder.Visible &&
                ward.AlertDataDictionary.CPOE_LabOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[3].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('CPOE_RadioOrder')">
            <iconOrder
              v-if="
                ward.AlertDataDictionary.CPOE_RadioOrder &&
                ward.AlertDataDictionary.CPOE_RadioOrder.Visible &&
                ward.AlertDataDictionary.CPOE_RadioOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[4].img"
              class="img"
            />
            <iconOrder
              v-else-if="
                ward.AlertDataDictionary.CPOE_RadioOrder &&
                ward.AlertDataDictionary.CPOE_RadioOrder.Visible &&
                ward.AlertDataDictionary.CPOE_RadioOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[4].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('CPOE_DiagOrder')">
            <iconOrder
              v-if="
                ward.AlertDataDictionary.CPOE_DiagOrder &&
                ward.AlertDataDictionary.CPOE_DiagOrder.Visible &&
                ward.AlertDataDictionary.CPOE_DiagOrder.Value == 'Stat'
              "
              bgColor="bg_red"
              :svgImg="Order[5].img"
              class="img"
            />
            <iconOrder
              v-else-if="
                ward.AlertDataDictionary.CPOE_DiagOrder &&
                ward.AlertDataDictionary.CPOE_DiagOrder.Visible &&
                ward.AlertDataDictionary.CPOE_DiagOrder.Value == 'New'
              "
              bgColor="bg_green"
              :svgImg="Order[5].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('BLOOD_TRANSFUSION')">
            <img
              v-if="
                ward.AlertDataDictionary.BLOOD_TRANSFUSION &&
                ward.AlertDataDictionary.BLOOD_TRANSFUSION.Visible &&
                ward.AlertDataDictionary.BLOOD_TRANSFUSION.Value == 'On going'
              "
              :src="animation[0].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.BLOOD_TRANSFUSION &&
                ward.AlertDataDictionary.BLOOD_TRANSFUSION.Visible &&
                ward.AlertDataDictionary.BLOOD_TRANSFUSION.Value == 'Paused'
              "
              :src="AlertStatus[1].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('TUBING_CARE')">
            <img
              v-if="
                ward.AlertDataDictionary.TUBING_CARE &&
                ward.AlertDataDictionary.TUBING_CARE.Visible
              "
              :src="AlertStatus[7].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('IV_LINE')">
            <img
              v-if="
                ward.AlertDataDictionary.IV_LINE &&
                ward.AlertDataDictionary.IV_LINE.Visible
              "
              :src="AlertStatus[6].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('BIOHAZARD')">
            <img
              v-if="
                ward.AlertDataDictionary.BIOHAZARD &&
                ward.AlertDataDictionary.BIOHAZARD.Visible
              "
              :src="AlertStatus[8].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('ISOLATION')">
            <img
              v-if="
                ward.AlertDataDictionary.ISOLATION &&
                ward.AlertDataDictionary.ISOLATION.Visible &&
                ward.AlertDataDictionary.ISOLATION.Value == 'NORMAL'
              "
              :src="Isolation[1].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.ISOLATION &&
                ward.AlertDataDictionary.ISOLATION.Visible &&
                ward.AlertDataDictionary.ISOLATION.Value == 'REVERSE'
              "
              :src="Isolation[0].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('BRADEN_SCORE')">
            <img
              v-if="
                ward.AlertDataDictionary.BRADEN_SCORE &&
                ward.AlertDataDictionary.BRADEN_SCORE.Visible
              "
              :src="AlertStatus[9].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('TUBE_FEEDING')">
            <img
              v-if="
                ward.AlertDataDictionary.TUBE_FEEDING &&
                ward.AlertDataDictionary.TUBE_FEEDING.Visible
              "
              :src="AlertStatus[0].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('INFUSION_PUMP_SYRING_PUMP')">
            <img
              v-if="
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP &&
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Visible &&
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Value ==
                  'On going'
              "
              :src="animation[1].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP &&
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Visible &&
                ward.AlertDataDictionary.INFUSION_PUMP_SYRING_PUMP.Value ==
                  'Paused'
              "
              :src="AlertStatus[2].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('ALLERGY')">
            <img
              v-if="
                ward.AlertDataDictionary.ALLERGY &&
                ward.AlertDataDictionary.ALLERGY.Visible
              "
              :src="AlertStatus[5].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('SPECIAL_PRECAUTION')">
            <img
              v-if="
                ward.AlertDataDictionary.SPECIAL_PRECAUTION &&
                ward.AlertDataDictionary.SPECIAL_PRECAUTION.Visible
              "
              :src="AlertStatus[3].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('SUICIDE_RISK')">
            <img
              v-if="
                ward.AlertDataDictionary.SUICIDE_RISK &&
                ward.AlertDataDictionary.SUICIDE_RISK.Visible
              "
              :src="AlertStatus[4].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('RESTRAINT')">
            <img
              v-if="
                ward.AlertDataDictionary.RESTRAINT &&
                ward.AlertDataDictionary.RESTRAINT.Visible
              "
              :src="AlertStatus[13].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('DNR_DIL')">
            <img
              v-if="
                ward.AlertDataDictionary.DNR_DIL &&
                ward.AlertDataDictionary.DNR_DIL.Visible &&
                ward.AlertDataDictionary.DNR_DIL.Value == 'DNR'
              "
              :src="DNRDIL[1].img"
              class="img"
            />
            <img
              v-else-if="
                ward.AlertDataDictionary.DNR_DIL &&
                ward.AlertDataDictionary.DNR_DIL.Visible &&
                ward.AlertDataDictionary.DNR_DIL.Value == 'DIL'
              "
              :src="DNRDIL[0].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('COMPANION')">
            <img
              v-if="
                ward.AlertDataDictionary.COMPANION &&
                ward.AlertDataDictionary.COMPANION.Visible
              "
              :src="AlertStatus[14].img"
              class="img"
            />
          </td>
          <td v-show="GetShow('Patient_Request')">
            <img
              v-if="
                ward.AlertDataDictionary.Patient_Request &&
                ward.AlertDataDictionary.Patient_Request.Visible
              "
              :src="AlertStatus[15].img"
              class="img"
            />
          </td>
        </tr>
        
       
            
      </tbody>
      <tfoot class="tr-sticky">
        <tr>
          <th></th>
          <th
            v-for="item in AlertTitle"
            :key="item.Code"
            @click="sortByColumn(item)"
            v-html="item.Name"
            v-show="item.visible">
          </th>
        </tr>
      </tfoot>
  </table>
</div>
</div>

</template>
<script setup>
import TreetableScroll from '@/components/TreetableScroll.vue';
import { useGlobalStore } from "@/stores/store";

import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import useApi from "@/composable/useApi";
//icon的js
import alert from "@/composable/icon_alert";
import icon_ratient from "@/composable/icon_ratient";
const { Order, PainScore, Isolation, AlertStatus, animation, EWS } = alert();
const { gender, Critical, DNRDIL } = icon_ratient();
//order的icon 元件
import iconOrder from "@/components/order_Icon/iconOrder.vue";
//NBM
import NBM from "@/assets/images/Vector.svg";

const globalStore = useGlobalStore();
const AlertTitle = ref([
  { Name: "EWS", Code: "EWS", visible: false },
  { Name: "Pain Score", Code: "PAIN_SCORE", visible: false },
  { Name: "Fall Risk", Code: "FALL_RISK", visible: false },
  { Name: "O2 Status", Code: "OXYGEN_STATUS", visible: false },
  { Name: "Mobility", Code: "MOBILITY", visible: false },
  { Name: "NBM", Code: "NBM", visible: false },
  { Name: "Critical Lab Report", Code: "CRITICAL_LAB_REPORT", visible: false },
  { Name: "Nursing Task", Code: "NURSING_TASK", visible: false },
  {
    Name: "CPOE ORDER-Medication",
    Code: "CPOE_MedOrder",
    visible: false,
  },
  {
    Name: "CPOE ORDER-Laboratory",
    Code: "CPOE_LabOrder",
    visible: false,
  },
  {
    Name: "CPOE ORDER-Radiology",
    Code: "CPOE_RadioOrder",
    visible: false,
  },
  {
    Name: "CPOE ORDER-Diagnostic",
    Code: "CPOE_DiagOrder",
    visible: false,
  },
  { Name: "Blood Transfusion", Code: "BLOOD_TRANSFUSION", visible: false },
  { Name: "Tubing care", Code: "TUBING_CARE", visible: false },
  { Name: "IV Line", Code: "IV_LINE", visible: false },
  { Name: "Bioazard", Code: "BIOHAZARD", visible: false },
  { Name: "Isolation", Code: "ISOLATION", visible: false },
  { Name: "Braden Score", Code: "BRADEN_SCORE", visible: false },
  { Name: "Tube Feeding", Code: "TUBE_FEEDING", visible: false },
  { Name: "Infusion", Code: "INFUSION_PUMP_SYRING_PUMP", visible: false },
  { Name: "Allergy", Code: "ALLERGY", visible: false },
  { Name: "Special Precaution", Code: "SPECIAL_PRECAUTION", visible: false },
  { Name: "Suicide Risk", Code: "SUICIDE_RISK", visible: false },
  { Name: "Restraint", Code: "RESTRAINT", visible: false },
  { Name: "DNR/DIL", Code: "DNR_DIL", visible: false },
  { Name: "Companion", Code: "COMPANION", visible: false },
  { Name: "Patient Request", Code: "Patient_Request", visible: false },
]);

const tableData = reactive({ List: [] });








const { UseApiFunction } = useApi();
const sortColumn = ref("BedName");
const itemKey = ref(0);

//取出需要顯示的欄位
const GetAlertColumn = () => {
  AlertTitle.value.forEach((item) => {
    var ColumnVisible = false;
  
    if(tableData.List.length > 0){
      tableData.List.forEach(element => {
        if(element.AlertDataDictionary[item.Code] && element.AlertDataDictionary[item.Code].Visible){
          ColumnVisible = true;
        }
      });

      if (ColumnVisible) {
        item.visible = ColumnVisible;
      }
    }
  });
};

//欄位排序規則
const sortByColumn = async (columnName) => {
  globalStore.alertSortColumn = columnName;

  if (sortColumn.value != columnName) {
    sortColumn.value = columnName;
    var itemA, itemB;

    await tableData.List.sort((a, b) => {
      if(columnName.Code == "EWS" ||
        columnName.Code == "PAIN_SCORE" ||
        columnName.Code == "CPOE_MedOrder" ||
        columnName.Code == "CPOE_LabOrder" ||
        columnName.Code == "CPOE_RadioOrder" ||
        columnName.Code == "CPOE_DiagOrder" ||
        columnName.Code == "CRITICAL_LAB_REPORT" ||
        columnName.Code == "NURSING_TASK"
      )
        {
        //有等級的排序方法(Level:數字)
        if (a.AlertDataDictionary[columnName.Code] && a.AlertDataDictionary[columnName.Code].Visible) {
          itemA = parseInt(a.AlertDataDictionary[columnName.Code].Level == null ?  "" : a.AlertDataDictionary[columnName.Code].Level);
        } else {
          itemA = 0;
        }

        if (b.AlertDataDictionary[columnName.Code] && b.AlertDataDictionary[columnName.Code].Visible) {
          itemB = parseInt(b.AlertDataDictionary[columnName.Code].Level == null ?  "" : b.AlertDataDictionary[columnName.Code].Level);
        } else {
          itemB = 0;
        }
      } else if (
        columnName.Code == "ISOLATION" ||
        columnName.Code == "INFUSION_PUMP_SYRING_PUMP" ||
        columnName.Code == "BLOOD_TRANSFUSION" ||
        columnName.Code == "DNR_DIL"
      ) {
        //有等級的排序方法(Value:文字)
        if (a.AlertDataDictionary[columnName.Code] && a.AlertDataDictionary[columnName.Code].Visible) {
          itemA = a.AlertDataDictionary[columnName.Code].Value == null ?  "" : a.AlertDataDictionary[columnName.Code].Value;
        } else {
          itemA = "";
        }

        if (b.AlertDataDictionary[columnName.Code] && b.AlertDataDictionary[columnName.Code].Visible) {
          itemB = b.AlertDataDictionary[columnName.Code].Value == null ?  "" : b.AlertDataDictionary[columnName.Code].Value;
        } else {
          itemB = "";
        }
      } else {

        if(a.AlertDataDictionary[columnName.Code]){
          //布林直的排序方法
          itemA = a.AlertDataDictionary[columnName.Code].Visible;
        }else{
          itemA = false;
        }

        if(b.AlertDataDictionary[columnName.Code]){
          itemB = b.AlertDataDictionary[columnName.Code].Visible;
        }else{
          itemB = false;
        }
        
      }

      if (itemA < itemB) return 1;
      if (itemA > itemB) return -1;

      //欄位值相同時，使用BedName排序
      if (a.BedName > b.BedName) return 1;
      if (a.BedName < b.BedName) return -1;
    });

    itemKey.value = Math.random();
  }
};

const CallAlertcApi = async () => {
  const PostData = reactive({
    StationCode: localStorage.getItem("StationCode"),
  });

  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_ALERT,
    PostData
  );
  const { Data, Code, IsReload } = res.data;

  if(IsReload){
    location.reload();
  }

  if (Code == "0") {
    tableData.List = Data.List;
    GetAlertColumn();

    if(globalStore.alertSortColumn != {}){
      sortByColumn(globalStore.alertSortColumn);
    }

  } else {
    console.log(Code);
  }
};

CallAlertcApi();

function GetShow(ByColumn) {
  var Show = false;
  AlertTitle.value.forEach((item) => {
    if (item.Code == ByColumn) {
      Show = item.visible;
    }
  });
  return Show;
}

const isVisible = (ward, key, level = null) => {
  if (ward.AlertDataDictionary[key]) {
    if (level) {
      return ward.AlertDataDictionary[key].Visible && ward.AlertDataDictionary[key].Level == level;
    }
    return ward.AlertDataDictionary[key].Visible;
  }
  return false;
};

const getComponentType = (data) => {
  // Implement your logic to get component type based on data
  return 'img';
};

const getImageSrc = (data) => {
  // Implement your logic to get image source based on data
  return '';
};





// //表格總寬度客製
const treetableSize = ref(0);//取得 th 的 DOM
const num = 6;//th 的固定寬度
// 用於初始化 th 和 td 元素寬度的計算屬性
const sizeWidth = computed(() => {
  const elements = document.querySelectorAll(".tableStyle th, .tableStyle td");
  elements.forEach((item) => {
    item.style.width = num + "rem"; // 初始化寬度
  });
  return elements;
});

// 用於計算表格總寬度的計算屬性
const tableSize = computed(() => {
  const totalColumns = treetableSize.value.length + 1; // 列數
  const totalWidth = num * totalColumns; // 表格總寬度（rem 單位）

  const elements = document.querySelectorAll(".p-treetable-wrapper, .p-treetable-thead tr, .p-treetable-tbody tr, .p-treetable-tfoot tr");
  elements.forEach((item) => {
    item.style.width = totalWidth + "rem"; // 設置表格總寬度
  });

  return elements;
});

// 更新表格寬度的函數
const updateTableSize = () => {
  sizeWidth.value; // 初始化 th 和 td 寬度
  tableSize.value; // 設置表格總寬度
};

onMounted(() => {
watchEffect(()=>{
  updateTableSize();
});

});


//表格總寬度客製
// const treetableSize = ref(null);//取得 th 的 DOM
// const CustomTableSize = ()=>{
 
//   watchEffect(()=>{
//   const num = 7;//th 的固定寬度
//   const size_width = ref(document.querySelectorAll(".tableStyle  th , .tableStyle  td")); 
//   size_width.value.forEach((item) => {
//     item.style.width = num + "rem";//124px//th,td 初始化寬度
//   });

//   const total = ref(treetableSize.value.length + 1 );//總共幾個列
  
//   const tableSize = ref(document.querySelectorAll(".p-treetable-wrapper,  .p-treetable-thead tr,  .p-treetable-tbody tr, .p-treetable-tfoot tr"));

//   tableSize.value.forEach((item) => {
//     item.style.width = num * total.value+"rem"; //table 總寬度計算
//     });
//   });


// }





// onMounted(()=>{
//   CustomTableSize();
// });







</script>

<style lang="scss" scoped>
.img {
  width:auto;
  height: 1.5rem;
}






</style>
