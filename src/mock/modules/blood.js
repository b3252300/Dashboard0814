// Blood & IVD Infusion Mock Module (Expanded Dataset)
export default {
  GetBloodData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        BloodTransfusionTotal: 6,
        BloodTransfusionList: [
          { BedCode: "701A", PatientName: "TAN ML*", BloodGroup: "O+", Component: "Packed Red Blood Cells (2 Units)", StartTime: "08:30", Status: "On going" },
          { BedCode: "702A", PatientName: "MINORI NY*", BloodGroup: "A+", Component: "Platelet Concentrate (1 Unit)", StartTime: "10:00", Status: "Paused" },
          { BedCode: "703A", PatientName: "SIDHU MW*", BloodGroup: "B+", Component: "Fresh Frozen Plasma (2 Units)", StartTime: "11:15", Status: "On going" },
          { BedCode: "704B", PatientName: "LIM WX*", BloodGroup: "AB+", Component: "Packed Red Blood Cells (1 Unit)", StartTime: "13:00", Status: "Scheduled" },
          { BedCode: "706A", PatientName: "TEH SH*", BloodGroup: "O-", Component: "Cryoprecipitate (10 Units)", StartTime: "14:30", Status: "Scheduled" },
          { BedCode: "708B", PatientName: "YAP CH*", BloodGroup: "A-", Component: "Packed Red Blood Cells (2 Units)", StartTime: "15:45", Status: "Scheduled" }
        ],
        InfusionIVDTotal: 10,
        InfusionIVDList: [
          { BedCode: "701A", PatientName: "TAN ML*", SolutionName: "0.9% Normal Saline 500ml", InfusionRate: "80 ml/hr", Status: "On going" },
          { BedCode: "701C", PatientName: "THERESA M*", SolutionName: "D5W 500ml + 20mEq KCl", InfusionRate: "40 ml/hr", Status: "On going" },
          { BedCode: "702C", PatientName: "HSIAO LW*", SolutionName: "Ringer's Lactate 1000ml", InfusionRate: "100 ml/hr", Status: "On going" },
          { BedCode: "704B", PatientName: "LIM WX*", SolutionName: "0.45% Saline in D5W 500ml", InfusionRate: "60 ml/hr", Status: "On going" },
          { BedCode: "705A", PatientName: "LEE JY*", SolutionName: "0.9% Normal Saline 1000ml", InfusionRate: "125 ml/hr", Status: "On going" },
          { BedCode: "705B", PatientName: "NG CK*", SolutionName: "Total Parenteral Nutrition (TPN)", InfusionRate: "50 ml/hr", Status: "On going" },
          { BedCode: "706B", PatientName: "CHONG KL*", SolutionName: "0.9% Normal Saline 500ml", InfusionRate: "80 ml/hr", Status: "On going" },
          { BedCode: "707A", PatientName: "ONG MY*", SolutionName: "D5W 1000ml", InfusionRate: "75 ml/hr", Status: "On going" },
          { BedCode: "709A", PatientName: "TAN BL*", SolutionName: "Ringer's Lactate 500ml", InfusionRate: "80 ml/hr", Status: "On going" },
          { BedCode: "710A", PatientName: "LIEW MF*", SolutionName: "0.9% Normal Saline 500ml", InfusionRate: "60 ml/hr", Status: "On going" }
        ]
      }
    };
  }
};
