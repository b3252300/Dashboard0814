// Header Mock Module
export default {
  GetHeaderData(req) {
    const currentStation = localStorage.getItem("StationCode") || "W7A";
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        CurrentStationCode: currentStation,
        PatientsNumber: 28,
        TotalBedsNumber: 36,
        TotalBlockedBedsNumber: 1,
        ExpectedArrivePatientsNumber: 3,
        DischargedPatientsNumber: 4,
        CanDischargedPatientsNumber: 2,
        HeadNurseName: "張護理長",
        NurseClinicianName: "陳專科護理師",
        TeamLeaderName: "李組長",
        HouseSupervisorName: "王督導",
        StationList: [
          { Code: "W7A", Name: "Ward 7A" },
          { Code: "W7B", Name: "Ward 7B" },
          { Code: "W6A", Name: "Ward 6A" }
        ]
      }
    };
  }
};
