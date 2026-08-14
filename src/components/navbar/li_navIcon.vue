<template id="NavTitle">
    <div class="li_navIcon rounded-pill  bg-light">
    <div class="navIcon">
        <slot  name="img">
            <img  src="@/assets/images/Union.svg" alt="Number of patients in ward/total ward beds">
        </slot>
              
    </div>
    <span class="badge text-dark">
        <slot  name="badge">0</slot>
    </span>
</div>
</template>



<script setup>


//icon 底色
defineProps({
  bgColor: String
})

//寫法一
// const icon = defineProps({
//   bgColor: String
// })



</script>
<style lang="scss">
.navIcon{
  width: 2.7rem;
  height: auto;
  @media screen and (max-width:1600px){
    width:1.7rem;
  height: 1.7rem;
  }
  img{
    width: 100%;
    height: auto;
  }

}
</style>
<style lang="scss" scoped>
.li_navIcon{
  display: flex;
    align-items: center;
    padding: 0 clamp(0.5rem, 2vw, 0.9375rem);
    justify-content: center;
    height:2.5rem;
    @media screen  and (max-width: 1300px) {
      // padding: 0.2rem clamp(0.5rem,2vw, 0.9375rem);
     }

    .badge {
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 400;
      @media screen and (max-width: 1300px) {
        font-size: clamp(0.75rem, 2vw, 1.25rem);
        padding: 0.2rem 0.5rem;
      }
    }
}

.navIcon{
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  // @media screen and (max-width: 1300px) {
  //   width: 27px;
  //   height: 27px;
  // }
  img {
    width: 100%;
    height: auto;
    // @media screen and (max-width: 1300px) {
    // transform: scale(0.8);
    // }
  }
  
}

</style>