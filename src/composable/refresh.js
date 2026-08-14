import { useGlobalStore } from "@/stores/store";



export default function refresh() {


  const pageRefresh = () => {


    var modal = document.querySelectorAll('.modal-backdrop')

    modal.forEach(x => {
      console.log(x.parentNode)
      if (x.parentNode) {
        x.parentNode.removeChild(x);
      }
    })
   

    useGlobalStore().headerKey++;
    useGlobalStore().routeKey++;
    useGlobalStore().footerKey++;

    //自動更新時要保留篩選資料
    if (localStorage.getItem("AlertFilter")) {
      useGlobalStore().alertFilter = JSON.parse(localStorage.getItem("AlertFilter"));
    }
    if (localStorage.getItem("DoctorFilter")) {
      useGlobalStore().doctorFilter = JSON.parse(localStorage.getItem("DoctorFilter"));
    }
    if (localStorage.getItem("TeamFilter")) {
      useGlobalStore().teamFilter = JSON.parse(localStorage.getItem("TeamFilter"));
    }
    if (localStorage.getItem("BedStatusFilter")) {
      useGlobalStore().bedStatusFilter = JSON.parse(localStorage.getItem("BedStatusFilter"));
    }
  }

  return { pageRefresh };

}