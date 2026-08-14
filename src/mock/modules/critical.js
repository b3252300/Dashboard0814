// Critical Lab Report Mock Module (Expanded Dataset)
export default {
  GetCriticalData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        CriticalLabReportTotal: 8,
        CriticalLabReportList: [
          {
            CriticalLabReportRowId: "CRIT-101",
            BedCode: "701A",
            BedName: "701A",
            PatientName: "TAN ML*",
            LabNo: "LAB2026081401",
            ItemName: "Serum Potassium (K+)",
            ResultValue: "6.3",
            Unit: "mmol/L",
            NormalRange: "3.5 - 5.1",
            ReportTime: "2026-08-14 08:45",
            HandleStatus: 0,
            DoctorName: "DR AHMAD"
          },
          {
            CriticalLabReportRowId: "CRIT-102",
            BedCode: "702C",
            BedName: "702C",
            PatientName: "HSIAO LW*",
            LabNo: "LAB2026081402",
            ItemName: "Hemoglobin (Hb)",
            ResultValue: "6.8",
            Unit: "g/dL",
            NormalRange: "13.0 - 17.5",
            ReportTime: "2026-08-14 09:15",
            HandleStatus: 1,
            DoctorName: "DR ANANDA"
          },
          {
            CriticalLabReportRowId: "CRIT-103",
            BedCode: "703A",
            BedName: "703A",
            PatientName: "SIDHU MW*",
            LabNo: "LAB2026081403",
            ItemName: "Platelet Count",
            ResultValue: "42",
            Unit: "10^3/uL",
            NormalRange: "150 - 450",
            ReportTime: "2026-08-14 09:40",
            HandleStatus: 0,
            DoctorName: "DR ANDREW"
          },
          {
            CriticalLabReportRowId: "CRIT-104",
            BedCode: "704B",
            BedName: "704B",
            PatientName: "LIM WX*",
            LabNo: "LAB2026081404",
            ItemName: "Troponin I",
            ResultValue: "3.85",
            Unit: "ng/mL",
            NormalRange: "0 - 0.04",
            ReportTime: "2026-08-14 10:05",
            HandleStatus: 0,
            DoctorName: "DR AHMAD"
          },
          {
            CriticalLabReportRowId: "CRIT-105",
            BedCode: "705B",
            BedName: "705B",
            PatientName: "NG CK*",
            LabNo: "LAB2026081405",
            ItemName: "Blood Glucose (Stat)",
            ResultValue: "32.5",
            Unit: "mmol/L",
            NormalRange: "3.9 - 7.8",
            ReportTime: "2026-08-14 10:30",
            HandleStatus: 2,
            DoctorName: "DR AHMAD"
          },
          {
            CriticalLabReportRowId: "CRIT-106",
            BedCode: "706A",
            BedName: "706A",
            PatientName: "TEH SH*",
            LabNo: "LAB2026081406",
            ItemName: "Serum Sodium (Na+)",
            ResultValue: "118",
            Unit: "mmol/L",
            NormalRange: "135 - 145",
            ReportTime: "2026-08-14 11:00",
            HandleStatus: 0,
            DoctorName: "DR AHMAD"
          },
          {
            CriticalLabReportRowId: "CRIT-107",
            BedCode: "707A",
            BedName: "707A",
            PatientName: "ONG MY*",
            LabNo: "LAB2026081407",
            ItemName: "Prothrombin Time (INR)",
            ResultValue: "4.8",
            Unit: "INR",
            NormalRange: "0.8 - 1.2",
            ReportTime: "2026-08-14 11:25",
            HandleStatus: 1,
            DoctorName: "DR AHMAD"
          },
          {
            CriticalLabReportRowId: "CRIT-108",
            BedCode: "708B",
            BedName: "708B",
            PatientName: "YAP CH*",
            LabNo: "LAB2026081408",
            ItemName: "Arterial PaO2",
            ResultValue: "52",
            Unit: "mmHg",
            NormalRange: "75 - 100",
            ReportTime: "2026-08-14 11:50",
            HandleStatus: 0,
            DoctorName: "DR AHMAD"
          }
        ]
      }
    };
  },
  CloseDialog(req) {
    return {
      Code: "0",
      Message: "Dialog Closed Successfully",
      IsReload: false,
      Data: true
    };
  }
};
