import homeData from "@/utils/home.js";

function GetHomeData(req) {
  let body = {};
  try {
    if (req && req.body) {
      body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    }
  } catch (e) {
    console.error('[Mock Home] Error parsing body:', e);
  }

  let list = homeData.HomeInformationList || [];

  // Filter by doctor
  if (body.DoctorFilter && body.DoctorFilter.length > 0 && !body.DoctorFilter.includes("ALL")) {
    list = list.filter(item => {
      if (body.DoctorFilter.includes(item.PrimaryDoctorCode)) return true;
      if (item.ResidencyDoctors) {
        return Object.keys(item.ResidencyDoctors).some(docCode => body.DoctorFilter.includes(docCode));
      }
      return false;
    });
  }

  // Filter by team
  if (body.TeamFilter && body.TeamFilter.length > 0 && !body.TeamFilter.includes("ALL")) {
    list = list.filter(item => {
      if (!item.NurseCareTeamId) return false;
      return item.NurseCareTeamId.some(team => body.TeamFilter.includes(team));
    });
  }

  // Filter by alerts
  if (body.AlertsTextFilter && body.AlertsTextFilter.length > 0) {
    list = list.filter(item => {
      return body.AlertsTextFilter.some(filter => {
        if (filter === "EWS_2") {
          return item.EwsLevel === 2;
        }
        if (filter === "EWS_3") {
          return item.EwsLevel === 3;
        }
        if (filter === "CRITICAL_LAB_REPORT") {
          return parseInt(item.CriticalLabReportHandleStatus) > 0;
        }
        if (filter === "NURSING_TASK") {
          return item.AlertDataDictionary && item.AlertDataDictionary.NURSING_TASK && parseInt(item.AlertDataDictionary.NURSING_TASK.Value) > 0;
        }
        const alert = item.AlertDataDictionary && item.AlertDataDictionary[filter];
        return alert && alert.Visible !== false;
      });
    });
  }

  return {
    Code: "0",
    Message: "Success",
    ElapsedSeconds: 0.05,
    IsReload: false,
    Data: {
      HomeInformationList: list,
      StatisticsTotalList: homeData.StatisticsTotalList || [],
      DoctorList: homeData.DoctorList || [
        { Code: "ALL", Name: "ALL" },
        { Code: "AHMAD", Name: "DR AHMAD" },
        { Code: "AIRIL", Name: "DR AIRIL" },
        { Code: "AKCHONG", Name: "DR CHONG AUN KEE" }
      ],
      TeamList: homeData.TeamList || [
        { Code: "ALL", Name: "ALL" },
        { Code: "TEAM_A", Name: "Team A" },
        { Code: "TEAM_B", Name: "Team B" }
      ]
    }
  };
}

export default {
  GetHomeData
};
