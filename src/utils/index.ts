import { TDay, THour } from "../components";
import { availableConfig } from "../config";

export const getDay = (valueCalendar: string) => {
  return availableConfig[new Date(valueCalendar).getDay() as TDay];
};
export const getHours = (valueCalendar: string, hour: THour) => {
  return getDay(valueCalendar)[hour as THour];
};
