<script setup>
//icon的js
import alert from "@/composable/icon_alert";
import { toRefs } from "vue";
const { Isolation, AlertStatus } = alert();

const props = defineProps({
  time: String,
  message: String,
  IsolationStatus: String,
  Biohazard: Boolean,
  HaveReserveBed: Boolean,
});

const { time, message, IsolationStatus, Biohazard, HaveReserveBed } =
  toRefs(props);

const Isolations = (ByIsolationStatus) => {
  if (IsolationStatus.value == "NORMAL") {
    return Isolation[1].img;
  } else if (IsolationStatus.value == "REVERSE") {
    return Isolation[0].img;
  }
};
</script>

<template>
  <div class="card_frame">
    <div class="card_Housekeeping">
      <img v-show="HaveReserveBed" src="@/assets/images/clear_beds.svg" />
      <div class="text">Housekeeping</div>
    </div>
    <div class="card_state">
      <div class="icon_tool d-flex">

        <img
          v-show="IsolationStatus == 'NORMAL'"
          :src="Isolations(Isolation)"
        />
        <img v-show="Biohazard" :src="AlertStatus[8].img" />
        <div class="time">{{ time }}</div>
      </div>
      <div class="text">{{ message }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card_Housekeeping {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // margin-bottom: 1.8125rem;
  img {
    height: 1.8rem;
  }

  .text {
    font-size: 1.5rem;
    color: #909090;
    text-align: center;
  }
}
.card_state {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #7a5af8;
  font-size: 1.125rem;
  line-height: 1.35rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  height: 6.875rem;
  .icon_tool {
    margin-bottom: 0.5rem;
    > img {
      width: auto;
      height: 2rem;
      margin-right: 0.25rem;
    }
  }
  .time {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 500;
  }
}
</style>
