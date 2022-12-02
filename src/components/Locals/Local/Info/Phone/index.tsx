import { phoneRedLinkIcon } from "../../../../../config/icons/links";
import classes from "../style.module.css";

export const Phone = ({ phone }: { phone: string }) => {
  return (
    <p className={classes.premise__info_section__info}>
      <img
        className={classes.img}
        data-src={phoneRedLinkIcon}
        src={phoneRedLinkIcon}
        alt=""
      />
      <span>
        <a href={`tel:${phone}`} target="_self" style={{ color: "black" }}>
          {phone}
        </a>
      </span>
    </p>
  );
};
