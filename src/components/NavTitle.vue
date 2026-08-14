

<template id="NavTitle">
    <div class="item_title">
        <slot  name="item-title">Head Nurse</slot>
    </div>
    <div class="item_name">
        <slot  name="item-name">adrian foong</slot>
    </div>
        
</template>
<style lang="scss" scoped>
.item_title{
    color: #909090;
    font-size: 0.8125rem;
    line-height: 1.3;
    white-space: nowrap;
}
.item_name{
    color: #1DA254;
    font-size:0.9rem;
    line-height: 1.2;
    font-weight: 600;
    @media screen  and (max-width: 1600px) {
        font-size:0.9rem;
    }
}

</style>