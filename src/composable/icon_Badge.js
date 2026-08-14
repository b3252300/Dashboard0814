import BCCCPC from "@/assets/images/smartward_badge_BCCCPC.svg";
import BOG from "@/assets/images/smartward_badge_BOG.svg";
import CCT from "@/assets/images/smartward_badge_CCT.svg";
import CP from "@/assets/images/smartward_badge_CP.svg";
import CRE from "@/assets/images/smartward_badge_CRE.svg";
import DD from "@/assets/images/smartward_badge_DD.svg";
import NRIC from "@/assets/images/smartward_badge_NRIC.svg";
import OPT_C from "@/assets/images/smartward_badge_OPT&C.svg";
import VIP from "@/assets/images/smartward_badge_VIP.svg";
import VVIP from "@/assets/images/smartward_badge_VVIP.svg";
import Blacklist from "@/assets/images/smartward_badge_Blacklist.svg";
import LAP from "@/assets/images/smartward_badge_LAP.svg";
import PUB from "@/assets/images/smartward_badge_PUB.svg";
import PDPA from "@/assets/images/smartward_badge_PDPA.svg";

export default function Badge(){
    const Badgedefault = [
        {
            title: "BREAST CANCER CCPC(BCCCPC)",
            img: BCCCPC,
        },
        {
            title: "BOARD OF GOVERNORS(BOG)",
            img: BOG,
        },
        {
            title: "CLINICAL TRIAL(CCT)",
            img: CCT,
        },
        {
            title: "CONTACT PRECAUTIONS(CP)",
            img: CP,
        },
        {
            title: "CRE CLOSED CONTACT(CRE)",
            img: CRE,
        },
        {
            title: "DO NOT REGISTER(DD)",
            img: DD,
        },
        {
            title: "PROVIDE IC(NRIC)",
            img: NRIC,
        },
        {
            title: "OUTPATIENT TERMS(OPT&C)",
            img: OPT_C,
        },
        {
            title: "VIP",
            img: VIP,
        },
        {
            title: "VVIP",
            img: VVIP,
        },
        {
            title: "Blacklist",
            img: Blacklist,
        },
        {
            title: "UNPAID BILL(LAP)",
            img: LAP,
        },
        {
            title: "Orang Kurang Upaya(PUB)",
            img: PUB,
        },
        {
            title: "Personal Data Protection Act(PDPA)",
            img: PDPA,
        },
    ];
    return {
        Badgedefault
    }

}