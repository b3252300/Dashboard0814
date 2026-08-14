// Directory Document Mock Module
export default {
  GetDirectoryData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        DirectoryFileRowId: "DIR-MOCK-PDF-001"
      }
    };
  }
};
