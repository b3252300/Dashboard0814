// Patient Badges Mock Module (Structured for local SVG badges resolution)
export default {
  GetBadgeData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        Columns: [
          "BREAST CANCER CCPC(BCCCPC)",
          "BOARD OF GOVERNORS(BOG)",
          "CLINICAL TRIAL(CCT)",
          "CONTACT PRECAUTIONS(CP)",
          "CRE CLOSED CONTACT(CRE)",
          "DO NOT REGISTER(DD)",
          "PROVIDE IC(NRIC)",
          "OUTPATIENT TERMS(OPT&C)",
          "VIP",
          "VVIP",
          "Blacklist",
          "UNPAID BILL(LAP)",
          "Orang Kurang Upaya(PUB)",
          "Personal Data Protection Act(PDPA)"
        ],
        List: [
          {
            BedCode: "R701-BA",
            BedName: "701A",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: true },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: false },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: false },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: true },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: false },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: false },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: false },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: false },
              { Code: "VIP", Name: "VIP", Visible: true },
              { Code: "VVIP", Name: "VVIP", Visible: false },
              { Code: "Blacklist", Name: "Blacklist", Visible: false },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: false },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: false },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: false }
            ]
          },
          {
            BedCode: "R701-BB",
            BedName: "701B",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: false },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: true },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: false },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: false },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: false },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: false },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: false },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: false },
              { Code: "VIP", Name: "VIP", Visible: false },
              { Code: "VVIP", Name: "VVIP", Visible: true },
              { Code: "Blacklist", Name: "Blacklist", Visible: false },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: false },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: false },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: false }
            ]
          },
          {
            BedCode: "R701-BC",
            BedName: "701C",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: false },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: false },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: true },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: true },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: false },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: false },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: false },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: false },
              { Code: "VIP", Name: "VIP", Visible: false },
              { Code: "VVIP", Name: "VVIP", Visible: false },
              { Code: "Blacklist", Name: "Blacklist", Visible: true },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: false },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: false },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: false }
            ]
          },
          {
            BedCode: "R702-BA",
            BedName: "702A",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: false },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: false },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: false },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: false },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: true },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: false },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: false },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: false },
              { Code: "VIP", Name: "VIP", Visible: false },
              { Code: "VVIP", Name: "VVIP", Visible: false },
              { Code: "Blacklist", Name: "Blacklist", Visible: false },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: true },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: false },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: false }
            ]
          },
          {
            BedCode: "R702-BC",
            BedName: "702C",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: false },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: false },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: false },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: false },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: false },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: true },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: true },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: false },
              { Code: "VIP", Name: "VIP", Visible: true },
              { Code: "VVIP", Name: "VVIP", Visible: false },
              { Code: "Blacklist", Name: "Blacklist", Visible: false },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: false },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: false },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: false }
            ]
          },
          {
            BedCode: "R703-BA",
            BedName: "703A",
            BadgeList: [
              { Code: "BCCCPC", Name: "BREAST CANCER CCPC(BCCCPC)", Visible: false },
              { Code: "BOG", Name: "BOARD OF GOVERNORS(BOG)", Visible: false },
              { Code: "CCT", Name: "CLINICAL TRIAL(CCT)", Visible: false },
              { Code: "CP", Name: "CONTACT PRECAUTIONS(CP)", Visible: false },
              { Code: "CRE", Name: "CRE CLOSED CONTACT(CRE)", Visible: false },
              { Code: "DD", Name: "DO NOT REGISTER(DD)", Visible: false },
              { Code: "NRIC", Name: "PROVIDE IC(NRIC)", Visible: false },
              { Code: "OPT_C", Name: "OUTPATIENT TERMS(OPT&C)", Visible: true },
              { Code: "VIP", Name: "VIP", Visible: false },
              { Code: "VVIP", Name: "VVIP", Visible: false },
              { Code: "Blacklist", Name: "Blacklist", Visible: false },
              { Code: "LAP", Name: "UNPAID BILL(LAP)", Visible: false },
              { Code: "PUB", Name: "Orang Kurang Upaya(PUB)", Visible: true },
              { Code: "PDPA", Name: "Personal Data Protection Act(PDPA)", Visible: true }
            ]
          }
        ]
      }
    };
  }
};
