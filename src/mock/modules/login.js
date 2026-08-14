// Login Mock Module
export default {
  VerifyDevice(req) {
    return {
      Code: "0",
      Message: "Device Verified",
      IsReload: false,
      Data: {
        IsRegistered: true
      }
    };
  },
  Validation(req) {
    let body = {};
    try {
      if (req && req.body) {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      }
    } catch (e) {
      console.error('[Mock Login] Error parsing body:', e);
    }
    const loginData = body.Data || {};

    if (loginData.Account === "error" || loginData.Password === "error") {
      return {
        Code: 1,
        Message: "Invalid user name or password."
      };
    }

    return {
      Code: "0",
      Message: "Login Success",
      Data: {
        DisplayName: loginData.Account || "系統管理員",
        SwitchableWard: true,
        StationList: [
          { Code: "W7A", Name: "Ward 7A" },
          { Code: "W7B", Name: "Ward 7B" },
          { Code: "W6A", Name: "Ward 6A" }
        ],
        Token: "mock-token-abc123xyz",
        FileToken: "mock-file-token-abc123xyz"
      }
    };
  },
  Logout(req) {
    return {
      Code: "0",
      Message: "Logout Success",
      Data: null
    };
  }
};
