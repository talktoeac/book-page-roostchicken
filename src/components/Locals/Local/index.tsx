import { useStore } from "../../../store";
import { Actions } from "./Actions";
import { Amenities } from "./Amenities";
import { Image } from "./Image";
import { Info } from "./Info";
import classes from "./style.module.css";
import { Title } from "./Title";

export interface IIcon {
  title: string;
  src: string;
}

export interface ILocal {
  title: string;
  img: string;
  address: string;
  urlMap: string;
  phone: string;
  hours: string[];
  icons: IIcon[];
  redirectCalendar: string;
  valueCalendar: string;
  people: number;
}

export const Local = ({
  img,
  title,
  address,
  urlMap,
  phone,
  icons,
  hours,
  redirectCalendar,
  valueCalendar,
  people,
}: ILocal) => {
  const bookNow = useStore((store) => store.language.local.bookNow);
  return (
    <article className={classes.premise}>
      <Title title={title} className={classes.title} />
      <Image img={img} title={title} className={classes.image} />
      <Info
        address={address}
        urlMap={urlMap}
        phone={phone}
        className={classes.info}
      />
      <Amenities icons={icons} className={classes.amenities} />
      <Actions
        hours={hours}
        redirectCalendar={redirectCalendar}
        valueCalendar={valueCalendar}
        people={people}
        className={classes.actions}
      />
      <p className={classes.reservationTitle}>{bookNow.toUpperCase()}</p>
    </article>
  );
};
