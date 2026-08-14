<template>
<div class="card">
  <div class="card-body">
    <h5 class="card-title d-flex">
      <div class="wardName">{{ BedName }}</div>
      <img v-if="Discharged" class="ms-auto"  src="@/assets/images/MealOrder/Discharging.svg">
      <img v-else-if="TransferOut" class="ms-auto"  src="@/assets/images/MealOrder/TransferOut.svg">
    </h5>
    <div class="today-list list_MealOrder">
      <h6 class="card-subtitle">Today</h6>
      <div class="card_foodOrder">
        <div class="icon_foodOrder today-list" v-for="item in TodayToOrderList">
          {{ item }}
        </div>
      </div>
      
    </div>
    <div class="tomorrow-list list_MealOrder">
      <h6 class="card-subtitle">Tomorrow</h6>

      <div class="card_foodOrder">
        <div class="icon_foodOrder tomorrow-list" v-for="item in TomorrowToOrderList">
          {{ item }}
        </div>
      </div>

    </div>
    
  </div>
</div>

</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  BedName: {
    type: String,
    default: () => {
            '';
        },
  },
  TransferOut: {
    type: String,
    default: () => {
            '';
        },
  },
  Discharged: {
    type: String,
    default: () => {
            '';
        },
  },
  TodayToOrderList: {
    type: Array,
    default: () => {
        [];
    },
  },
  TomorrowToOrderList: {
    type: Array,
    default: () => {
        [];
    },
  },
});
const { BedName, TransferOut, Discharged, TodayToOrderList, TomorrowToOrderList } = toRefs(props);


</script>


<style lang="scss" scoped>
.card{
  border: solid #DEDEDE thin;
  padding: 0.75rem;
  width:100%;
  height: calc(100% / 1.05);

  .card-title{
    color: #222222;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .card-subtitle{
    color: #909090;
    font-size:1rem;
    line-height: 1.5;
    margin-bottom: 0.25rem;
  }
  .card-body {
    padding: 0;
    margin-bottom: 0.75rem;
}



  .list_MealOrder{
 
  &.today-list{
    margin-bottom: 0.6rem;
    &.list_MealOrder ul li{
        @include order-bg-red;
    }
  }
  &.tomorrow-list{
    &.list_MealOrder ul li{
        @include order-bg-grey;
    }
  }

  }
  
}



</style>