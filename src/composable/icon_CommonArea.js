import NumberOfPatients from "@/assets/images/NumberOfPatients.svg";
import PatientsArrive from "@/assets/images/PatientsArrive.svg";
import gohome from "@/assets/images/MealOrder/Discharging.svg";
import smartward_card_PatientRequest from "@/assets/images/smartward_card_PatientRequest.svg";
import smartward_card_Refresh from "@/assets/images/smartward_card_Refresh.svg";
import smartward_card_Info from "@/assets/images/smartward_card_Info.svg";
import smartward_card_Set from "@/assets/images/smartward_card_Set.svg";

//Patient Request
import RequestWater from "@/assets/images/bedside_RequestWater.svg";
import BedMaking from "@/assets/images/bedsideTerminal_BedMaking.svg";
import PainAssist  from "@/assets/images/bedsideTerminal_PainAssist.svg";
import DripIssue  from "@/assets/images/bedside_DripIssue.svg";
import Toileting  from "@/assets/images/bedside_Toileting.svg";
import Housekeeping  from "@/assets/images/bedsideTerminal_btn_Housekeeping.svg";
import CustomerService  from "@/assets/images/bedsideTerminal_CustomerService.svg";

//////////// 不得隨意變更順序 /////////////////
export default function CommonArea(){
    const CommonAreaIcon=[
        {
            title: "Number Of Patients In Ward<br>Total Ward Beds (Blocked Beds)",
            img: NumberOfPatients,
        },
        {
            title: "Estimated Number Of Arriving Patients",
            img: PatientsArrive,
        },
        {
            title: "Number Of patients Being Discharged<br>Patients Can Leave Ward",
            img: gohome,
        },
        {
            title: "Patient Request",
            img: smartward_card_PatientRequest,
        },
        {
            title: "Refresh",
            img: smartward_card_Refresh,
        },
        {
            title: "Info",
            img: smartward_card_Info,
        },
        {
            title: "Set",
            img: smartward_card_Set,
        },
    ];

    const PatientRequest=[
        {
            title: "Request Water",
            img: RequestWater
        },
        {
            title: "Bed Making",
            img: BedMaking
        },
        {
            title: "Pain Assist",
            img: PainAssist
        },
        {
            title: "Drip Issue",
            img: DripIssue
        },
        {
            title: "Toileting",
            img: Toileting
        },
        {
            title: "Housekeeping",
            img: Housekeeping
        },
        {
            title: "Customer Service",
            img: CustomerService
        }
    ]


    return {
        CommonAreaIcon,
        PatientRequest

    }
}