<template>
  <Treetable :title="title" scrollSizeHeight="72vh">
    <template #thead>
      <tr>
        <th>Department</th>
        <th>Name</th>
        <th>Speed Dial</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="item in list" :key="item.Code">
        <td>{{ item.Department }}</td>
        <td>
          <div class="item">
            <div v-for="sub in item.Data">
              {{ sub.DoctorName }}
            </div>
          </div>
        </td>
        <td>
          <div class="item">
            <div v-for="sub in item.Data">
              {{ sub.Dial }}
            </div>
          </div>
        </td>
      </tr>
      
    </template>
  </Treetable>
</template>

<script setup>
import Treetable from "@/components/Treetable.vue";
import { toRefs } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => {
      [];
    },
  },
  title: {
    type: String,
    default: () => {
      "";
    },
  },
});

const { list } = toRefs(props);
console.log(props.list);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
}
</style>
