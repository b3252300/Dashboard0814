<template>
<div class="table-responsive">
  <caption>Nurse 11/02(SUN) Morning 7am - 2pm</caption>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
     
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script setup>

defineProps({
      title: String,
      room: String,
      content: String,
      state:String
});
</script>

<style lang="scss" scoped>
caption {
    background: #475467;
    width: 100%;
    display: flex;
    color: #fff;
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    padding: 18px 24px;
}
.table th {
    background: #F2F4F7 !important;
    font-weight: 600;
    color: #667085;
    font-size: 1rem;
}
</style>   
    
    