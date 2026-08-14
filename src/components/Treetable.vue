<template>
  
 <div class="p-table-responsive">
<div class="p-treetable">
    <div class="p-treetable-wrapper">
        
        <div  class="p-treetable-thead">
        <div class="caption">
            {{ title }}
            <div class="float-end">
                <slot name="total"></slot>
                {{ total }}
            </div>
        </div>
        <div class="p-treetable-thead-div">
        <table>
            <thead>
                <slot name="thead">                
                </slot>
            </thead>
        </table>
      </div>
    </div>
    <div class="p-treetable-tbody">
    <div class="p-treetable-tbody-content"  :style="{'max-height':scrollSizeHeight, 'min-height': minHeight}">
        <table>
            <tbody>      
                <slot name="tbody">
                <div class="no_data">
                    <div class="no_data_img">
                        <img  src="@/assets/images/nodata.svg" alt="No Data">
                    <div class="no_data_text">No Data</div>
                    </div>
                </div>
                    
                </slot>
            </tbody>
        </table>
    </div>
    </div>
  
        
    </div>
</div>
</div>
</template>

<script setup>



defineProps({
    title: {
        type: String,
        default: null
    },
    tableData: {
        type: Array,
        default: []
    },
    total: {
        type: String,
        default: null
    },
    scrollSizeHeight: {
        type: String,
        default: ""
    },
    minHeight: {
        type: String,
        default: ""
    }
});

</script>
<style lang="scss" scoped>
//卷軸table css版
.p-table-responsive{
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  @include scrollbar();

}

.p-treetable {
  position: relative;

}

.p-treetable-wrapper table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  --bs-table-bg: var(--bs-body-bg);
  --bs-table-border-color: var(--bs-border-color);
  //overflow: hidden;
  vertical-align: middle; 
  position:sticky;
  tr{
  border-bottom: solid #B9B9B9 thin;


  }
}
.p-treetable-thead-div {
     overflow: hidden;
    scrollbar-gutter: stable;
}
.p-treetable-wrapper {
  position: relative;
  border: solid #B9B9B9 thin;
  border-radius: $table_radius_s;
  overflow: hidden;
  tr{
      th, td{
          padding-left:0.625vw;
          padding-right:0.625vw;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
      }
  }
}
.p-treetable-tbody{  
  overflow-y: auto;
  scrollbar-gutter: auto;


  @include scrollbar();
  .p-treetable-tbody-content{
    max-height: 30vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
tr{
// &:nth-child(1) th {
//   background: $bs-table-color;
//   font-size:1rem;
//   font-weight: 600;
//   color: #fff;
//   padding-left: 1.5rem;
//   padding-right:1.5rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   div{
//     font-weight: 600;
//   }
 
//   &:last-child{
//     text-align: right;
//   }
//   &:first-child{
//     text-align: left;
//   }
// }
&:last-child{
       border-bottom: none;
          td{
              border-bottom-width: 0 !important;
          }
      }
th, td{
  padding-left:0.68rem;
  padding-right: 0.68rem;
}
}

}
.p-treetable-thead {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #F2F4F7;
  .caption, caption{
      background: $bs-table-color;
      font-size:1rem;
      font-weight: 600;
      color: #fff;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 2rem;
      padding-right:2rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .float-end{
        font-weight: 600;
      }


  }
  tr th, tr td{
    font-weight: 600;


    span{
      font-weight: 600;
    }
  }
tr{

  th, td {
    background-color: $bs-table-color2;
    color: $bs-table-color2-text;
    font-weight: 600;
    font-size:1rem;
    border-radius: 0;
    &.bg_jade{
      background: $bg_jade;
      color: #fff;
    }
    &.bg_flatred{
      background: $bg_flatred;
      color: #fff;
    }
    &.bg_yellowed{
      background: $bg_yellowed;
      color: #fff;
    }
 }


}
 
}
.p-treetable-tfoot{
  position: sticky;
  bottom: 0;
  z-index: 1;
}

.no_data{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    &_img{
        width: 7vw;
       height: auto;
       text-align: center;
       img{
        max-width: 100%;
        max-height: 100%;
       }
    }
    &_text{
        font-size: 0.9rem;
        line-height: 1.25;
        color: #909090;
        text-align: center;
        margin-top: 0.5rem;
    }
}



</style>