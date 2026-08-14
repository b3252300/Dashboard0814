import { computed } from "vue";
import { defineStore } from 'pinia';
import { useGlobalStore } from "@/stores/store";

export const btn_bedfooterIcon = defineStore('bedfooterIcon', () => {
    const globalStore = useGlobalStore();

    function textBedId(index) { 
        // 檢查該項目是否已被選中
        const selectedIndex = globalStore.bedStatusFilter.indexOf(index);

        if (selectedIndex === -1) {
            // 如果沒有選擇，則將其新增至清單中
            globalStore.bedStatusFilter.push(index);
        } else {
            // 如果已經選擇，則將其從清單中刪除
            globalStore.bedStatusFilter.splice(selectedIndex, 1);
        }
    }

    function isBedActive(index) {
        // 檢查該項目是否在所選索引清單中
        return globalStore.bedStatusFilter.includes(index);
    }

    const clearBedClicked = () => {
        // 清除所選索引列表
        globalStore.bedStatusFilter = [];
        localStorage.removeItem('BedStatusFilter');
    };
  
    return { 
        selectedBedIndices: computed(() => globalStore.bedStatusFilter), 
        textBedId, 
        isBedActive, 
        clearBedClicked 
    };
});

  
