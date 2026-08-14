<template>

    <div  @click="Filiter(item)"   :class="['footer_icon',bgColor , { active: isBedActive(item) }]">
      {{ content }}
        <div class="num">
            {{ num }}
        </div>
    </div>

   
    </template>
    <script setup>
    import {  ref } from "vue";
    import { storeToRefs } from 'pinia'
    import { btn_bedfooterIcon } from '@/stores/btn_bedfooterIcon';
    const footerIcon = btn_bedfooterIcon();
    
    
    //取消所有選取
    const { textBedId, isBedActive } =footerIcon;
    
    defineProps({
        content:String,
        num:Number,
        activetion:String,
        item:String,
        bgColor:String
    })
    
    
    const emit = defineEmits(['filiteritem']);

    const Filiter = (ByItem) => {
        textBedId(ByItem);
        emit('filiteritem', footerIcon.selectedBedIndices);
    }

    
    
    </script>
    <style lang="scss" scoped>
    .footer_icon{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: solid #D0D5DD thin;
        background: #fff;
        padding: 0.18rem 0.75rem;
        border-radius: 6.25rem;
        min-width:5.1rem;
        width: auto;
        margin-right: 0.5rem;
        cursor: pointer;
        @media screen and (max-width:1300px){
            font-size: 0.87rem;
         }
       
        img {
            height:1.37rem;
            width: 1.37rem;
            padding: 0.016rem;
            object-fit: contain;
            object-position: center;
         }
        .num{
            width:1.56rem;
            height: 1.68rem;
            border-radius: 100%;
            background: #FEF0C3;
            margin-left: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #222222;
            font-size: 1rem;
            font-weight: 500;
            @media screen and (max-width:1300px){
            width:1.3rem;
            height:1.3rem;
            font-size: 0.8rem;
            }
        }
    }
    
    </style>