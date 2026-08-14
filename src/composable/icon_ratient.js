//Gender
import Male from '@/assets/images/male.svg';
import female from '@/assets/images/female.svg';
import Unknown from '@/assets/images/Transgender.svg';
//Critical
import delivered from '@/assets/images/critical_delivered.svg';
import goIt from '@/assets/images/critical_got.svg';
import action from '@/assets/images/critical_action.svg';
//DNR/DIL
import DIL from '@/assets/images/DIL.svg';
import DNR from '@/assets/images/DNR.svg';

//Order
import orderNBM from '@/assets/images/orderNBM.svg';
import Nursingtasker from '@/assets/images/orderNurse.svg';
import Medication from '@/assets/images/orderMedical.svg';
import Laboratory from '@/assets/images/orderLab.svg';
import Radiology from '@/assets/images/orderRadiology.svg';
import Diagnostic from '@/assets/images/orderDiagnostic.svg';





//////////// 不得隨意變更順序 /////////////////
export default function icon_ratient() {
    const gender = [{   
        title:"Unknown",
        img:Unknown       
    },
    {
        title:"Male",
        img:Male 
    },
    {
        title:"Female",
        img:female 
    }]
    
    const Critical=[{
        title:"delivered",
        img:delivered
    },
    {
        title:"got it",
        img:goIt
    },
    {
        title:"action done",
        img:action
    }]

    const DNRDIL=[{   
        title:"Dangerous Ill List",
        img:DIL
    },
    {   
        title:"Do not resuscitation",
        img:DNR
    }]

    
    return {
        gender,
        Critical,
        DNRDIL

    };
}