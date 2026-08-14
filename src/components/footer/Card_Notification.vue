<template>
   <div class="card_offcanvas  card">
  <div class="row align-items-center  mx-0">
    <div class="col-auto px-0">
      <img v-if="code=='CustomerService'" :src="Notification[0].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='BedMaking'" :src="Notification[1].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='DripIssue'" :src="Notification[2].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='Housekeeping'" :src="Notification[3].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='PainAssist'" :src="Notification[4].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='RequestHotWater'" :src="Notification[5].img" class="card_img img-fluid rounded-start">
      <img v-else-if="code=='Toileting'" :src="Notification[6].img" class="card_img img-fluid rounded-start">
    </div>
    <div class="col px-0">
      <div class="card-body">
        <div class="row mx-0">
            <div class="col px-0">
                <h5 class="card-title">{{ ward }}</h5>
            </div>
            <div class="col-auto px-0 align-self-start">
                <small class="card_time">{{ time }}</small>
            </div>
        </div>
        <div class="row px-0">
            <p class="card-text">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref, toRefs } from "vue";
//icon的js
import NotificationIcon from "@/composable/icon_notification";
const { Notification } = NotificationIcon();

const content = ref('');
const props = defineProps({
    ward:String,
    text:String,
    time:String,
    code:String,
    subtext:String
});
const { ward, text, time, code, subtext } = toRefs(props);

if(subtext.value != null && subtext.value != ''){
    content.value = text.value + '-' + subtext.value;
}else{
    content.value = text.value;
}

</script>


<style lang="scss" scoped>
    .card_offcanvas{
        padding:0.75rem 0.5rem;
        margin-bottom:0.375rem;
        border-radius:$border_radius_s;
        border: none;
        .card-body{
            padding-left: 0;
            padding-right: 0.31rem;
            padding-top: 0;
            padding-bottom: 0;
        }
        .card-title{
            font-size:1rem;
            height: 1.18rem;
            color: #222222;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
        }
        .card-text{
            font-size: 1rem;
            line-height: 1.2;
            color: #222222;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
        }
        .card_img{
            width:2rem;
            height: auto;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
        .card_time{
            font-size:1rem;
            height:1.18rem;
            color: #909090;
        }
    }

</style>