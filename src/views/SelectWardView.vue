<template>
  <div class="ward_container">
    <h1 v-html="title"></h1>
    <template v-if="select">
      <div class="ward_container_select">
        <ul class="ward_list">
          <li
            :class="{ active: numSelect == id }"
            v-for="(item, id) in StationList"
            :key="item.Code"
            @click="selectStation(item.Code, item.Name, id)"
          >
            {{ item.Name }}
          </li>
        </ul>
        <button
          class="btn btn-login"
          type="button"
          @click="Submit"
          :disabled="Isdisabled"
        >
          ok
        </button>
      </div>
    </template>
    <template v-else>
      <img class="no_ward mt-3" src="@/assets/images/selectward_search.svg" />
    </template>
  </div>

  <Teleport v-if="!select" to="body">
    <NavBar />
    <img
      class="selectward_navarrow"
      src="@/assets/images/selectward_navarrow_red.gif"
    />
  </Teleport>
</template>
<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import router from "@/router";
const title = ref(null);
const StationList = ref(JSON.parse(localStorage.getItem("StationList")));
// const StationList = ref([{
//           "Name": "WARD 7A"
//       },
//       {
//           "Name": "WARD 8A"
//       },
//       {
//           "Name": "WARD 9A"
//       },
//       {
//           "Name": "WARD 10A"
//       },
//       {
//           "Name": "WARD 7A"
//       },
//       {
//           "Name": "WARD 8A"
//       },
//       {
//           "Name": "WARD 9A"
//       },
//       {
//           "Name": "WARD 10A"
//       }
//     ]);

const Isdisabled = ref(true);
const StationCode = ref("");
const StationName = ref("");
const select =
  String(localStorage.getItem("SwitchableWard")).toLowerCase() === "false";
if (select) {
  title.value = "Please select  one ward to display";
} else {
  title.value = "Please select the ward <br> you wish to view !";
}
//全域動態style 控制
// import { styledynamic } from '@/stores/style';
// pinia
import { storeToRefs } from "pinia";
// const styledynamicView = styledynamic();
// const { header_h } = storeToRefs(styledynamicView);

const numSelect = ref(null);
//取得選擇的護理站
const selectStation = (Index, Name, Id) => {
  StationCode.value = Index;
  StationName.value = Name;
  Isdisabled.value = false;
  numSelect.value = Id;
};

const Submit = () => {
  localStorage.setItem("StationCode", StationCode.value);
  localStorage.setItem("StationName", StationName.value);
  router.push({ name: "home" });
};
</script>

<style lang="scss" scoped>
// 寬度(vw) = 100 / 1920 * 100;
// 高度(vh) = 100 / 1080 * 40;
//px 換算vw : 100vw / 預設螢幕尺寸  * px
h1 {
  font-weight: 600;
  font-size: 1.66vw;
  margin-bottom: 3rem;
}
img.no_ward {
  width: 20vw;
  height: auto;
}
.ward_container {
  min-width: 23.9vw;
  min-height: 13.75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &_select {
    width: 87.5%;
  }
}
ul.ward_list {
  list-style: none;
  padding: 0;
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: auto auto;
  gap: 1.25vw 3vw;
  margin-bottom: 2.5vw;
  li {
    width: 10.4vw;
    min-height: 2.5vw;
    border: solid #d0d5dd thin;
    background: #fff;
    color: #344054;
    @include outline-ghost();
    padding: 0.41vw 0.72vw;
    font-weight: 600;
    font-size: 0.729vw;
    border-radius: $btn_radius_s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background-color: #f7f7f7;
    }
  }
}
.selectward_navarrow {
  position: fixed;
  top: 0;
  left: 0;
  transform: rotate(90deg);
  width: 18vw;
  z-index: 1045;
  pointer-events: none;
}
</style>
