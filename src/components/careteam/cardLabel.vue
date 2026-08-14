<template>
<div :class="['cardLabel', bgColor]"> 
    <div class="num"  ref="num">
        {{ Acuity }}
    </div>
    {{ BedCode }}
</div>
</template>
<script setup>

defineProps({
    bgColor : String,
    Acuity:String,
    BedCode:String
})

</script>