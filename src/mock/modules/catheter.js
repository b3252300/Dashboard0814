// Catheter & IV Mock Module (Expanded Dataset)
export default {
  GetCatheterData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        CatheterViewTotal: 8,
        CatheterViewList: [
          { BedCode: "701A", PatientName: "TAN ML*", CatheterType: "Indwelling Foley Catheter", InsertionDate: "2026-08-08", DaysInUse: 6, NurseInCharge: "張雅婷" },
          { BedCode: "702C", PatientName: "HSIAO LW*", CatheterType: "Triple Lumen CVC", InsertionDate: "2026-08-11", DaysInUse: 3, NurseInCharge: "陳秀英" },
          { BedCode: "703A", PatientName: "SIDHU MW*", CatheterType: "Nasogastric (NG) Tube", InsertionDate: "2026-08-09", DaysInUse: 5, NurseInCharge: "林志強" },
          { BedCode: "704B", PatientName: "LIM WX*", CatheterType: "PICC Line", InsertionDate: "2026-08-05", DaysInUse: 9, NurseInCharge: "黃怡君" },
          { BedCode: "705B", PatientName: "NG CK*", CatheterType: "Chest Drain Tube", InsertionDate: "2026-08-12", DaysInUse: 2, NurseInCharge: "劉建宏" },
          { BedCode: "706A", PatientName: "TEH SH*", CatheterType: "Foley Catheter", InsertionDate: "2026-08-10", DaysInUse: 4, NurseInCharge: "劉建宏" },
          { BedCode: "707A", PatientName: "ONG MY*", CatheterType: "Jackson-Pratt Drain", InsertionDate: "2026-08-13", DaysInUse: 1, NurseInCharge: "鄭佩佩" },
          { BedCode: "708B", PatientName: "YAP CH*", CatheterType: "Hemodialysis Catheter", InsertionDate: "2026-08-07", DaysInUse: 7, NurseInCharge: "鄭佩佩" }
        ],
        IvViewTotal: 12,
        IvViewList: [
          { BedCode: "701A", PatientName: "TAN ML*", Site: "Left Forearm (20G)", InsertionDate: "2026-08-12", Status: "Normal", NurseInCharge: "張雅婷" },
          { BedCode: "701B", PatientName: "UMAR S*", Site: "Right Hand (22G)", InsertionDate: "2026-08-13", Status: "Normal", NurseInCharge: "張雅婷" },
          { BedCode: "701C", PatientName: "THERESA M*", Site: "Left Hand (24G)", InsertionDate: "2026-08-14", Status: "Normal", NurseInCharge: "張雅婷" },
          { BedCode: "702C", PatientName: "HSIAO LW*", Site: "Right Antecubital (18G)", InsertionDate: "2026-08-11", Status: "Normal", NurseInCharge: "陳秀英" },
          { BedCode: "703A", PatientName: "SIDHU MW*", Site: "Left Hand (22G)", InsertionDate: "2026-08-14", Status: "Normal", NurseInCharge: "林志強" },
          { BedCode: "704B", PatientName: "LIM WX*", Site: "Right Forearm (20G)", InsertionDate: "2026-08-12", Status: "Normal", NurseInCharge: "黃怡君" },
          { BedCode: "705A", PatientName: "LEE JY*", Site: "Left Forearm (20G)", InsertionDate: "2026-08-13", Status: "Normal", NurseInCharge: "劉建宏" },
          { BedCode: "705B", PatientName: "NG CK*", Site: "Right Forearm (18G)", InsertionDate: "2026-08-12", Status: "Normal", NurseInCharge: "劉建宏" },
          { BedCode: "706A", PatientName: "TEH SH*", Site: "Left Hand (22G)", InsertionDate: "2026-08-13", Status: "Normal", NurseInCharge: "劉建宏" },
          { BedCode: "707A", PatientName: "ONG MY*", Site: "Right Forearm (20G)", InsertionDate: "2026-08-14", Status: "Normal", NurseInCharge: "鄭佩佩" },
          { BedCode: "709A", PatientName: "TAN BL*", Site: "Left Forearm (22G)", InsertionDate: "2026-08-13", Status: "Normal", NurseInCharge: "王思敏" },
          { BedCode: "710A", PatientName: "LIEW MF*", Site: "Right Hand (22G)", InsertionDate: "2026-08-14", Status: "Normal", NurseInCharge: "王思敏" }
        ]
      }
    };
  }
};
