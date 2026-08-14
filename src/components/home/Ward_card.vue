<template>
  <div class="ward_card card">
    <div class="card-title">
      <div class="row align-items-center flex-nowrap">
        <div class="col-auto d-flex align-items-center">
          <Svg_notification v-if="notification" />
          <span class="BedNum">{{ bedName }}</span>
        </div>

        <div class="card_Length col-auto ms-auto">
          <div
            v-if="!IsAvailable && !IsBlocked && !IsHousekeeping"
            class="day badge"
          >
            <img src="@/assets/images/LengthOfStay.svg" /> {{ day }} days
          </div>
          <span
            v-if="!IsAvailable && !IsBlocked && !IsHousekeeping && acuity > 0"
            class="badge"
            >{{ acuity }}</span
          >
        </div>
      </div>
    </div>
    <div class="card-body">
      <slot name="content">
        <div>
          <img
            style="
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              bottom: 2em;
              margin: auto;
            "
            v-show="HaveReserveBed"
            src="@/assets/images/clear_beds.svg"
          />
        </div>

        <div v-if="IsBlocked" class="text_frame">Blocked</div>
        <div
          v-else-if="IsAvailable"
          style="text-align: crnter"
          class="text_frame"
        >
          Available
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import Svg_notification from "@/components/home/wardcard/Svg_notification.vue";

defineProps({
  day: Number,
  acuity: Number,
  notification: Boolean,
  bedName: String,
  IsAvailable: Boolean,
  IsBlocked: Boolean,
  HaveReserveBed: Boolean,
  IsHousekeeping: Boolean,
});

const ward_card_Custom = () => {
  const ward_card_Size = document.querySelectorAll(".ward_card.card");
  // console.log(ward_card_Size == null);
  const h = ref(0);
  ward_card_Size.forEach((item) => {
    h.value = item.offsetWidth / 0.925;
    item.style.height = h.value + "px";
  });
};

onMounted(() => {
  watchEffect(() => {
    ward_card_Custom();
  });
  window.addEventListener("resize", ward_card_Custom);
});
</script>

<style lang="scss" scoped>
// $num:18.75rem;
$num: 100%;
.ward_card {
  background: #7f8ca2;
  border-radius: $border_radius_s;
  box-shadow: 0 0 0.6rem rgba(34, 34, 34, 0.2);
  padding: 0.48rem;
  width: $num;
  height: calc($num / 0.925);

  // margin-right:1rem;
  @media screen and (max-width: 1300px) {
    font-size: 0.9rem;
  }
  .text_frame {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #909090;
    overflow: hidden;
  }

  &.ews_color_yellow {
    background: $bg_yellowed;
  }
  &.ews_color_red {
    background: $bg_flatred;
  }
  .card-body {
    padding: 0;
    background: #fff;
    border-radius: $border_radius_s;
    padding: 0.5rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    // display: grid;
    // grid-template-rows: 1.75rem 2.5rem 1.75rem 1.5rem 2rem 5.15rem 2.5rem;
  }
  .BedNum {
    color: #fff;
    font-size: 1.25rem;
    line-height: 1;
    margin-left: 0.6rem;
    font-weight: 500;
  }
  .card_Length {
    display: flex;
    align-items: center;
    justify-content: center;
    .badge {
      width: 1.5rem;
      font-size: 0.75rem;
      line-height: 1.25;
      background: $btn-outline-bg-secondary-hover;
      color: $bs-btn-hover-color;
      border-radius: $border_radius_s;
      font-weight: bolder;
      height: 1.5rem;
      img {
        height: 1.5rem;
      }
      &.day {
        width: auto;
        font-weight: 500;
        margin-right: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
