<template>
   <div class="chooseMain">
    <div class="room-block">
      <div class="content">
        <div class="room-wrap">
          <div v-for="(cols, cols_index) in list" :key="cols_index">
            <!--RowType: 列種類 1:房間 2:通道 -->
            <div class="cols-passageway" v-if="cols.RowType == 2"></div>
            <div class="cols" v-else>
              <div v-for="(col, col_index) in cols.ColmnList" :key="col_index">
                <div
                  v-if="col.ColumnType == 'Station'"
                  class="nursing-station"
                  :style="[{ marginLeft: `${col.LeftSpacing}px` }, { marginTop: `${col.TopSpacing}px` }]"
                >
                  NURSING STATION
                </div>
                <div
                  v-else-if="col.ColumnType == 'Aisle'"
                  class="passageway"
                  :style="[{ marginLeft: `${col.LeftSpacing}px` }, { marginTop: `${col.TopSpacing}px` }]"
                >
                </div>
                <div
                  v-else-if="col.ColumnType == 'EmergencyExit'"
                  class="escape-exit"
                  :style="[{ marginLeft: `${col.LeftSpacing}px` }, { marginTop: `${col.TopSpacing}px` }]"
                >
                  <img
                    class="escape-exit-icon"
                    :src="EmergencyExit"
                  ></img>
                  <div class="escape-exit-text">STAIR</div>
                </div>
                <div
                  v-else
                  class="room-content"
                  :class="col.ColumnType == 'Room_140' ? 'four-room' : ''"
                  :style="[{ background: '#F2F4F7' }, { marginLeft: `10px` }, { marginTop: `10px` }]"
                >
                  <div class="rooms">
                    <div
                      v-for="(item, index) in col.RoomList"
                      :key="index"
                      class="room-item"
                      :style="getStyle(item.BedStatus)"
                    >
                      <span>{{ item.BedName }}</span>

                      <div class="room-item-status" v-if="item.IsolationBedType != null || item.IsBooking">
                        <img class="room-item-status-icon" v-if="item.IsolationBedType == 'REVERSE'" :src="Isolation[0].img" />
                        <img class="room-item-status-icon" v-if="item.IsolationBedType == 'NORMAL'" :src="Isolation[1].img" />
                        <img class="room-item-status-icon" v-if="item.IsBooking" :src="AlertStatusDefault[5].img" />
                      </div>
                      <div class="room-item-status" v-else>
                        <img class="room-item-status-icon" v-if="item.Sex == 1" :src="gender[1].img" />
                        <img class="room-item-status-icon" v-else-if="item.Sex == 2" :src="gender[2].img" />
                        <img class="room-item-status-icon" v-else-if="item.Sex != null" :src="gender[0].img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs } from 'vue';
import EmergencyExit from '@/assets/images/EmergencyExit.svg';
//icon的js
import alert from "@/composable/icon_alert";
import icon_ratient from "@/composable/icon_ratient";
const { Isolation, AlertStatusDefault } = alert();
const { gender } = icon_ratient();

const props = defineProps({
  list: {
    type: Array,
    default: () => {
        [];
    },
  },
});
const { list } = toRefs(props);

function getStyle(bedstatus) {
  let style = '';
  if (bedstatus == 1) {
    //occupied
    style = 'background: #D0D5DD;border: 2px solid #98A2B3;';
  } else if (bedstatus == 2) {
    //available
    style = 'background: #86EAB2;border: 2px solid #4DDB8A;';
  } else if (bedstatus == 3) {
    //Discharging
    style = 'background: #D9D6FE;border: 2px solid #BDB4FE;';
  } else if (bedstatus == 4) {
    //Housekeeping
    style = 'background: #FEE28A;border: 2px solid #FAC215;';
  } else if (bedstatus == 5) {
    //Blocked
    style = 'background: #FECACA;border: 2px solid #F87171;';
  } else {
    return '';
  }
  return style;
}
</script>
<style lang="scss" scoped>
.chooseMain[data-v-8e529ec9] {
    margin-bottom: 1rem;
    background: #ffffff;
    margin-right: -1.25rem;
    margin-left: -1.25rem;
    margin-top: -1.25rem;
    padding-top: 1.5rem;
}

.room-block {
  position: relative;
  margin: auto;
  .content {
    width:100%;
    overflow: hidden;
    overflow-x: auto;
    .room-wrap {
      margin: auto;
      position: relative;
      width: fit-content;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      .cols-passageway {
        width: 100%;
        height: 32px;
        background: #fef9e8;
      }
      .cols {
        display: flex;
        width: fit-content;
        width: -webkit-fit-content;
        width: -moz-fit-content;
      }
      // 护理站
      .nursing-station {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 380px;
        height: 162px;
        color: #026aa2;
        font-size: 28px;
        border: 8px solid #ffffff;
        background: #f5faff;
      }
      //通道
      .passageway {
        width: 32px;
        height: 180px;
        display: flex;
        align-items: center;
        text-align: center;
        background-color: #fef9e8;
      }
      // 逃生口
      .escape-exit {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: column;
        width: 61px;
        height: 162px;
        margin: 8px;
        // border: 8px solid #ffffff;
        background: #98a2b3;
        .escape-exit-icon {
          width: 100%;
          height: 26px;
        }
        .escape-exit-text {
          text-align: center;
          color: #ffffff;
          font-size: 16px;
          line-height: 118px;
        }
      }
      // 房间容器
      .room-content {
        // padding: 0px 3px;
        width: 93px;
        height: 162px;
        margin: 8px;
        // border: 8px solid #ffffff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        .rooms {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      .four-room {
        width: 198px;
      }
      .room-item {
        // border: 1px solid #999;
        border-radius: 5px;
        // padding:5px 8px;
        height: 58px;
        width: 88px;
        padding-left: 4px;
        box-sizing: border-box;
        margin: 5px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 18px;
        color: #1d2939;
        .room-item-status {
          margin-left: 4px;
          text-align: left;
          display: flex;
          flex-flow: column;
          justify-content: center;
          .room-item-status-icon {
            height: 24px;
            width: 24px;
          }
        }
      }
    }
  }
}
div:has(> .nursing-station) {
    background: #fef9e8;
}
</style>
