<template>
<div class="img_404_content">
  <h1>Something went wrong</h1>
<div class="content">
  Try refreshing the page,or try again later.
</div>

<img :src="img_404" alt="404">
<button type="button" class="btn btn_refresh" @click="Refresh()">
  Refresh Page
</button>

</div>

  </template>
  
  <script setup>

import img_404 from "@/assets/images/error.svg";

  import { computed } from 'vue'

  import { useRouter } from 'vue-router'  
  const router = useRouter()



  import refresh from "@/composable/refresh";
  const { pageRefresh } = refresh();  
  function Refresh() {
    pageRefresh();
  }



  const back = () => {
    router.push( '/' )
  }
  
  defineOptions( {
    name : '404'
  } )
  </script>
  
  <style lang="scss" scoped>
 h1{
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
 }
 .content{
font-size: 1.5rem;
margin-bottom: 2rem;
 }
 .img_404_content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
 }

 .btn_refresh{
  width: 25.6rem;
  height: 3rem;
  font-size: 0.875rem;
  font-weight: 600;
  @include primary();
 }
  </style>
  