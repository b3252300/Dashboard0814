<template>

    <RouterLink class="btn btn-outline-secondary" :to="lineLink">
        <slot> {{ title }}</slot>

    </RouterLink>



</template>
<script setup>

//import { ref} from 'vue';
import { RouterLink } from 'vue-router';


// const lineLink = ref("/");
defineProps({
    lineLink : String,
    title:String,
    active:String
})
</script>

<style lang="scss" scoped>
.btn-outline-secondary {
    border: solid #D0D5DD thin;
    background: #fff;
    color: $btn-outline;
    font-weight: 600;
    font-size: 0.875rem;
    @media screen and (max-width:1300px) {
      line-height: 1;
    }
    &.router-link-active{
    background: $btn-outline-bg-secondary-hover;
    border-color: $bs-btn-hover-color;
     color:$bs-btn-hover-color;
    }
  &:selected{
    border-color: $btn-outline-hover;
    color:$btn-outline;

  }
  &:checked + .btn, :not(.btn-check) + &:active, &:first-child:active, &.active, &.show{
    background: $btn-outline-bg-secondary-hover;
    border-color: $bs-btn-hover-color;
     color:$bs-btn-hover-color;
     
   }
}


</style>