import { availableConfig } from "../../config";
import { getAvailableHourMinutes, TDay, THour } from "../Form";
import { paseoPrado, sanAndres } from "../../config/data";
import { Local } from "./Local";
import classes from "./style.module.css";
import globalClasses from "../global.module.css";
import { useStore } from "../../store";

export const Locals = () => {
  const {
    people,
    valueCalendar,
    hour,
    language: { local },
  } = useStore();

  const hours = getAvailableHourMinutes(new Date(valueCalendar), hour);

  return (
    <section className={`${classes.premises} ${globalClasses.container}`}>
      <Local
        {...paseoPrado}
        redirectCalendar={local.paseoDelPrado.redirect}
        hours={hours}
        valueCalendar={valueCalendar}
        people={people}
      />
      <div className={classes.premise_divider}></div>
      <Local
        {...sanAndres}
        redirectCalendar={local.sanAndres.redirect}
        hours={hours}
        valueCalendar={valueCalendar}
        people={people}
      />
      <div className={classes.premise_divider}></div>
    </section>
  );
};
