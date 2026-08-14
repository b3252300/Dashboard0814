//Meal Order
import Discharging from "@/assets/images/MealOrder/Discharging.svg";
import TransferOut from "@/assets/images/MealOrder/TransferOut.svg";


//////////// 不得隨意變更順序 /////////////////
export default function MealOrder() {

    const MealOrderdefault = [
        {
            title: "Discharging",
            img: Discharging,
          },
          {
            title: "Transfer Out",
            img: TransferOut,
          },
    ];
    const foodTime = [
      {
        title: "Breakfast",
        img:"Br",
      },
      {
        title: "Lunch",
        img:"Lu",
      },
      {
        title: "Afternoon",
        img:"A",
      },
      {
        title: "Dinner",
        img:"D",
      },
      {
        title: "Supper",
        img:"S",
      },
    ];


    return {
        MealOrderdefault,
        foodTime
    }
}