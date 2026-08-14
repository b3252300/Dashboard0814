<template>

<!-- 重疊 Modal -->
<Teleport to="body">
<div class="modal_UrgentModal modal fade"  ref="modal" :id="id" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-2">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">
            <img src="@/assets/images/warn.svg" :alt="title">
            Critical Lab Report
        </h5>
       
      </div>
      <div class="modal-body">
        <div class="wark_name">{{ bedName }}</div>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-modal" style="width: 300px;height: 48px;padding:8px 14px 8px 14px;" data-bs-dismiss="modal" @click="Close(id)">Close</button>        
      </div>
    </div>
  </div>
</div>
</Teleport>
</template>
  
  
  <script setup>
  import { onMounted, ref,  onUnmounted,toRefs, reactive } from 'vue';
  import Modal from 'bootstrap/js/dist/modal';
  import criticalReport from "@/assets/images/critical_report.svg";
  import useApi from "@/composable/useApi";
  const { UseApiFunction } = useApi();
  const modal = ref(null);
  const myModal = ref(null);
  let timer = ref(null);

 const props = defineProps({  
    bedName:String,
    id: String,
    labDateTime:String,
  });

  const { bedName, id, labDateTime } = toRefs(props);
  const initTimer = () => {
    timer && clearInterval(timer);
    timer = setInterval(() => {
      if(labDateTime.value != undefined){
        const now = new Date();
        const endDateTime = AddDays(1);
        const elapsedTime = endDateTime.getTime() - now.getTime();
        if (elapsedTime <= 0) {
          clearInterval(timer);
          myModal_hide();
          // console.log(elapsedTime);
        }
      }
      
    }, 1000);
  }
  
  function AddDays(days)
  {
    let _addDate = new Date(labDateTime.value);
    _addDate.setDate(_addDate.getDate() + days);
    return _addDate;
  }

  
const Close = async (id) => {
  console.log('Close');
  const PostData = reactive({
    CriticalLabReportRowId: id,
  });
  
  const res = await UseApiFunction(
    import.meta.env.VITE_API_PATH_CRITICALLABREPORT_DIALOGCLOSE,
    PostData
  );

  if(res.data.IsReload){
    location.reload();
  }

  // console.log(PostData);
  if (res != undefined) {
    console.log(res.data);
  }
  const criticalLabReport = ref([]);
  if(localStorage.getItem("CriticalLabReport"))
  {
    criticalLabReport.value = JSON.parse(localStorage.getItem("CriticalLabReport"));
    const index = criticalLabReport.value.findIndex((element)=>element.LabNo == id );
    if(index > -1){
      criticalLabReport.value.splice(index, 1);
      localStorage.setItem("CriticalLabReport",JSON.stringify(criticalLabReport.value));
    }
  }

};


  onMounted(() => {
    myModal.value = new Modal(modal.value);
    initTimer();
    // console.log(modal.value);
  });
  
  onUnmounted(() => {
    timer && clearInterval(timer);
  })
  
  const myModal_show = () => {
  
    myModal.value.show();
  };
  
  const myModal_hide = () => {
    myModal.value.hide();
  };
  
  
  defineExpose({
    myModal_show,
    myModal_hide,
  });
  
  
  
  </script>

<style lang="scss" scoped>
$mount: 50; 
@for $i from 1 through $mount {
  .modal_UrgentModal:nth-of-type(#{$i}) .modal-content {
    transform: translate(#{$i * 1%}, #{$i * 1%});
  }
}
.modal_UrgentModal{
  z-index: 1056;
.btn-modal{
    width: 18.75rem;
}

}


  .modal-content{
    position: absolute;
    text-align: center;
  }
  .modal-title{
    font-size: 1.5rem;
    border-bottom: none;
    color: #DC2626;
   display: flex;
   align-items: center;
   gap: 8px;
  }
  .modal-body{
    font-size: 1rem;
    line-height: 1.6;
    color: #16A342;
    padding: 1.5rem;
  }
  .wark_name{
    font-size: 3rem;
    line-height: 1;
    color:#16A342;
  }
  .modal-footer{
    border-top: none;
    justify-content: center;
  }
  .modal-header{
    border-bottom: none;
    justify-content: center;
  }
  
  </style>