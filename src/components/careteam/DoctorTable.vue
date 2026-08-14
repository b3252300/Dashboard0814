<template>
  <Treetable class="doctor_table"  scrollSizeHeight="25vh">
    <template  #total> 
      Doctor : {{ title }}
    </template>
    <template #thead> 
        <tr>
          <th width="435">Doctor</th>
          <th>Beds</th>
          <th width="66">Total</th>
          <th width="80">Level 1</th>
          <th width="80">Level 2</th>
          <th width="80">Level 3</th>
          <th width="80">Level 4</th>
          <th width="80">Level 5</th>
          <th width="76" class="bg_jade py-0">EWS<br />0-4</th>
          <th width="76" class="bg_yellowed py-0">EWS<br />5-6 ≥3</th>
          <th width="76" class="bg_flatred py-0">EWS<br />≥7</th>
        </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.Code">
          <td width="435">{{ item.DoctorName }}</td>
          <td>
            <template v-for="bed in item.BedList" :key="bed.BedCode">
              <BedComponent
                :BedName="bed.BedName"
                :EwsLevel="bed.EwsLevel"
                :Acuity="bed.Acuity"
              />
            </template>
          </td>
          <td width="66">{{ item.TotalCount > 0 ? item.TotalCount : "" }}</td>
          <td width="80">{{ item.Level1Count > 0 ? item.Level1Count : "" }}</td>
          <td width="80">{{ item.Level2Count > 0 ? item.Level2Count : "" }}</td>
          <td width="80">{{ item.Level3Count > 0 ? item.Level3Count : "" }}</td>
          <td width="80">{{ item.Level4Count > 0 ? item.Level4Count : "" }}</td>
          <td width="80">{{ item.Level5Count > 0 ? item.Level5Count : "" }}</td>
          <td width="76">{{ item.EwsLowCount > 0 ? item.EwsLowCount : "" }}</td>
          <td width="76">{{ item.EwsMediumCount > 0 ? item.EwsMediumCount : "" }}</td>
          <td width="76">{{ item.EwsHighCount > 0 ? item.EwsHighCount : "" }}</td>
        </tr>
    </template>

  </Treetable>

</template>

<script setup>
import { toRefs } from "vue";
import BedComponent from "@/components/careteam/BedComponent.vue";
import Treetable from '@/components/Treetable.vue'; 
const props = defineProps({
  list: {
    type: Array,
    default: () => {
      [];
    },
  },
  title: {
    type: String,
    default: () => {
      "";
    },
  },
});
const { list, title } = toRefs(props);
</script>
<style lang="scss">
.doctor_table{
  .p-treetable-thead-div {
    background: $bg_flatred;
}
}
</style>
<style lang="scss" scoped>
.doctor_table table{
  th:nth-child(1),  td:nth-child(1){
    @media screen and (max-width:1500px) {
       width: 157px;
       
    }
  }
  // th:nth-child(2),  td:nth-child(2){
  //   @media screen and (max-width:1500px) {
  //      width:200px;
  //   }
  // }
  // th,  td{  
  //  @media screen and (max-width:1500px) {
  //   width: 30px;
  //   }
  // }

}
table.table.table-default tr th,
table.table.table-default tr td {
  padding-bottom: 0.3rem;
}
.cardLabel {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #fff;
  min-width: 67px;
  border-radius: 5px;
  padding: 2px 5px;
  margin-right: 4px;

  .num {
    width: 24px;
    height: 22px;
    background: #f0fcf5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1da254;
    font-weight: bolder;
    margin-right: 4px;
  }
}
</style>
