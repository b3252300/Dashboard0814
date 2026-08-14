<template>




   <div class="table-sticky-wrapper"      :style="{'max-height':scrollSizeHeight}">
    <table class="table table-sticky">
        <thead class="tr-sticky">
          
              <slot name="thead"></slot>
            
        </thead>
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
 <tfoot class="tr-sticky">
            
              <slot name="tfoot">
                   </slot>
                        
        </tfoot>
    </table>
</div>




</template>
   
<script setup>

   
   defineProps({
       title:{
           type:String,
           default: null
       },
       total:{
           type:String,
           default:null
       },
       scrollSizeHeight:{
           type:String,
           default:""
       },
       scrollSizeWeight:{
           type:String,
           default:""
       }
   });

</script>




<style lang="scss" scoped>
   //卷軸table css版
.p-table-responsive{
  &.tableStyle > :not(caption) > * > * {
    padding: 0;
   }
  &.tableStyle{
    .p-treetable-wrapper{      
      .caption{
        display: none;
        }
        table{
            min-width:100%;
        }
    }
  
    .p-treetable-tbody {
      overflow: visible;
   
    }
  }
}

.p-treetable {
  position: relative;
  border: solid #B9B9B9 thin;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 0;
  max-width: 100%;
  width: fit-content;
  &::-webkit-scrollbar-track{	 

     background-color: #f2f4f7;
 
   }
 
   &::-webkit-scrollbar{
     width: 8px;
     height: 8px;
     border-radius:0;
     background-color: #f2f4f7;
 
   }
   
   &::-webkit-scrollbar-thumb{
     border-radius: 0.625rem;
     background-color: #C1C1C1;
     position: absolute;
     left: 0;
   }

}

.p-treetable-wrapper table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  --bs-table-bg: var(--bs-body-bg);
  --bs-table-border-color: var(--bs-border-color);
  overflow: hidden;
  vertical-align: middle; 
  position:sticky;
  tr{
  border-bottom: solid #B9B9B9 thin;


  }
}
.p-treetable-wrapper {
  position: relative;
  background:#F2F4F7 ;
  @include scrollbar();

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

  table{
    background: #fff;
  }

tr{

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

 }


}
 
}
.p-treetable-tfoot{
  position: sticky;
  bottom: -1px;
  z-index: 1;
}
   .no_data{
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 1vw;
       &_img{
           width: 8.5vw;
          height: auto;
          text-align: center;
          img{
           max-width: 100%;
           max-height: 100%;
          }
       }
       &_text{
           font-size: 1rem;
           line-height: 1.25;
           color: #909090;
           text-align: center;
       }
   }
   
   
   
   </style>