//Order
import orderNBM from "@/assets/images/orderNBM.svg";
import Nursingtasker from "@/assets/images/orderNurse.svg";
import Medication from "@/assets/images/orderMedical.svg";
import Laboratory from "@/assets/images/orderLab.svg";
import Radiology from "@/assets/images/orderRadiology.svg";
import Diagnostic from "@/assets/images/orderDiagnostic.svg";

//Pain Score
import PainScore_4 from "@/assets/images/PainScore-0.svg";
import PainScore_6 from "@/assets/images/PainScore-1.svg";
import PainScore_8 from "@/assets/images/PainScore-2.svg";
import PainScore_10 from "@/assets/images/PainScore-3.svg";

//Isolation
import Isolate_Reverse from "@/assets/images/Isolate_Reverse.svg";
import Isolation_black from "@/assets/images/Isolation_black.svg";

//animation Alert Status 動畫
import animation_Blood from "@/assets/images/bloodtransfusion.gif";
import animation_IV from "@/assets/images/IV.gif";

//Alert Status Default
import Notification from "@/assets/images/notification.svg";
import Acuity from "@/assets/images/Acuity.svg";
import Length_of_Stay from "@/assets/images/Length_of_Stay.svg";
import location from "@/assets/images/location.svg";
import BedBooking from "@/assets/images/clear_beds.svg";

//Alert Status
import TubeFeeding from "@/assets/images/tubefeed.svg";
import BloodPause from "@/assets/images/BloodTransfusionOnGoing.svg";
import Infusionpump from "@/assets/images/ivOngoing.svg";
import Specialprecaution from "@/assets/images/completeRestInBed.svg";
import Suicide_Risk from "@/assets/images/suicide.svg";
import Allergy from "@/assets/images/allergy.svg";
import IV_line from "@/assets/images/IVline.svg";
import Tubing_care from "@/assets/images/tubingcare.svg";
import Biohazard from "@/assets/images/Biohazard.svg";
import Braden from "@/assets/images/bradenScore.svg";
import O2 from "@/assets/images/O2.svg";
import Fall_Risk from "@/assets/images/falling.svg";
import Mobility from "@/assets/images/wheelchair.svg";
import Restraint from "@/assets/images/restraint.svg";
import Companion from "@/assets/images/Companion.svg";
import PatientRequest from "@/assets/images/notification.svg";

//EWS
import EWS_0 from "@/assets/images/Rectangle-0.svg";
import EWS_1 from "@/assets/images/Rectangle-1.svg";
import EWS_2 from "@/assets/images/Rectangle-2.svg";

//Filiter
import Filter_Critical from "@/assets/images/Filter/Critical.svg";
import Filter_Diagnostic from "@/assets/images/Filter/Diagnostic.svg";
import Filter_Isolation from "@/assets/images/Filter/Isolation.svg";
import Filter_Laboratory from "@/assets/images/Filter/Laboratory.svg";
import Filter_Medication from "@/assets/images/Filter/Medication.svg";
import Filter_PainScore from "@/assets/images/Filter/PainScore.svg";
import Filter_Radiology from "@/assets/images/Filter/Radiology.svg";



//////////// 不得隨意變更順序 /////////////////
export default function alert() {
  const Order = [
    {
      title: "NBM",
      img: orderNBM,
    },
    {
      title: "Nursing task",
      img: Nursingtasker,
    },
    {
      title: "CPOE ORDER-Medication",
      img: Medication,
    },
    {
      title: "CPOE ORDER-Laboratory",
      img: Laboratory,
    },
    {
      title: "CPOE ORDER-Radiology",
      img: Radiology,
    },
    {
      title: "CPOE ORDER-Diagnostic",
      img: Diagnostic,
    },
  ];

  const PainScore = [
    {
      title: "4、5",
      img: PainScore_4,
    },
    {
      title: "6、7",
      img: PainScore_6,
    },
    {
      title: "8、9",
      img: PainScore_8,
    },
    {
      title: "10",
      img: PainScore_10,
    },
  ];

  const Isolation = [
    {
      title: "Reverse",
      img: Isolate_Reverse,
    },
    {
      title: "Normal",
      img: Isolation_black,
    },
  ];
  const AlertStatusDefault=[
    {
      title: "Notification",
      img: Notification,
    },
    {
      title: "Length of Stay",
      img: Length_of_Stay,
    },
    {
      title: "Acuity",
      img: Acuity,
    },
    {
      title: "Location",
      img: location,
    },
    {
      title: "Companion",
      img: Companion,
    },
    {
      title: "Bed Booking",
      img: BedBooking,
    },
  ];

  const AlertStatus = [
    
    {
      title: "Tube Feeding",
      img: TubeFeeding,
    },
    {
      title: "Blood Transfusion",
      img: BloodPause,
    },
    {
      title: "Infusion pump",
      img: Infusionpump,
    },
    {
      title: "Special precaution",
      img: Specialprecaution,
    },
    {
      title: "Suicide Risk",
      img: Suicide_Risk,
    },
    {
      title: "Allergy",
      img: Allergy,
    },
    {
      title: "IV line",
      img: IV_line,
    },
    {
      title: "Tubing care",
      img: Tubing_care,
    },
    {
      title: "Biohazard",
      img: Biohazard,
    },
    {
      title: "Braden Score",
      img: Braden,
    },
    {
      title: "Oxygen Status",
      img: O2,
    },
    {
      title: "Fall Risk",
      img: Fall_Risk,
    },
    {
      title: "Mobility",
      img: Mobility,
    },
    {
      title: "Restraint",
      img: Restraint,
    },
    {
      title: "Companion",
      img: Companion,
    },
    {
      title: "PatientRequest",
      img: PatientRequest,
    },
  ];

  const animation = [
    {
      title: "Blood Transfusion",
      img: animation_Blood,
    },
    {
      title: "Infusion pump ",
      img: animation_IV,
    },
  ];

  const EWS = [
    {
      title: "Total Score >=7",
      img: EWS_0,
    },
    {
      title: "Total Score 5-6 /  Sub-score >=3",
      img: EWS_1,
    },
    {
      title: "Total Score 0-4",
      img: EWS_2,
    },
  ];

  const Filiter = [
    {
      title: "Filter_Critical",
      img: Filter_Critical,
    },
    {
      title: "Filter_PainScore",
      img: Filter_PainScore,
    },
    {
      title: "Filter_Isolation",
      img: Filter_Isolation,
    },
    {
      title: "Filter_Medication",
      img: Filter_Medication,
    },
    {
      title: "Filter_Laboratory",
      img: Filter_Laboratory,
    },
    {
      title: "Filter_Radiology",
      img: Filter_Radiology,
    },
    {
      title: "Filter_Diagnostic",
      img: Filter_Diagnostic,
    },
  ];

  return {
    Order,
    PainScore,
    Isolation,
    AlertStatus,
    AlertStatusDefault,
    animation,
    EWS,
    Filiter,
  };
}
