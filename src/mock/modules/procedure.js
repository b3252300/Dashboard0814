// Procedure Mock Module (Expanded Dataset)
export default {
  GetProcedureData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        DiagnosticProcedureTotal: 8,
        DiagnosticProcedureList: [
          { BedCode: "701A", PatientName: "TAN ML*", ProcedureName: "Chest X-Ray (AP)", Department: "Radiology", ScheduledTime: "10:30", Status: "Scheduled" },
          { BedCode: "702C", PatientName: "HSIAO LW*", ProcedureName: "Brain MRI with Contrast", Department: "MRI Unit", ScheduledTime: "11:15", Status: "Scheduled" },
          { BedCode: "703A", PatientName: "SIDHU MW*", ProcedureName: "Abdominal Ultrasound", Department: "Ultrasound", ScheduledTime: "14:15", Status: "In Progress" },
          { BedCode: "704B", PatientName: "LIM WX*", ProcedureName: "12-Lead ECG", Department: "Cardiology", ScheduledTime: "09:00", Status: "Completed" },
          { BedCode: "705B", PatientName: "NG CK*", ProcedureName: "CT Pulmonary Angiogram", Department: "CT Scan", ScheduledTime: "15:00", Status: "Scheduled" },
          { BedCode: "706A", PatientName: "TEH SH*", ProcedureName: "Bone Density Scan", Department: "Nuclear Med", ScheduledTime: "15:45", Status: "Scheduled" },
          { BedCode: "707A", PatientName: "ONG MY*", ProcedureName: "Transthoracic Echocardiogram", Department: "Echo Lab", ScheduledTime: "16:30", Status: "Scheduled" },
          { BedCode: "708B", PatientName: "YAP CH*", ProcedureName: "Portable Chest Radiography", Department: "Radiology", ScheduledTime: "08:30", Status: "Completed" }
        ],
        OtCathLabEndoTotal: 6,
        OtCathLabEndoList: [
          { BedCode: "701B", PatientName: "UMAR S*", ProcedureName: "Upper GI Endoscopy (OGD)", Facility: "Endoscopy Suite", ScheduledTime: "09:30", Status: "Completed" },
          { BedCode: "702A", PatientName: "MINORI NY*", ProcedureName: "Coronary Angiography", Facility: "Cath Lab 1", ScheduledTime: "11:00", Status: "In Progress" },
          { BedCode: "703C", PatientName: "BONAVIDE SN*", ProcedureName: "Laparoscopic Cholecystectomy", Facility: "OR Room 3", ScheduledTime: "13:00", Status: "Preparing" },
          { BedCode: "704C", PatientName: "TAN ML*", ProcedureName: "Colonoscopy & Biopsy", Facility: "Endoscopy Suite", ScheduledTime: "14:00", Status: "Scheduled" },
          { BedCode: "705A", PatientName: "LEE JY*", ProcedureName: "Percutaneous Coronary Intervention", Facility: "Cath Lab 2", ScheduledTime: "15:30", Status: "Scheduled" },
          { BedCode: "707B", PatientName: "GOH ES*", ProcedureName: "Arthroscopic Knee Repair", Facility: "OR Room 5", ScheduledTime: "16:15", Status: "Scheduled" }
        ]
      }
    };
  }
};
