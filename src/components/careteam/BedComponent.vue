<template>
  
        <!-- <div :class="['bedIcon', 'ewsNone']"> -->
        <div :class="['bedIcon', getClasses(EwsLevel)]">
            <div v-if="Acuity != 0" class="acuity"> {{ Acuity }} </div>
            <div>{{ BedName }}</div>
        </div>
   
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
    BedName: {
        type: String,
        default: () => {
            '';
        },
    }, EwsLevel: {
        type: Number,
        default: () => {
            0;
        },
    },
    Acuity: {
        type: Number,
        default: () => {
            0;
        },
    },
});

const { BedName, EwsLevel, Acuity } = toRefs(props);

function getClasses(EwsLevel) {

    if (EwsLevel == 0) {
        return 'ewsNone';
    } else if (EwsLevel == 1) {
        return 'ewsLow'
    } else if (EwsLevel == 2) {
        return 'ewsModerate'
    } else if (EwsLevel == 3) {
        return 'ewsHigh'
    }
}
</script>

<style lang="scss" scoped>
.bedIcon {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.5;
    height: 1.7rem;
    font-weight: 500;
    color: #fff;
    width:4rem;
    border-radius: $border_radius_s;
    padding: 0.125rem 0.31rem;
    margin-right: 0.25rem;
    margin-bottom: 0.3rem;
    justify-content: center;

}

.ewsNone {
    color: #222222;
    background-color: #fff;
    border: solid #DEDEDE thin;
}

.ewsLow {
    background-color: #489F6E;
}

.ewsModerate {
    background-color: #E5B714;
}

.ewsHigh {
    background-color: #E66060;
}

.acuity {
    width:1.5rem;
    height: 1.375rem;
    background: #F0FCF5;
    border-radius: $border_radius_s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1DA254;
    font-weight: bolder;
    margin-right: 0.25rem;
}
</style>