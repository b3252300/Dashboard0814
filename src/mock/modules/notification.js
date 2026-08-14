// Side Notification Mock Module
export default {
  GetNotificationData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        NotificationTotal: 3,
        NotificationList: [
          {
            BedCode: "701A",
            BedName: "701A",
            PatientFullName: "TAN ML*",
            ClassificationName: "Patient Request",
            RequestTime: "09:12",
            Description: "Assistance required for toileting"
          },
          {
            BedCode: "702A",
            BedName: "702A",
            PatientFullName: "MINORI NY*",
            ClassificationName: "Nurse Call",
            RequestTime: "09:25",
            Description: "IV Drip finishes soon"
          },
          {
            BedCode: "703A",
            BedName: "703A",
            PatientFullName: "SIDHU MW*",
            ClassificationName: "Housekeeping",
            RequestTime: "09:35",
            Description: "Bed sheet change requested"
          }
        ]
      }
    };
  }
};
