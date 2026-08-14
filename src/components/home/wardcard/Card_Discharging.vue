<script setup>
import { toRefs } from 'vue'
//icon的js
import alert from "@/composable/icon_alert";
const { Isolation, AlertStatus } = alert();
const props = defineProps({
    time:String,
    message:String,
    IsolationStatus:String,
    Biohazard:Boolean,
})

const { time, message, IsolationStatus, Biohazard } = toRefs(props);

const Isolations = (ByIsolationStatus)=>{
  if(IsolationStatus.value == 'NORMAL'){
    return Isolation[1].img;
  }else if(IsolationStatus.value =='REVERSE'){
    return Isolation[0].img;
  }
}

</script>
<template>
  <div class="card_state">
    <div class="icon_tool d-flex mb-2">
      <img  :src="Isolations(IsolationStatus)">
      <img v-show="Biohazard" :src="AlertStatus[8].img">
      <div class="time">{{ time }}</div>
    </div>
    <div class="text text-start">{{ message }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card_state{
     padding: 1.125rem 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      color: #7A5AF8;
      font-size: 1.125rem;
      line-height: 1.35rem;
      font-weight: 500;
      border-radius: 0.5rem;
      border: solid #7A5AF8 thin;
      background: #F4F3FF;
      margin-bottom: 0.5rem;
      height: 6.875rem;
      margin-top: auto;
    width: 100%;
      .icon_tool{
        >img{
            margin-right: 0.25rem;
            width: auto;
          height: 2rem;

        }
      }
      .text{
        font-size: 1.125rem;
        line-height: 1.35rem;
        text-align: justify;

      }
  .time{
    font-size: 1.25rem;  
    line-height: 1.875rem;  
    font-weight: 500;
  }    
}
</style>