import homeData from "@/utils/home.js";

// Alert Table Mock Module for TableStyle.vue (AlertView)
export default {
  GetAlertData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        List: homeData.HomeInformationList || []
      }
    };
  }
};
