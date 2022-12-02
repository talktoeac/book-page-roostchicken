import { locationRedLinkIcon } from "../../../../../config/icons/links";
import classes from "../style.module.css";

export const Address = ({
  address,
  urlMap,
}: {
  address: string;
  urlMap: string;
}) => {
  return (
    <p className={classes.premise__info_section__info}>
      <img
        className={classes.img}
        data-src={locationRedLinkIcon}
        src={locationRedLinkIcon}
        alt=""
      />
      <a style={{ textDecoration: "none", color: "black" }} href={urlMap}>
        {address}
      </a>
    </p>
  );
};
