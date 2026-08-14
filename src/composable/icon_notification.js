//notification
import CustomerService from "@/assets/images/Notification/CustomerService.svg";
import BedMaking from "@/assets/images/Notification/BedMaking.svg";
import DripIssue from "@/assets/images/Notification/DripIssue.svg";
import Housekeeping from "@/assets/images/Notification/Housekeeping.svg";
import PainAssist from "@/assets/images/Notification/PainAssist.svg";
import RequestWater from "@/assets/images/Notification/RequestWater.svg";
import Toileting from "@/assets/images/Notification/Toileting.svg";

//////////// 不得隨意變更順序 /////////////////
export default function icon_notification() {
const Notification =[{
    title:"Customer Service",
    img:CustomerService
},
{
    title:"Bed Making",
    img:BedMaking
},
{
    title:"DripIssue",
    img:DripIssue
},
{
    title:"Housekeeping",
    img:Housekeeping
},
{
    title:"PainAssist",
    img:PainAssist
},
{
    title:"RequestWater",
    img:RequestWater
},
{
    title:"Toileting",
    img:Toileting
}];

    return {
        Notification
    };
}