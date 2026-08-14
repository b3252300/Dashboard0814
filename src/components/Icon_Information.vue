<template>
<div class="modal fade" id="information" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Icon Information</h5>
       
      </div>
      <div class="modal-body">
      <div class="card_container">
        <div class="card">
          <div class="card-header">
            Common Area
          </div>
        <div class="card-body">
          <ul class="card-body_ul">
            <li v-for="item in CommonAreaIcon">
              <img class="card-body_img_m" :src="item.img" alt="">
              <div class="card-body_title" v-html="item.title"></div>
            </li>
          </ul>
          <div class="card-subheader">
            Patient Request
          </div>
          <ul class="card-body_ul">
            <li v-for="item in PatientRequest">
              <img class="card-body_img_m" :src="item.img" alt="">
              <div class="card-body_title" v-html="item.title"></div>
            </li>
          </ul>


        </div>
        </div>
        <div class="card">
          <div class="card-header">
            Home / Alert
          </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <ul class="card-body_ul">
                <template  v-for="(item, id) in AlertStatusDefault">
                  <li v-if="id < 3">
                      <img class="card-body_img" :src="item.img" :alt="item.title">
                      <div class="card-body_title" v-html="item.title"></div>
                  </li>
                </template>
                  <li>
                    <div>
                      <div class="card-body_groupImg d-flex flex-nowrap mb-3"  v-for="item in Critical">
                        <img class="card-body_img" :src="item.img" :alt="item.title">
                        <div class="card-body_title" v-html="item.title"></div>
                      </div>
                    </div>
                    <div class="card-body_title">
                      Critical
                    </div>   
                  </li>
                  <!-- <li>
                    <img class="card-body_img" :src="AlertStatus[3].img" :alt="AlertStatus[3].title">
                    <div class="card-body_title" v-html="AlertStatus[3].title"></div>
                  </li> -->
                  <li>
                    <div class="d-flex flex-nowrap">
                      <img class="card-body_img me-1"  v-for="item in  DNRDIL" :src="item.img" :alt="item.title">
                    </div>
                      
                      <div class="card-body_title">
                        <span class="card-body_DNRDIL" v-for="item in DNRDIL">{{ item.title }}</span>
                      </div>
                  </li>
                  <li>
                    <div class="d-flex">
                        <div class="card-body_groupImg d-flex flex-nowrap">
                          <img class="card-body_img"  :src="gender[1].img" :alt="gender[1].title">
                          {{ gender[1].title }}
                        </div>
                        <div class="card-body_groupImg d-flex flex-nowrap">
                          <img class="card-body_img"  :src="gender[2].img" :alt="gender[2].title">
                          {{ gender[2].title }}
                        </div>
                        <div class="card-body_groupImg d-flex flex-nowrap">
                          <img class="card-body_img"  :src="gender[0].img" :alt="gender[0].title">
                          {{ gender[0].title }}
                        </div>
                    </div>
                      <div class="card-body_title">
                        Gender
                      </div>
                  </li>
                  <li>
                      <img class="card-body_img" :src="AlertStatus[14].img" :alt="AlertStatus[14].title">
                      <div class="card-body_title" v-html="AlertStatus[14].title"></div>
                  </li>
                  <li>
                      <img class="card-body_img" :src="AlertStatusDefault[5].img" :alt="AlertStatusDefault[5].title">
                      <div class="card-body_title" v-html="AlertStatusDefault[5].title"></div>
                  </li>
                  
              
                
              </ul>
              <div class="card-subheader">
                Alert Status - Order
              </div>
            <ul class="card-body_ul  card-body_ul_Order">
              <li>
                <iconOrder  bgColor="bg_red" :svgImg="Order[0].img"/>
                <div class="card-body_title" v-html="Order[0].title"></div>
              </li>
              <li>
                <iconOrder bgColor="bg_green" :svgImg="Order[1].img"/>
                <div class="card-body_title" v-html="Order[1].title"></div>
              </li>
              <li>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_red" :svgImg="Order[2].img" class="me-1" />                   
                  Stat
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_green" :svgImg="Order[2].img" class="me-1" />
                  New
                 </div>
                 <div class="card-body_title">
                     {{ Order[2].title }}
                 </div>
              </li>
              <li>
                 <div class="card-body_groupImg d-flex flex-nowrap pe-2">
                  <iconOrder bgColor="bg_red" :svgImg="Order[3].img" class="me-1" />                   
                  Stat
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_green" :svgImg="Order[3].img" class="me-1" />
                  New
                 </div>
                 <div class="card-body_title">
                     {{ Order[3].title }}
                 </div>
              </li>
              <li>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_red" :svgImg="Order[4].img" class="me-1" />                   
                  Stat
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_green" :svgImg="Order[4].img" class="me-1" />
                  New
                 </div>
                 <div class="card-body_title">
                     {{ Order[4].title }}
                 </div>
              </li>
              <li>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_red" :svgImg="Order[5].img" class="me-1" />                   
                  Stat
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                  <iconOrder bgColor="bg_green" :svgImg="Order[5].img" class="me-1" />
                  New
                 </div>
                 <div class="card-body_title">
                     {{ Order[5].title }}
                 </div>
              </li>

          </ul>
             
              
            </div>
            <div class="col-6">
              <div class="card-subheader">
                Alert Status
              </div>
              <ul class="card-body_ul">
                <li>
                  <div class="d-flex">
                    <div class="card-body_groupImg d-flex flex-nowrap align-center" v-for="item in PainScore">
                      <img class="card-body_img me-1"  :src="item.img" :alt="item.title">
                      {{ item.title }}
                    </div> 
                  </div>                   
                      <div class="card-body_title">
                        Pain Score
                      </div>
                </li>
                <li>
                  <img class="card-body_img" :src="AlertStatus[0].img" :alt="AlertStatus[0].title">
                  <div class="card-body_title" v-html="AlertStatus[0].title"></div>
                </li> 
                <li>
                  <div class="d-flex">
                    <div class="card-body_groupImg d-flex flex-nowrap align-center" v-for="item in Isolation">
                      <img class="card-body_img me-1"  :src="item.img" :alt="item.title">
                      {{ item.title }}
                    </div> 
                  </div>
                  <div class="card-body_title">
                        Isolation
                  </div>
                </li>
                <template  v-for="(item, id) in AlertStatus" :key="item.img">
                <li v-if="id > 0 && id <12">
                  <img class="card-body_img" :src="item.img" :alt="item.title">
                  <div class="card-body_title" v-html="item.title"></div>
                </li> 
                </template>
                <li>
                    <div>
                      <div class="card-body_groupImg d-flex flex-nowrap mb-3"  v-for="item in EWS">
                        <img class="card-body_img" :src="item.img" :alt="item.title">
                        <div class="card-body_title" v-html="item.title"></div>
                      </div>
                    </div>
                    <div class="card-body_title">
                      EWS
                    </div>   
                </li>


              </ul>
            </div>
          </div>

          


        </div>
        </div>
        <div class="card">
          <div class="card-header">
            Meal Order
          </div>
        <div class="card-body">
          <ul class="card-body_ul mb-3">
            <li v-for="item in MealOrderdefault">
              <img class="card-body_img_m" :src="item.img" alt="">
              <div class="card-body_title" v-html="item.title"></div>
            </li>
            <li>
                <div class="d-flex">
                 <div class="card-body_groupImg d-flex flex-nowrap   me-2">
                    <div class="icon_foodOrder today-list me-2">
                      {{ foodTime[0].img }}
                    </div>                       
                  Today
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                    <div class="icon_foodOrder tomorrow-list  me-2">
                      {{ foodTime[0].img }}
                    </div>                       
                    Tomorrow
                 </div>
                 
                </div>
                <div class="card-body_title">
                     {{ foodTime[0].title }}
                 </div>
              </li>
              <li>
                <div class="d-flex">
                 <div class="card-body_groupImg d-flex flex-nowrap   me-2">
                    <div class="icon_foodOrder today-list me-2">
                      {{ foodTime[1].img }}
                    </div>                       
                  Today
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                    <div class="icon_foodOrder tomorrow-list  me-2">
                      {{ foodTime[1].img }}
                    </div>                       
                    Tomorrow
                 </div>
                 
                </div>
                <div class="card-body_title">
                     {{ foodTime[1].title }}
                 </div>
              </li>
              <li>
                <div class="d-flex">
                 <div class="card-body_groupImg d-flex flex-nowrap   me-2">
                    <div class="icon_foodOrder today-list me-2">
                      {{ foodTime[2].img }}
                    </div>                       
                  Today
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                    <div class="icon_foodOrder tomorrow-list  me-2">
                      {{ foodTime[2].img }}
                    </div>                       
                    Tomorrow
                 </div>
                 
                </div>
                <div class="card-body_title">
                     {{ foodTime[2].title }}
                 </div>
              </li>
              <li>
                <div class="d-flex">
                 <div class="card-body_groupImg d-flex flex-nowrap   me-2">
                    <div class="icon_foodOrder today-list me-2">
                      {{ foodTime[3].img }}
                    </div>                       
                  Today
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                    <div class="icon_foodOrder tomorrow-list  me-2">
                      {{ foodTime[3].img }}
                    </div>                       
                    Tomorrow
                 </div>
                 
                </div>
                <div class="card-body_title">
                     {{ foodTime[3].title }}
                 </div>
              </li>
              <li>
                <div class="d-flex">
                 <div class="card-body_groupImg d-flex flex-nowrap   me-2">
                    <div class="icon_foodOrder today-list me-2">
                      {{ foodTime[4].img }}
                    </div>                       
                  Today
                 </div>
                 <div class="card-body_groupImg d-flex flex-nowrap">
                    <div class="icon_foodOrder tomorrow-list  me-2">
                      {{ foodTime[4].img }}
                    </div>                       
                    Tomorrow
                 </div>
                 
                </div>
                <div class="card-body_title">
                     {{ foodTime[4].title }}
                 </div>
              </li>
          </ul>
        </div>
        </div>
        <div class="card">
          <div class="card-header">
            Badge
          </div>
        <div class="card-body">
          <ul class="card-body_ul">
            <li v-for="item in Badgedefault">
              <img class="card-body_img" :src="item.img" alt="">
              <div class="card-body_title" v-html="item.title"></div>
            </li>
          </ul>
       


        </div>
        </div>
      </div>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
    </div>
  </div>
</div>
</template>

<script setup>
import iconOrder from "@/components/order_Icon/iconOrder.vue";
import ratient from "@/composable/icon_ratient";
import  alert  from "@/composable/icon_alert";
import  CommonArea  from "@/composable/icon_CommonArea";
import  MealOrder  from "@/composable/icon_MealOrder";
import  Badge  from "@/composable/icon_Badge";
const { CommonAreaIcon, PatientRequest } = CommonArea();
const { AlertStatus, AlertStatusDefault, Order, PainScore, Isolation, EWS } = alert();
const { Critical, DNRDIL, gender } = ratient();
const { MealOrderdefault, foodTime } = MealOrder();
const { Badgedefault } = Badge();

</script>
<style lang="scss">
.card-body_ul_Order .icon_circle{
    min-width:2rem;
    height:2rem;
    padding: 0.16rem;
    object-fit: contain;
}
</style>
<style lang="scss" scoped>
#information{
  .card_container{
    display: grid;
    column-gap: 1.5rem;
    grid-template-columns: 1fr 2.5fr 1fr 1fr;
    min-width: 136.5rem;
    .card{
      border-radius: $border_radius_s;
      padding: 1rem;      
      overflow: visible;
      .card-body_DNRDIL{
        &:after {
          content: " / ";
        }
        &:last-child{
          &:after{
            display: none
          }
        }
      }
        .card-header, .card-subheader{
          text-align: left;
          background: transparent;
          padding: 0 0 0.6rem;
          color: #101828;
          font-size: 1.125rem;
          font-weight: 500;
        }
        .card-subheader{
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }
        .card-body{
          text-align: right;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 0;
          
          &_ul{
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
            >li{
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1rem;
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
        &_groupImg{
          margin-right: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
          color: #909090;
        }  
        &_img{

          min-width:1.5rem;
          height:1.5rem;
          object-fit: contain;
        }
        &_img_m{
          min-width:2rem;
          height:2rem;
          object-fit: contain;
        }
        
          
        &_title{
          font-size:0.937rem ;
          line-height: 1.4rem;
          font-weight: 400;
          margin-left: 1rem;
        }

        }
        
       
      }
   }
   .modal-header{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-bottom: none;
   }
  .modal-body{
    padding-top: 0;
  }
  .modal-dialog{
    --bs-modal-width:136.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .modal-content{
    max-width: 100vw;
  }

}

</style>