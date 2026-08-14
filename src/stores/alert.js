import { ref, reactive } from "vue";
//import axios from 'axios'
import { defineStore } from "pinia";
import useApi from "@/composable/useApi";
export const alert = defineStore("alert", () => {
  const AlertTitle = ref([
    "Bed",
    "EWS",
    "Pain Score",
    "Fall Risk",
    "O2 Status",
    "Mobility",
    "NBM",
    "Critical Lab Report",
    "Nursing Task",
    "CPOE ORDER-Medication",
    "CPOE ORDER-Laboratory",
    "CPOE ORDER-Radiology",
    "CPOE ORDER-Diagnostic",
    "Blood Transfusion",
    "Tubing care",
    "IV Line",
    "Bioazard",
    "Isolation",
    "Braden Score",
    "Tube Feeding",
    "Infusion",
    "Allergy",
    "Special Precaution",
    "Suicide Risk",
    "Restraint",
    "DNR/DIL",
    "Companion",
    "Patient Request",
  ]);

  // const ResultJson = [
  //   {
  //     name: "701A",
  //     state: {
  //       EWS: {
  //         Name:"EWS",
  //         Visible:true,
  //         Value:"0",
  //         Level:"1",
  //      },
  //       PainScore: 0,
  //       FallRisk: true,
  //       StatusO2: false,
  //       Mobility: true,
  //       NBM: true,
  //       CriticalLabReport: 1,
  //       NursingTask: 1,
  //       CPDEMedical: 1,
  //     },
  //   },
  //   {
  //     name: "702A",
  //     state: {
  //       EWS: {
  //          Name:"EWS",
  //          Visible:true,
  //          Value:"2",
  //          Level:"1",
  //       },
  //       PainScore: 2,
  //       FallRisk: true,
  //       StatusO2: false,
  //       Mobility: true,
  //       NBM: true,
  //       CriticalLabReport: 1,
  //       NursingTask: 2,
  //       CPDEMedical: 2,
  //     },
  //   },
  //   {
  //     name: "703A",
  //     state: {
  //       EWS: 3,
  //       PainScore: 1,
  //       FallRisk: false,
  //       StatusO2: true,
  //       Mobility: true,
  //       NBM: true,
  //       CriticalLabReport: 1,
  //       NursingTask: 0,
  //       CPDEMedical: 3,
  //     },
  //   },
  //   {
  //     name: "704A",
  //     state: {
  //       EWS: 0,
  //       PainScore: 3,
  //       FallRisk: false,
  //       StatusO2: false,
  //       Mobility: true,
  //       NBM: true,
  //       CriticalLabReport: 1,
  //       NursingTask: 3,
  //       CPDEMedical: 4,
  //     },
  //   },
  // ];

  const tableData = reactive([]);
  const { UseApiFunction } = useApi();
  const CallAlertcApi = async () => {
    
    const PostData = reactive({
      StationCode: "0082",
    });

    const res = await UseApiFunction(
      import.meta.env.VITE_API_PATH_ALERT,
      PostData
    );
    const { Data, Code, IsReload } = res.data;

    if(IsReload){
      location.reload();
    }

    if (Code == "0") {
      tableData.value = Data.List;
      // console.log(tableData.AlertList.List[0].AlertDataDictionary);
      // console.log(tableData.AlertList.List[0].BedCode);
      console.log(tableData);

    } else {
      console.log(Code);
    }
  };

  CallAlertcApi();

  // const AlertData = reactive(tableData.AlertList);
  // console.log(AlertData);

  return { AlertTitle, tableData };
});
