import { ref, reactive, onMounted, watchEffect } from "vue";
import { defineStore } from "pinia";
export const  styledynamic = defineStore("dynamic", ()=>{
    const header_h = ref(null);
    const size_h = ref(0);
    const updateHeight = () => {
      const size_h = ref(document.querySelector(".navbar").offsetHeight);
    
      header_h.value = `padding-top:calc(${size_h.value}px + 1.5rem) ;`; 
    };

    onMounted(() => {
      updateHeight();
      window.addEventListener("resize", updateHeight);
    });



//控制響應式頁尾高度
const footer_h = ref(null);
const footerupdateHeight = () => {
      const size_h = ref(document.querySelector(".footerMenu"));
      // const siderbar_h = ref(document.querySelector(".siderbar_warn"));  
      if(size_h.value !== null){        
        footer_h.value = `padding-bottom:calc(${size_h.value.offsetHeight}px + 1.5rem)`; //扣除浮動頁尾的可適畫面
        // siderbar_h.value.style = `padding-bottom:${size_h.value.offsetHeight}px`       
       }
  
};

    onMounted(() => {
      watchEffect(()=>{
        footerupdateHeight();
      });
      
      window.addEventListener("resize", footerupdateHeight);
    });


//控制響應式頁尾高度
const footerlist_h = ref(null);
const footerlistHeight = () => {
      const size_h = ref(document.querySelector(".footerMenu"));
      if(size_h.value !== null){
        footerlist_h.value = `padding-bottom:calc(${size_h.value.offsetHeight}px) `; //扣除浮動頁尾的可適畫面
      }
    };

    onMounted(() => {
      footerlistHeight();
      window.addEventListener("resize", footerlistHeight);
    });

//控制響應式頁尾+頁尾顯示狀態列高度
const footerlistMenu_h = ref(null);
const footerlistMenuHeight = () => {
 
      const size_footerMenu_h = ref(document.querySelector(".footerMenu"));
      const size_footerlist_h = ref(document.querySelector(".footerlist"));
      // if(size_footerMenu_h.value !== null && size_footerlist_h.value !== null){
      //     console.log((size_footerMenu_h.value !== null) +"footerMenu");
      //     console.log((size_footerlist_h.value !== null) +"footerlist");
      // }
      // if(size_h.value !== null){
      //   footerlist_h.value = `padding-bottom:calc(${size_h.value.offsetHeight}px) `; //扣除浮動頁尾的可適畫面
      // }
    };

    onMounted(() => {
      footerlistMenuHeight();
      window.addEventListener("resize", footerlistMenuHeight);
    });
    footerlistMenuHeight();
    return {
        header_h,
        footer_h,
        footerlist_h,
        footerlistMenu_h,
        footerupdateHeight
    }
});