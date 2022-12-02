import create from "zustand";
import { THour } from "./components/Form";
import { getLanguage, Language } from "./lang";

const now = new Date();
const month = now.getMonth() + 1;
const today = now.getDate();

export const defaultValue = `${now.getFullYear()}-${
  (month < 10 ? "0" : "") + month
}-${(today < 10 ? "0" : "") + today}`;

export interface IStore {
  valueCalendar: string;
  setValueCalendar: (newValueCalendar: string) => void;
  hour: THour;
  setHour: (newHour: THour) => void;
  people: number;
  setPeople: (newPeople: number) => void;
  language: Language;
}

export const useStore = create<IStore>((set, get) => ({
  language: getLanguage(),
  valueCalendar: defaultValue,
  setValueCalendar: (newValueCalendar: string) => {
    set((store) => ({
      ...store,
      valueCalendar: newValueCalendar,
    }));
  },
  hour: 13,
  setHour: (newHour: THour) => {
    set((store) => ({
      ...store,
      hour: newHour,
    }));
  },
  people: 1,
  setPeople: (newPeople: number) => {
    set((store) => ({
      ...store,
      people: newPeople,
    }));
  },
}));
