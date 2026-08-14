<template>
<button type="button" class="btn  btn-outline-footer">    
    <slot name="img"></slot>
    {{ title }}
</button>

</template>
<script setup>

defineProps({   
    title:String
})
</script>
<style lang="scss" scoped>

</style>