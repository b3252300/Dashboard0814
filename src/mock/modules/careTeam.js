// Care Team Mock Module (Expanded Dataset)
export default {
  GetNurseData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        CurrentShiftData: {
          Date: "2026-08-14",
          DayOfWeek: "Friday",
          ShiftName: "Day Shift",
          ShiftBeginTime: "07:00",
          ShiftEndTime: "15:00"
        },
        CurrentShiftNurseDataList: [
          { NurseCode: "N701", NurseName: "張雅婷 (In-Charge)", Beds: ["701A", "701B", "701C", "701D"], Team: "Team A" },
          { NurseCode: "N702", NurseName: "陳秀英", Beds: ["702A", "702B", "702C", "702D"], Team: "Team A" },
          { NurseCode: "N703", NurseName: "林志強", Beds: ["703A", "703B", "703C", "703D"], Team: "Team B" },
          { NurseCode: "N704", NurseName: "黃怡君", Beds: ["704A", "704B", "704C", "704D"], Team: "Team B" },
          { NurseCode: "N705", NurseName: "劉建宏", Beds: ["705A", "705B", "706A", "706B"], Team: "Team C" },
          { NurseCode: "N706", NurseName: "鄭佩佩", Beds: ["707A", "707B", "708A", "708B"], Team: "Team C" },
          { NurseCode: "N707", NurseName: "王思敏", Beds: ["709A", "709B", "710A", "710B"], Team: "Team D" },
          { NurseCode: "N708", NurseName: "謝佳穎", Beds: ["711A", "711B", "712A", "712B"], Team: "Team D" }
        ],
        NextShiftData: {
          Date: "2026-08-14",
          DayOfWeek: "Friday",
          ShiftName: "Evening Shift",
          ShiftBeginTime: "15:00",
          ShiftEndTime: "23:00"
        },
        NextShiftNurseDataList: [
          { NurseCode: "N711", NurseName: "蔡美玲 (In-Charge)", Beds: ["701A", "701B", "702A", "702B"], Team: "Team A" },
          { NurseCode: "N712", NurseName: "許志偉", Beds: ["703A", "703B", "704A", "704B"], Team: "Team B" },
          { NurseCode: "N713", NurseName: "高淑芬", Beds: ["705A", "705B", "706A", "706B"], Team: "Team C" },
          { NurseCode: "N714", NurseName: "周國安", Beds: ["707A", "707B", "708A", "708B"], Team: "Team C" },
          { NurseCode: "N715", NurseName: "吳宜蓁", Beds: ["709A", "709B", "710A", "710B"], Team: "Team D" },
          { NurseCode: "N716", NurseName: "葉家豪", Beds: ["711A", "711B", "712A", "712B"], Team: "Team D" }
        ]
      }
    };
  },
  GetDoctorData(req) {
    return {
      Code: "0",
      Message: "Success",
      Data: {
        Date: "2026-08-14",
        DayOfWeek: "Friday",
        DoctorList: [
          { DoctorCode: "D01", DoctorName: "DR AHMAD", Specialty: "General Surgery", Phone: "Ext. 5101", Beds: ["701A", "704B", "704C", "704D", "705A"] },
          { DoctorCode: "D02", DoctorName: "DR AIRIL RAZLAN", Specialty: "Internal Medicine", Phone: "Ext. 5102", Beds: ["701B"] },
          { DoctorCode: "D03", DoctorName: "DR CHONG AUN KEE", Specialty: "Cardiology", Phone: "Ext. 5103", Beds: ["701C"] },
          { DoctorCode: "D04", DoctorName: "DR ALEEF", Specialty: "Pulmonology", Phone: "Ext. 5104", Beds: ["701D", "703B"] },
          { DoctorCode: "D05", DoctorName: "DR AMARANATHAN", Specialty: "Gastroenterology", Phone: "Ext. 5105", Beds: ["702A"] },
          { DoctorCode: "D06", DoctorName: "DR AMINUL KHAIRIAH", Specialty: "Nephrology", Phone: "Ext. 5106", Beds: ["702B"] },
          { DoctorCode: "D07", DoctorName: "DR ANANDAKUMAR", Specialty: "Neurology", Phone: "Ext. 5107", Beds: ["702C"] },
          { DoctorCode: "D08", DoctorName: "DR ANBUCHELVI", Specialty: "Endocrinology", Phone: "Ext. 5108", Beds: ["702D"] },
          { DoctorCode: "D09", DoctorName: "DR ANDREW NG", Specialty: "Pediatrics", Phone: "Ext. 5109", Beds: ["703A"] },
          { DoctorCode: "D10", DoctorName: "DR ANG CC", Specialty: "Orthopedics", Phone: "Ext. 5110", Beds: ["703C", "703D"] }
        ]
      }
    };
  }
};
