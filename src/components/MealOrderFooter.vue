<template>
<div class="footerlist">
  <label class="footertext">
    <div class="footerTitle">
      When the updated time is after the final cut-off time, exclude the meal before the final cut-off time.
    </div>
    <div class="d-flex">
     
      <div class="d-flex"> 
        <strong>The final cut off time for each meal is as follows：</strong>
          <div   v-for="item in DeadlineDescription" class="me-3">
            <strong>{{ item.Display }} ({{ item.CutTime }})</strong>
          </div>
        </div>
    </div>
   
  </label>
  <label class="UpdateTime">Update Time : {{ DateText }}</label>
  <button class="btn_update" @click="Refresh()">Manual Update</button>
 
</div>

</template>
<script setup>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { reactive, ref } from "vue";
import useDate from "@/composable/useDate";
import useApi from "@/composable/useApi";
import { useGlobalStore } from '@/stores/store';
const globalStore = useGlobalStore();

const { GetDateTimeDDMMYYYYHHmm } = useDate();
const { UseApiFunction } = useApi();

const DeadlineDescription = ref();
const DateText = ref();
const CallMealOrderDeadlineApi = async () => {
  const res = await UseApiFunction(import.meta.env.VITE_API_PATH_MealOrdering_Deadline);
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
      DateText.value = GetDateTimeDDMMYYYYHHmm();
      DeadlineDescription.value = Data;

    } else {
      console.log(Code);
    }
  }
}
CallMealOrderDeadlineApi();


function Refresh(){
  globalStore.routeKey++;
}
</script>


<style lang="scss" scoped>

.footerlist{
  background: #fff;
  padding: 0.5rem 1.5rem;
  position: fixed;
  bottom:0.5rem;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:start;
  min-height:4rem;

  label{
    font-weight: 500;
  }
  .UpdateTime{
    margin-right: 1rem;
    margin-left: auto;
    @media screen and (max-width:1480px){
      font-size: 0.8rem;
    }
  }
}
.footerTitle{
  font-size: 1rem;
  color:#909090 ;
  font-weight: 500;
}
.footertext{
 font-size: 1rem;
 line-height:1.4;
 font-weight: 500;
 width: 67%;
 @media screen and (max-width:1480px){
  font-size: 0.8rem;
 }
}


</style>
