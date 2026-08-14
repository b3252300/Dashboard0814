// Meal Ordering Mock Module (Expanded Dataset)
export default {
  GetMealOrderingData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        NonNBMCount: 12,
        NBMCount: 4,
        NonNBMList: [
          { BedCode: "L701A", BedName: "701A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "D"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L701B", BedName: "701B", Discharged: false, TransferOut: false, TodayToOrderList: ["D"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L701C", BedName: "701C", Discharged: true, TransferOut: false, TodayToOrderList: ["Lu"], TomorrowToOrderList: [] },
          { BedCode: "L702A", BedName: "702A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "A", "D"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L703A", BedName: "703A", Discharged: false, TransferOut: false, TodayToOrderList: ["D", "S"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L704A", BedName: "704A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "D"], TomorrowToOrderList: ["Br", "Lu", "D"] },
          { BedCode: "L704B", BedName: "704B", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "A", "D", "S"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L705A", BedName: "705A", Discharged: false, TransferOut: false, TodayToOrderList: ["D"], TomorrowToOrderList: ["Br", "Lu", "D"] },
          { BedCode: "L706A", BedName: "706A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "D"], TomorrowToOrderList: ["Br", "Lu", "A", "D"] },
          { BedCode: "L707A", BedName: "707A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "A", "D"], TomorrowToOrderList: ["Br", "Lu", "D", "S"] },
          { BedCode: "L708B", BedName: "708B", Discharged: false, TransferOut: false, TodayToOrderList: ["D", "S"], TomorrowToOrderList: ["Br", "Lu", "A", "D", "S"] },
          { BedCode: "L709A", BedName: "709A", Discharged: false, TransferOut: false, TodayToOrderList: ["Lu", "D"], TomorrowToOrderList: ["Br", "Lu", "D"] }
        ],
        NBMList: [
          { BedCode: "L702B", BedName: "702B", Discharged: false, TransferOut: false, TodayToOrderList: [], TomorrowToOrderList: [] },
          { BedCode: "L703B", BedName: "703B", Discharged: false, TransferOut: false, TodayToOrderList: [], TomorrowToOrderList: [] },
          { BedCode: "L705B", BedName: "705B", Discharged: false, TransferOut: false, TodayToOrderList: [], TomorrowToOrderList: [] },
          { BedCode: "L710A", BedName: "710A", Discharged: false, TransferOut: false, TodayToOrderList: [], TomorrowToOrderList: [] }
        ]
      }
    };
  },
  GetMealOrderingDeadline(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: [
        { Display: "Breakfast", CutTime: "07:00" },
        { Display: "Lunch", CutTime: "11:00" },
        { Display: "Afternoon Tea", CutTime: "14:30" },
        { Display: "Dinner", CutTime: "17:00" },
        { Display: "Supper", CutTime: "20:00" }
      ]
    };
  }
};
