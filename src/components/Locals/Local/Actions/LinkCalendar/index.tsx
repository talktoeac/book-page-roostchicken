import { useMemo } from "react";
import { whiteLogoLinkIcon } from "../../../../../config/icons/links";
import classes from "./style.module.css";

export interface ILinkCalendarProps {
  hourMinute: string;
  people: number;
  valueCalendar: string;
  redirectCalendar: string;
}
export const LinkCalendar = ({
  hourMinute,
  people,
  valueCalendar,
  redirectCalendar,
}: ILinkCalendarProps) => {
  const [year, month, date] = valueCalendar.split("-").map(Number);

  const params = {
    cmday: `${year}-${month}-${date}`,
    cmpeople: people,
    cmhour: hourMinute,
  };

  const url = useMemo(() => {
    let url =
      redirectCalendar + ([...redirectCalendar].pop() !== "?" ? "?" : "");
    Object.entries(params).forEach(([key, value], index) => {
      if (index) url += "&";
      url += key + "=" + value;
    });
    return url;
  }, [redirectCalendar, params]);

  return (
    <a href={url} className={`${classes.link} ${classes.btn_hour}`}>
      <span>{hourMinute}</span>
      <span>
        <img
          className={`${classes.logo} ${classes.btn_hour_icon}`}
          src={whiteLogoLinkIcon}
          alt="Roost Chicken"
        />
      </span>
    </a>
  );
};
