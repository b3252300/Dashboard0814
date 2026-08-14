// useStorage.ts
import { ref } from "vue";
import mediator from "./mediator";
const createMediator = () => mediator.install({});

 export const useStorage = (key: string) => {
  
  const string = ref(null);

  const sub = createMediator();

  sub.subscribe(key, (value:string) => {string.value = value}

);

  return string;
};