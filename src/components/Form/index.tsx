import { MdDateRange } from "react-icons/md";
import classes from "./style.module.css";
import globalClasses from "../global.module.css";
import { defaultValue, useStore } from "../../store";
import { availableConfig } from "../../config";
import { useEffect, useMemo } from "react";

export interface IFormProps {
  valueCalendar: string;
  setValueCalendar: React.Dispatch<React.SetStateAction<string>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  hour: THour;
  setHour: React.Dispatch<React.SetStateAction<THour>>;
}

export type THour = 13 | 14 | 15 | 16 | 19 | 20 | 21 | 22 | 23;

export type TDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const hoursValues = [13, 14, 15, 16, 19, 20, 21, 22, 23];
const quantityPersons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const now = new Date();

export const checkIsToday = (date: Date) => {
  const isSameYear = date.getFullYear() === now.getFullYear();
  const isSameMonth = date.getMonth() === now.getMonth();
  const isSameDate = date.getDate() === now.getDate();
  const isToday = isSameYear && isSameMonth && isSameDate;
  return isToday;
};

export const getAvailableHours = (dateData: Date) => {
  const day = dateData.getDay() as TDay;
  const configDay = availableConfig[day];
  const isToday = checkIsToday(dateData);
  if (isToday) {
    const hoursConfig = Object.keys(configDay).map(Number) as THour[];
    const hoursAvailables = hoursConfig.filter((hourConfig) => {
      if (hourConfig === dateData.getHours()) {
        const hoursMinuteConfig = configDay[hourConfig].map(
          (hourMinuteConfig) => hourMinuteConfig.split(":").map(Number)
        );
        const hoursMinuteConfigAvailables = hoursMinuteConfig.filter(
          ([_, minuteConfig]) => dateData.getMinutes() > minuteConfig
        );
        return hoursMinuteConfigAvailables.length;
      }
      return hourConfig > dateData.getHours();
    });
    return hoursAvailables;
  }
  return hoursValues;
};

export const getAvailableHourMinutes = (dateData: Date, hour: THour) => {
  const day = dateData.getDay() as TDay;
  const configDay = availableConfig[day];
  const isToday = checkIsToday(dateData);
  const isTodaySameHours = hour === now.getHours();
  const configHoursMinute = configDay[hour];

  if (isToday) {
    const minutes = configHoursMinute.map(
      (configHourMinute) => configHourMinute.split(":").map(Number)[1]
    );
    const minutesAvailabes = minutes
      .filter((minute) => {
        if (isTodaySameHours) return minute > now.getMinutes();
        else return minute >= dateData.getMinutes();
      })
      .map((minute) => `${hour}:${`${minute < 10 ? "0" : ""}${minute}`}`);
    return minutesAvailabes;
  }
  return configHoursMinute;
};

export const Form = () => {
  const {
    valueCalendar,
    setValueCalendar,
    people,
    setPeople,
    hour,
    setHour,
    language,
  } = useStore();

  const hours = useMemo(() => {
    let dateData = new Date(valueCalendar);
    const isToday = checkIsToday(dateData);
    if (isToday) {
      dateData = new Date(
        dateData.getFullYear(),
        dateData.getMonth(),
        dateData.getDate(),
        now.getHours(),
        now.getMinutes()
      );
    }
    return getAvailableHours(dateData);
  }, [valueCalendar]);

  useEffect(() => {
    setHour(hours[0] as THour);
  }, [hours, setHour]);

  return (
    <>
      <form
        className={`${classes.form_reservation} ${globalClasses.container}`}
      >
        <div className={classes.content_date_input}>
          <input
            value={valueCalendar}
            min={defaultValue}
            onChange={(e) => setValueCalendar(e.target.value)}
            className={classes.form_reservation__input}
            type="date"
          />
          <MdDateRange className={classes.MdDateRange_icon} />
        </div>

        <select
          className={classes.form_reservation__input}
          name="PERSONAS"
          id="people"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        >
          {quantityPersons.map((quantityPerson) => (
            <option value={quantityPerson} key={quantityPerson}>
              {quantityPerson}{" "}
              {quantityPerson === 1
                ? language.form.person.toUpperCase()
                : language.form.persons.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setHour(Number(e.target.value) as THour)}
          value={hour}
          className={classes.form_reservation__input}
        >
          {hours.map((hourValue) => (
            <option value={hourValue} key={hourValue}>
              {hourValue}:00
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
