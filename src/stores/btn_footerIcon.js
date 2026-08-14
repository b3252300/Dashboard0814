import { computed } from "vue";
import { defineStore } from "pinia";
import { useGlobalStore } from "@/stores/store";

export const btn_footerIcon = defineStore("footericon", () => {
  const globalStore = useGlobalStore();

  function textId(index) {
    // 檢查該項目是否已被選中
    const selectedIndex = globalStore.alertFilter.indexOf(index);

    if (selectedIndex === -1) {
      // 如果沒有選擇，則將其新增至清單中
      globalStore.alertFilter.push(index);
    } else {
      // 如果已經選擇，則將其從清單中刪除
      globalStore.alertFilter.splice(selectedIndex, 1);
    }
  }

  function doctorId(index) {
    if (index === "ALL") {
      //選擇ALL的時候，要將所有篩選清除
      globalStore.doctorFilter = {};
    } else {
      globalStore.doctorFilter = {
        Select: [index]
      };
    }
  }

  function teamId(index) {
    if (index === "ALL") {
      //選擇ALL的時候，要將所有篩選清除
      globalStore.teamFilter = {};
    } else {
      globalStore.teamFilter = {
        Select: [index]
      };
    }
  }

  function isActive(index) {
    // 檢查該項目是否在所選索引清單中
    return globalStore.alertFilter.includes(index);
  }

  const clearClicked = () => {
    // 清除所選索引列表
    globalStore.alertFilter = [];
    globalStore.doctorFilter = {};
    globalStore.teamFilter = {};
    localStorage.removeItem("AlertFilter");
    localStorage.removeItem("DoctorFilter");
    localStorage.removeItem("TeamFilter");
  };

  return {
    selectedIndices: computed(() => globalStore.alertFilter),
    textId,
    isActive,
    clearClicked,
    selectedDoctors: computed(() => globalStore.doctorFilter.Select || []),
    doctorId,
    selectedTeams: computed(() => globalStore.teamFilter.Select || []),
    teamId,
  };
});

