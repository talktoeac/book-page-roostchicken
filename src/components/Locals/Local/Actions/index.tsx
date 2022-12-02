import classes from "./style.module.css";
import { LinkCalendar } from "./LinkCalendar";

export interface IActionsProps {
  hours: string[];
  redirectCalendar: string;
  className?: string;
  valueCalendar: string;
  people: number;
}

export const Actions = ({
  hours,
  redirectCalendar,
  className = "",
  valueCalendar,
  people,
}: IActionsProps) => {
  return (
    <div className={`${classes.premise__actions} ${className}`}>
      {hours.length ? (
        <ul>
          {hours.map((hourMinute, index) => (
            <li key={index}>
              <LinkCalendar
                redirectCalendar={redirectCalendar}
                hourMinute={hourMinute}
                valueCalendar={valueCalendar}
                people={people}
              />
            </li>
          ))}
        </ul>
      ) : (
        <strong style={{ textDecoration: "underline" }}>
          No hay horario disponible a esta hora.
        </strong>
      )}
    </div>
  );
};
