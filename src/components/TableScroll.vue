<template>

<DataTable    class="table table-scrollY" width="100%" 
        :options="{ 
            searching: false,//搜尋欄
            ordering: false,//header 的排序功能
            paging: false,
            scrollCollapse: true,//開啟凍結
            scrollY: '50vh',//卷軸高度
            info: false // 總比數 
        }">
    
             
    <thead>
        <tr>
          <th colspan="2">title</th>
          <th>Total Patient： null</th>
        </tr>
        <tr>
          <th>No data available in table</th>
          <th>No data available in table</th>
          <th>No data available in table</th>
   
        </tr>
      </thead>
        <tbody>
            <tr>
                <td>No data available in table</td>
                <td>No data available in table</td>
                <td>No data available in table</td>
            </tr>
        </tbody>
  

</DataTable>


</template>
<script setup>
import DataTable from 'datatables.net-vue3';
let tableData = ref([]);
const columns = [
  { data: 'Time' },
  { data: 'Cleaning done' },
  { data: 'Time taken' },
  { data: 'Bed' },
  { data: 'Patient' },
  { data: 'Status' },
];

const data=[
  { data: '21/2 13:33' },
  { data: '' },
  { data: '13:33' },
  { data: '706A' },
  { data: 'Pamalina kamaruzaman' },
  { data: '' },
];

</script>