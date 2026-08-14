<template>
    <!-- <TreetableScroll class="tableStyle"   scrollSizeHeight="80vh" scrollSizeWeight="100%"  :key="itemKey">
    <template #thead> 
      <tr>
        <th>Bed</th>
        <th  ref="treetableSize"  v-for="col in column" :key="col">{{ col }}</th>
      </tr>
    </template>
    <template #tbody>
        <tr v-for="item in list" :key="item.BedCode">
            <td>{{ item.BedName }}</td>
            <td v-for="col in column" :key="col">
                <img :src="getData(col, item)" alt="">
            </td>
        </tr>

        </template>
        <template #tfoot>
            <tr>
                <th></th>
                <th v-for="col in column" :key="col" @click="sortByColumn(col)">{{ col }}</th>
            </tr>
        </template>

  </TreetableScroll> -->




  <div class="table-sticky-wrapper">
<div class="table-sticky-container">
    <table class="table table-sticky">
      <thead class="tr-sticky">
            <tr>
                <th>Bed</th>
                <th   v-for="col in column" :key="col">{{ col }}</th>
            </tr>   
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.BedCode">
            <td>{{ item.BedName }}</td>
            <td v-for="col in column" :key="col">
                <img v-if="getData(col, item)" :src="getData(col, item)" alt="">
            </td>
        </tr>
      </tbody>
      <tfoot class="tr-sticky">
        <tr>
            <th>Bed</th>
            <th v-for="col in column" :key="col" @click="sortByColumn(col)">{{ col }}</th>
        </tr>
      </tfoot>
  </table>
  </div>

</div>


</template>
<script setup>
import TreetableScroll from '@/components/TreetableScroll.vue';
import { ref, toRefs, computed, onMounted, watchEffect, watch } from 'vue'
import { useGlobalStore } from "@/stores/store";
import Badge from "@/composable/icon_Badge";

const { Badgedefault } = Badge();
const globalStore = useGlobalStore();
const props = defineProps({
    ApiRootUrl: {
        type: String,
        default: () => {
            '';
        },
    },
    FileUrl: {
        type: String,
        default: () => {
            '';
        },
    },
    list: {
        type: Array,
        default: () => {
            [];
        },
    },
    column: {
        type: Array,
        default: () => {
            [];
        },
    },
});
const { list, column, ApiRootUrl, FileUrl } = toRefs(props);
const itemKey = ref(0)
const sortColumn = ref("BedName");

const getData = (col, item) => {
    var iconCode = '';
    var iconUrl = '';
    var iconRowId = '';
    
    item.BadgeList.forEach(element => {
        if (element.Name == col) {
            if (element.Visible) {
                iconCode = element.Code;
                iconRowId = element.IconRowId;
            }
        }
    });

    if (iconRowId != null && iconRowId != '') {
        iconUrl = FileUrl.value + iconRowId;  
    } else if (iconCode) {
        // Resolve local badge icon from Badgedefault list as fallback
        const localIcon = Badgedefault.find(
            b => b.title.includes(iconCode) || b.title === iconCode || b.title.toLowerCase() === iconCode.toLowerCase()
        );
        if (localIcon) {
            iconUrl = localIcon.img;
        } else {
            iconUrl = ApiRootUrl.value + "/defaultfile/badge_" + iconCode;
        }
    }
  
    return iconUrl;
}

const sortByColumn = (columnName) => {
    globalStore.badgeSortColumn = columnName;
    if (sortColumn.value != columnName) {
        sortColumn.value = columnName;
        var itemA, itemB;

        list.value.sort((a, b) => {

            a.BadgeList.forEach(element => {
                if (element.Name == columnName) {
                    itemA = element.Visible;
                }
            });

            b.BadgeList.forEach(element => {
                if (element.Name == columnName) {
                    itemB = element.Visible;
                }
            });

            if (itemA < itemB) return 1
            if (itemA > itemB) return -1

            //欄位值相同時，使用BedName排序
            if (a.BedName > b.BedName) return 1
            if (a.BedName < b.BedName) return -1
        });

        itemKey.value = Math.random();
    }
}






// //表格總寬度客製
const treetableSize = ref(0);//取得 th 的 DOM
const num = 6;//th 的固定寬度
// 用於初始化 th 和 td 元素寬度的計算屬性
const sizeWidth = computed(() => {
    const elements = document.querySelectorAll(".tableStyle th, .tableStyle td");
    elements.forEach((item) => {
        item.style.width = num + "rem"; // 初始化寬度
    });
    return elements;
});

// 用於計算表格總寬度的計算屬性
const tableSize = computed(() => {
    const totalColumns = treetableSize.value.length + 1; // 列數
    const totalWidth = num * totalColumns; // 表格總寬度（rem 單位）

    const elements = document.querySelectorAll(".p-treetable-wrapper, .p-treetable-thead tr, .p-treetable-tbody tr, .p-treetable-tfoot tr");
    elements.forEach((item) => {
        item.style.width = totalWidth + "rem"; // 設置表格總寬度
    });

    return elements;
});

// 更新表格寬度的函數
const updateTableSize = () => {
    sizeWidth.value; // 初始化 th 和 td 寬度
    tableSize.value; // 設置表格總寬度
};

onMounted(() => {
    watchEffect(() => {
        updateTableSize();
    });

});

watch(() => props.list, (newVal, oldVal) => {
    if(globalStore.badgeSortColumn != null && newVal.length != 0){
        sortByColumn(globalStore.badgeSortColumn);
    }
});

</script>
