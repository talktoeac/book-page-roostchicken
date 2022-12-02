import { Address } from "./Address";
import { Phone } from "./Phone";
import classes from "./style.module.css";

export interface IInfoProps {
  address: string;
  urlMap: string;
  phone: string;
  className?: string;
}
export const Info = ({
  address,
  urlMap,
  phone,
  className = "",
}: IInfoProps) => {
  return (
    <section className={`${classes.premise__info_section} ${className}`}>
      <Address address={address} urlMap={urlMap} />
      <Phone phone={phone} />
    </section>
  );
};
