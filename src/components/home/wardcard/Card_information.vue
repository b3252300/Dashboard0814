<script setup>
import { ref, toRefs } from "vue";
//icon的js
import icon_ratient from "@/composable/icon_ratient";
const { gender, Critical, DNRDIL } = icon_ratient();

const props = defineProps({
  PatientName:String,
  PayorStatus: String,
  Insurance:String,
  PrimaryDoctor:String,
  MRN:String,
  DOB:String,
  Location:String, 
  Gender:Number,
  IsDNR:Boolean,
  IsDIL:Boolean,
  HaveCompanion:Boolean,
  OtherDcotor: Number,
  CriticalLabReport:Number,
})

const { PatientName, PayorStatus, Insurance, PrimaryDoctor, MRN, DOB, Location, Gender, IsDNR, IsDIL, OtherDcotor, CriticalLabReport } = toRefs(props);
const LocationShow = ref(false);
if(Location.value != undefined && Location.value != ''){
  LocationShow.value = true;
}

const PayorString = ref('');
if(Insurance.value != undefined && Insurance.value != ''){
  PayorString.value = PayorStatus.value + ' - ' + Insurance.value;
}else{
  PayorString.value = PayorStatus.value;
}

const genders = (index)=>{
  return gender[index].img
}

</script>

<template>

<div class="card_critical row">

    <div class="card_critical_img col-auto">
      <img v-if="CriticalLabReport == 1" :src="Critical[0].img">    
      <img v-else-if="CriticalLabReport == 2" :src="Critical[1].img">    
      <img v-else-if="CriticalLabReport == 3" :src="Critical[2].img">  
    </div>
    <div class="col ps-0">
        <div class="card_Location">
            <img class="card_Location_icon" v-show="LocationShow" src="@/assets/images/location.svg">
                  {{ Location }}
        </div>
          
    </div>
</div>
<div class="card-name">
  <img v-if="IsDIL" class="DNRDIL me-1" :src="DNRDIL[0].img">
  <img v-else-if="IsDNR" class="DNRDIL me-1" :src="DNRDIL[1].img">
  <img class="gender me-1" :src="genders(Gender)">
   {{ PatientName }}
</div>
<div class="card_basic row">
    <div class="col card-MRN pe-0">{{ MRN }} <img v-show="HaveCompanion" src="@/assets/images/Companion.svg"></div>
    <div class="col card-date text-end">{{ DOB }}</div>
</div> 
<div class="card-Insurance">{{ PayorString }}</div>
<div class="card-Doctor">{{ PrimaryDoctor }} <span v-if="OtherDcotor > 0" class="plus">+</span></div>


</template>
<style lang="scss" scoped>
.card-date{
  font-size: 1rem;
}
.card-MRN{
  font-size: 1rem;
  >img{
    height: 1.25rem;
  }
}
.card-name{
    font-weight: 800;
    height: 2rem;
    display: flex;
    align-items: center;
    img{
      height:1.4rem ;
    }
  }
.card_critical{
  height: 1.4rem;
  margin-bottom: 0.5rem;
  &_img > img{
    height: 1.5rem;
  }
}
.card_basic{
  height: 1.25rem;
  margin-bottom: 0.25rem;
}
  .card_Location{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #0D5DCD;
    font-size: 0.8125rem;
    line-height: 1.25;
    &_icon{
      height: 1.25rem;
      padding: 0.06rem;
    }
  }
  .card_Notification{
    margin-left: 0.5rem;
  }
  .card-Doctor{
    background: #DDEFFF;
    color: #0D5DCD;
    padding:0.06rem 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    line-height: 1.7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .plus{
      color: #25C269;
      font-weight: bolder;
    }
  }
  .card-Insurance{
    color: #909090;
    font-size:0.875rem ;
    line-height: 1.25;
    height: 1.25rem;
    margin-bottom: 0.25rem;
    
  }
</style>