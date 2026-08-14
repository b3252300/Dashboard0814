// Bed Status Mock Module (Expanded Dataset)
export default {
  GetBedStatusData(req) {
    return {
      Code: "0",
      Message: "Success",
      IsReload: false,
      Data: {
        isReload: false,
        BedStatusTotalList: {
          Occupied: 26,
          Available: 8,
          Discharging: 5,
          Housekeeping: 4,
          Blocked: 2,
          Isolation: 4,
          BookingBed: 3
        },
        List: [
          // Row 1: Rooms 701, 702, Nursing Station, Room 703
          {
            RowType: 1,
            ColmnList: [
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "701A", BedStatus: 1, IsolationBedType: "NORMAL", IsBooking: false, Sex: 1 },
                  { BedName: "701B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "701C", BedStatus: 3, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "701D", BedStatus: 2, IsolationBedType: null, IsBooking: true, Sex: null }
                ]
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "702A", BedStatus: 4, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "702B", BedStatus: 5, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "702C", BedStatus: 1, IsolationBedType: "REVERSE", IsBooking: false, Sex: 1 },
                  { BedName: "702D", BedStatus: 2, IsolationBedType: null, IsBooking: false, Sex: null }
                ]
              },
              {
                ColumnType: "Station",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: []
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "703A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "703B", BedStatus: 4, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "703C", BedStatus: 3, IsolationBedType: "NORMAL", IsBooking: false, Sex: 2 },
                  { BedName: "703D", BedStatus: 3, IsolationBedType: null, IsBooking: false, Sex: 1 }
                ]
              }
            ]
          },
          // Row 2: Main Corridor Passageway
          {
            RowType: 2,
            ColmnList: []
          },
          // Row 3: Rooms 704, 705, Emergency Exit, Rooms 706, 707
          {
            RowType: 1,
            ColmnList: [
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "704A", BedStatus: 2, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "704B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "704C", BedStatus: 4, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "704D", BedStatus: 3, IsolationBedType: null, IsBooking: false, Sex: 1 }
                ]
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "705A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "705B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "706A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "706B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 }
                ]
              },
              {
                ColumnType: "EmergencyExit",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: []
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "707A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "707B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "708A", BedStatus: 2, IsolationBedType: null, IsBooking: true, Sex: null },
                  { BedName: "708B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 }
                ]
              }
            ]
          },
          // Row 4: Secondary Corridor Passageway
          {
            RowType: 2,
            ColmnList: []
          },
          // Row 5: Rooms 709, 710, 711, 712
          {
            RowType: 1,
            ColmnList: [
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "709A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "709B", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "710A", BedStatus: 1, IsolationBedType: "NORMAL", IsBooking: false, Sex: 2 },
                  { BedName: "710B", BedStatus: 2, IsolationBedType: null, IsBooking: false, Sex: null }
                ]
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "711A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "711B", BedStatus: 2, IsolationBedType: null, IsBooking: true, Sex: null },
                  { BedName: "712A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 1 },
                  { BedName: "712B", BedStatus: 3, IsolationBedType: null, IsBooking: false, Sex: 2 }
                ]
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "715A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "715B", BedStatus: 4, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "716A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "716B", BedStatus: 5, IsolationBedType: null, IsBooking: false, Sex: null }
                ]
              },
              {
                ColumnType: "Room_140",
                LeftSpacing: 0,
                TopSpacing: 0,
                RoomList: [
                  { BedName: "717A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "717B", BedStatus: 2, IsolationBedType: null, IsBooking: false, Sex: null },
                  { BedName: "718A", BedStatus: 1, IsolationBedType: null, IsBooking: false, Sex: 2 },
                  { BedName: "718B", BedStatus: 2, IsolationBedType: null, IsBooking: false, Sex: null }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  GetDischargeData(req) {
    return {
      Code: "0",
      Message: "Success",
      Data: {
        isReload: false,
        DischargeTotal: 8,
        List: [
          {
            BedCode: "701C",
            BedName: "701C",
            Name: "THERESA M*",
            KindDateTime: "2026-08-14T09:30:00",
            BedCleanDoneDateTime: "2026-08-14T10:15:00",
            TimeTaken: "45 min",
            SatusText: "Discharged"
          },
          {
            BedCode: "703C",
            BedName: "703C",
            Name: "BONAVIDE SN*",
            KindDateTime: "2026-08-14T11:00:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "In progress",
            SatusText: "Transfer Out"
          },
          {
            BedCode: "703D",
            BedName: "703D",
            Name: "KUMARAVELU P*",
            KindDateTime: "2026-08-14T13:45:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "Pending",
            SatusText: "Discharged"
          },
          {
            BedCode: "704D",
            BedName: "704D",
            Name: "WONG KW*",
            KindDateTime: "2026-08-14T14:20:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "Pending",
            SatusText: "Discharged"
          },
          {
            BedCode: "712B",
            BedName: "712B",
            Name: "YEOH HM*",
            KindDateTime: "2026-08-14T15:10:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "Pending",
            SatusText: "Discharged"
          },
          {
            BedCode: "715B",
            BedName: "715B",
            Name: "LIM BK*",
            KindDateTime: "2026-08-14T15:40:00",
            BedCleanDoneDateTime: "2026-08-14T16:10:00",
            TimeTaken: "30 min",
            SatusText: "Transfer Out"
          },
          {
            BedCode: "717B",
            BedName: "717B",
            Name: "TEH KS*",
            KindDateTime: "2026-08-14T16:00:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "In progress",
            SatusText: "Discharged"
          },
          {
            BedCode: "718B",
            BedName: "718B",
            Name: "LEONG ML*",
            KindDateTime: "2026-08-14T16:30:00",
            BedCleanDoneDateTime: null,
            TimeTaken: "Pending",
            SatusText: "Discharged"
          }
        ]
      }
    };
  },
  GetAdmissionData(req) {
    return {
      Code: "0",
      Message: "Success",
      Data: {
        isReload: false,
        AdmissionTotal: 6,
        List: [
          {
            BedCode: "704A",
            BedName: "704A",
            Name: "LIM WX*",
            KindDateTime: "2026-08-14T08:15:00",
            ArrivalDateTime: "2026-08-14T08:45:00",
            TimeTaken: "30 min",
            SatusText: "Admitted"
          },
          {
            BedCode: "708A",
            BedName: "708A",
            Name: "YAP CH*",
            KindDateTime: "2026-08-14T10:00:00",
            ArrivalDateTime: null,
            TimeTaken: "Expected 14:00",
            SatusText: "Transfer In"
          },
          {
            BedCode: "710B",
            BedName: "710B",
            Name: "TAN BL*",
            KindDateTime: "2026-08-14T11:30:00",
            ArrivalDateTime: "2026-08-14T12:10:00",
            TimeTaken: "40 min",
            SatusText: "Admitted"
          },
          {
            BedCode: "711B",
            BedName: "711B",
            Name: "CHEW AK*",
            KindDateTime: "2026-08-14T13:00:00",
            ArrivalDateTime: null,
            TimeTaken: "Expected 15:30",
            SatusText: "Admitted"
          },
          {
            BedCode: "717A",
            BedName: "717A",
            Name: "GOH ES*",
            KindDateTime: "2026-08-14T14:15:00",
            ArrivalDateTime: null,
            TimeTaken: "Expected 16:00",
            SatusText: "Transfer In"
          },
          {
            BedCode: "718A",
            BedName: "718A",
            Name: "ONG MY*",
            KindDateTime: "2026-08-14T15:00:00",
            ArrivalDateTime: null,
            TimeTaken: "Expected 17:30",
            SatusText: "Admitted"
          }
        ]
      }
    };
  }
};
