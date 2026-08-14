<template>

<div  @click="Filiter(item) " :class="['footer_icon', { active: isBedActive(item) }]">
     
    <img v-if="imgIcon != null" :src="imgIcon">

    <div class="num">
        {{ num }}
    </div>
</div>
</template>
<script setup>
import {  ref} from "vue";
import { storeToRefs } from 'pinia'
import { btn_bedfooterIcon } from '@/stores/btn_bedfooterIcon';
const footerIcon =btn_bedfooterIcon();


//取消所有選取
const { textBedId, isBedActive } =footerIcon;

defineProps({
    imgIcon:String,
    num:Number,
    activetion:String,
    item:String,
    bgColor:String,
})

const emit = defineEmits(['filiteritem']);

const Filiter = (ByItem) => {
    console.log(ByItem);
    textBedId(ByItem);
    emit('filiteritem', footerIcon.selectedBedIndices);
}

</script>
<style lang="scss" scoped>
.footer_icon{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid rgba(208, 213, 221, 0.4) 0.15rem;
    border-color: transparent;
    background: #fff;
    padding: 0.18rem 0.75rem;
    border-radius: 6.25rem;
    width:5.1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    &.active{
        border-color:$btn-outline-secondary-hover;      
        background-color: rgba(13, 255, 117, 0.2);

    }
    img {
        height: 1.37rem;
        width:1.37rem;
        padding: 0.016rem;
        object-fit: contain;
        object-position: center;
     }
    .num{
        width:1.56rem;
        height:1.56rem;
        border-radius: 100%;
        background: #FEF0C3;
        margin-left: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #222222;
        font-size:1rem;
        font-weight: 500;
        @media screen and (max-width:1300px){
            width:1.3rem;
            height:1.3rem;
            font-size: 0.8rem;
        }
    }
}

.icon_circle {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
img{
    width: 1.5rem;
    height: auto;
}
}

</style>