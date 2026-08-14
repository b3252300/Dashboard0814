<template>
    <!-- <div>
        <table class="table table-default" :key="TableKey">
            <thead>
                <tr>
                    <th colspan="7">Blood Transfusion
                        <div class="float-end">Total : {{total}}</div>
                    </th>
                
                </tr>
                <tr>
                    <th width="267">Bed</th>
                    <th width="267">Patient</th>
    
                    <th width="267">Priority</th>
                    <th width="267">Start Time</th>
                    <th width="267">Blood Group</th>
                    <th width="267">Blood Product</th>
                    <th width="267">Status</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in list" :key="item.BedCode" :class="setClass(item)">
                    <td>{{ item.BedName }}</td>
                    <td>{{ item.PatientName }}</td>
              
                    <td v-if="item.Priority == 'Life Threatening'" class="red">{{ item.Priority }}</td>
                    <td v-else>{{ item.Priority }}</td>
                    <td>{{ GetDateTimeDDMMHHmm(new Date(item.StartDateTime)) }}</td>
                    <td>{{ item.BloodGroup }}</td>
                    <td>{{ item.BloodProduct }}</td>
                    <td v-if="item.Status == 'Paused'" class="red">{{ item.Status }}</td>
                    <td v-else>{{ item.Status }}</td>
                </tr>
            </tbody>
        </table>
    </div> -->

    <Treetable  title="Blood Transfusion"  :key="TableKey"  scrollSizeHeight="30vh" minHeight="30vh">
    <template #total> 
        Total : {{total}}
    </template>
    <template #thead> 
        <tr>
            <th  width="100">Bed</th>
            <th width="179">Patient</th>
            <!-- <th>Perform Date</th> -->
            <th width="179">Priority</th>
            <th width="179">Start Time</th>
            <th width="179">Blood Group</th>
            <th>Blood Product</th>
            <th>Status</th>
        </tr>
    </template>
    <template #tbody>
        <tr v-for="item in list" :key="item.BedCode" :class="setClass(item)">
            <td  width="100">{{ item.BedName }}</td>
            <td width="179">{{ item.PatientName }}</td>
            <!-- <td>{{ item.PerformDateTime }}</td> -->
            <td  v-if="item.Priority == 'Life Threatening'" class="red" width="179">{{ item.Priority }}</td>
            <td v-else width="179">{{ item.Priority }}</td>
            <td width="179">{{ GetDateTimeDDMMHHmm(new Date(item.StartDateTime)) }}</td>
            <td width="179">{{ item.BloodGroup }}</td>
            <td>{{ item.BloodProduct }}</td>
            <td v-if="item.Status == 'Paused'" class="red">{{ item.Status }}</td>
            <td v-else>{{ item.Status }}</td>
        </tr>
</template>

  </Treetable>

</template>

<script setup>
import Treetable from '@/components/Treetable.vue'; 
import { ref, toRefs, onUnmounted } from 'vue'
import useDate from "@/composable/useDate";

const { GetDateTimeDDMMHHmm } = useDate();

const props = defineProps({
    list: {
        type: Array,
        default: () => {
            [];
        },
    },
    total: {
        type: Number,
        default: () => {
            0;
        },
    },
});
const { list, total } = toRefs(props);
const TableKey = ref(1);

const setClass = (item) => {
    if (item.AlarmOverMinutes != null) {
        var overTime = new Date(item.AlarmOverDateTime);
        var nowTime = new Date();

        if (nowTime > overTime) {
            return 'OverTime';
        } else {
            return '';
        }
    } else {
        return '';
    }
}


const UpdateTable = () => {
    TableKey.value = Math.random();
    console.log(1);
}

const timer = setInterval(UpdateTable, 60000);

timer;

onUnmounted(() => clearInterval(timer));
</script>
<style lang="scss" scoped>

.OverTime {
    background: #FEF9E8;
}
</style>

