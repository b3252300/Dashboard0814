// On-Call Doctor & Contact Mock Module (Structured for ConsultantTable.vue)
export default {
  GetConsultantData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        ConsultantList: [
          {
            Code: "SURGERY",
            Department: "General Surgery",
            Data: [
              { DoctorName: "DR AHMAD", Dial: "012-3456789 (Ext. 5101)" },
              { DoctorName: "DR LEE KIAN BOON", Dial: "012-9876543 (Ext. 5102)" }
            ]
          },
          {
            Code: "INTERNAL",
            Department: "Internal Medicine",
            Data: [
              { DoctorName: "DR AIRIL RAZLAN", Dial: "013-4567890 (Ext. 5103)" },
              { DoctorName: "DR TAN SWEE HOCK", Dial: "013-8765432 (Ext. 5104)" }
            ]
          },
          {
            Code: "CARDIOLOGY",
            Department: "Cardiology",
            Data: [
              { DoctorName: "DR CHONG AUN KEE", Dial: "014-5678901 (Ext. 5105)" },
              { DoctorName: "DR LIM HOOI LING", Dial: "014-7654321 (Ext. 5106)" }
            ]
          },
          {
            Code: "PULMONOLOGY",
            Department: "Pulmonology",
            Data: [
              { DoctorName: "DR ALEEF", Dial: "015-6789012 (Ext. 5107)" }
            ]
          },
          {
            Code: "GASTRO",
            Department: "Gastroenterology",
            Data: [
              { DoctorName: "DR AMARANATHAN", Dial: "016-7890123 (Ext. 5108)" }
            ]
          },
          {
            Code: "NEPHRO",
            Department: "Nephrology",
            Data: [
              { DoctorName: "DR AMINUL KHAIRIAH", Dial: "017-8901234 (Ext. 5109)" }
            ]
          },
          {
            Code: "NEURO",
            Department: "Neurology",
            Data: [
              { DoctorName: "DR ANANDAKUMAR", Dial: "018-9012345 (Ext. 5110)" }
            ]
          },
          {
            Code: "ORTHO",
            Department: "Orthopedics",
            Data: [
              { DoctorName: "DR ANG CC", Dial: "019-0123456 (Ext. 5111)" }
            ]
          }
        ],
        RadiographerList: [
          {
            Code: "RAD_DAY",
            Department: "Day Duty Radiographer",
            Data: [
              { DoctorName: "林明輝 技師", Dial: "Ext. 3311" },
              { DoctorName: "陳健文 技師", Dial: "Ext. 3312" }
            ]
          },
          {
            Code: "RAD_CT",
            Department: "CT Scan Specialist",
            Data: [
              { DoctorName: "黃雅婷 技師", Dial: "Ext. 3315" }
            ]
          },
          {
            Code: "RAD_MRI",
            Department: "MRI Specialist",
            Data: [
              { DoctorName: "郭思宏 技師", Dial: "Ext. 3318" }
            ]
          },
          {
            Code: "RAD_NIGHT",
            Department: "Night Duty Radiographer",
            Data: [
              { DoctorName: "張偉強 技師", Dial: "Ext. 3320" }
            ]
          }
        ]
      }
    };
  },
  GetOtherData(req) {
    return {
      Code: "0",
      Message: "Success",
      Data: {
        isReload: false,
        OthersList: [
          {
            Code: "RADIOLOGY",
            Department: "Radiology",
            Data: [
              { DoctorName: "DR LEE SWEE SENG", Dial: "015-6789012" }
            ]
          },
          {
            Code: "PATHOLOGY",
            Department: "Pathology",
            Data: [
              { DoctorName: "DR TAN KIAN HENG", Dial: "016-7890123" }
            ]
          },
          {
            Code: "ONCOLOGY",
            Department: "Oncology",
            Data: [
              { DoctorName: "DR WONG CHIN SOON", Dial: "017-1234567" }
            ]
          }
        ],
        RadiographerList: [
          {
            Code: "RAD_OTHER",
            Department: "On-Call Radiographer",
            Data: [
              { DoctorName: "張偉強 技師", Dial: "Ext. 3312" }
            ]
          }
        ]
      }
    };
  },
  GetContactData(req) {
    return {
      Code: "0",
      Message: "Success",
      Data: {
        isReload: false,
        List: [
          { Department: "急診室 (Emergency)", Extension: "1119" },
          { Department: "加護病房 (ICU)", Extension: "2201" },
          { Department: "外科加護病房 (SICU)", Extension: "2205" },
          { Department: "藥局 (Pharmacy)", Extension: "3305" },
          { Department: "檢驗科 (Laboratory)", Extension: "4410" },
          { Department: "血庫 (Blood Bank)", Extension: "4415" },
          { Department: "總機 (Operator)", Extension: "0" }
        ]
      }
    };
  }
};
