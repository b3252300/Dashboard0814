<template>
    <ul class="dropdown-menu">
       <li><a class="dropdown-item" href="#">{{ title }}</a></li>
      
    </ul>
</template>
<script setup>

 defineProps({  
    title: {
    type: String,
    default: "暫無資料"
  },
 
  });

  
  

</script>