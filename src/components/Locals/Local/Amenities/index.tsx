import { IIcon } from "..";
import classes from "./style.module.css";

export interface IAmenities {
  icons: IIcon[];
  className?: string;
}
export const Amenities = ({ icons, className }: IAmenities) => {
  return (
    <footer className={`${classes.amenities} ${className}`}>
      {icons.map(({ src, title }, index) => (
        <img key={index} src={src} alt={title} title={title} />
      ))}
    </footer>
  );
};
